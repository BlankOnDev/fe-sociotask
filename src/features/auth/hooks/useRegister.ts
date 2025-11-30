import { toaster } from "@/components/ui/toaster";
import { axiosInstance } from "@/lib/axios";
import { MutationConfig } from "@/lib/react-query";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

type RegisterRequestParams = {
  fullname: string;
  username: string;
  email: string;
  password: string;
};

const register = async (params: RegisterRequestParams) => {
  const response = await axiosInstance.post("/register", params);
  return response.data;
};

type UseRegisterParams = {
  mutationConfig?: MutationConfig<typeof register>;
};

export const useRegister = (params: UseRegisterParams = {}) => {
  const toasterId = "register-action";
  return useMutation({
    ...params.mutationConfig,
    mutationFn: register,
    onMutate: () => {
      toaster.loading({
        id: toasterId,
        title: "Registering...",
        description: "Please wait while we create your account.",
      });
    },
    onSuccess: (data, variables, onMutateResult, context) => {
      toaster.update(toasterId, {
        type: "success",
        title: "Registration Successful",
        description:
          "Your account has been created successfully. You can now log in.",
      });
      params.mutationConfig?.onSuccess?.(
        data,
        variables,
        onMutateResult,
        context
      );
    },
    onError(error, variables, onMutateResult, context) {
      const axiosError = error as AxiosError<{
        status: string;
        message: string;
        errors: string[] | null;
      }>;

      let description = "An unexpected error occurred. Please try again.";

      if (axiosError.response?.data) {
        const { message, errors } = axiosError.response.data;
        if (errors && errors.length > 0) {
          description = errors.join(", ");
        } else if (message) {
          description = message;
        }
      }

      toaster.update(toasterId, {
        type: "error",
        title: "Registration Failed",
        description,
      });
      params.mutationConfig?.onError?.(
        error,
        variables,
        onMutateResult,
        context
      );
    },
  });
};
