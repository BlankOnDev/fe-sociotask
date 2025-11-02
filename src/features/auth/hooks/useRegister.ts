import { toaster } from "@/components/ui/toaster";
import { axiosInstance } from "@/lib/axios"
import { MutationConfig } from "@/lib/react-query";
import { useMutation } from "@tanstack/react-query";

type RegisterRequestParams = {
    fullname: string;
    username: string;
    email: string;
    password: string;
}

const register = async (params: RegisterRequestParams) => {
    const response = await axiosInstance.post("/register", params);
    return response.data;
}

type UseRegisterParams = {
    mutationConfig?: MutationConfig<typeof register>;
};

export const useRegister = (params: UseRegisterParams = {}) =>{
    const toasterId = "register-action";
    return useMutation({
        ...params.mutationConfig,
        mutationFn: register,
        onMutate: ()=>{
            toaster.loading({
                id: toasterId,
                title: "Registering...",
                description: "Please wait while we create your account.",
            })
        },
        onSuccess: (data, variables, onMutateResult, context) => {
            toaster.update(toasterId, {
                type: "success",
                title: "Registration Successful",
                description: "Your account has been created successfully. You can now log in.",
            })
            params.mutationConfig?.onSuccess?.(
                data,
                variables,
                onMutateResult,
                context
            )
        },
        onError(error, variables, onMutateResult, context) {
            toaster.update(toasterId, {
                type: "error",
                title: "Registration Failed",
                description:
                    error instanceof Error
                        ? error.message
                        : "An unexpected error occurred. Please try again.",
            })
            params.mutationConfig?.onError?.(
                error,
                variables,
                onMutateResult,
                context
            )
        }
    })
}