import { tokenStorageAtom } from "@/atom/auth";
import { toaster } from "@/components/ui/toaster";
import { axiosInstance } from "@/lib/axios";
import { MutationConfig } from "@/lib/react-query";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useSetAtom } from "jotai";

type LoginRequestParams = {
    email: string;
    password: string;
};

type LoginResponse = {
    data: {
        token: string;
    };
    message: string;
    status: string;
};

export const login = async (params: LoginRequestParams): Promise<LoginResponse> => {
    try {
        const response = await axiosInstance.post("/login", params);
        return response.data;
    } catch (error) {
        throw error;
    }
};

type UseLoginParams = {
    mutationConfig?: MutationConfig<typeof login>;
};

export const useLogin = (params: UseLoginParams = {}) => {
    const setTokenStorage = useSetAtom(tokenStorageAtom);
    const toasterId = "login-action";
    return useMutation({
        ...params.mutationConfig,
        mutationFn: login,
        onMutate: () => {
            toaster.loading({
                id: toasterId,
                title: "Logging in...",
                description: "Please wait while we log you in.",
            });
        },
        onSuccess: (data, variables, onMutateResult, context) => {
            toaster.update(toasterId, {
                type: "success",
                title: "Login Successful",
                description: "You have been logged in successfully.",
            });
            setTokenStorage(data.data.token);
            params.mutationConfig?.onSuccess?.(
                data,
                variables,
                onMutateResult,
                context
            );
        },
        onError(error, variables, onMutateResult, context) {
            const axiosError = error as AxiosError;
            let message;
            if (axiosError.status == 401)
                message = "Invalid email or password.";
            else if (axiosError.status == 404)
                message = "Your account (email) was not found.";
            toaster.update(toasterId, {
                type: "error",
                title: "Login Failed",
                description:
                    message ||
                    (axiosError instanceof Error
                        ? axiosError.message
                        : "An unexpected error occurred. Please try again."),
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
