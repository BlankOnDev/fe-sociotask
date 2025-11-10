import { authedUserAtom, tokenStorageAtom } from "@/atom/auth";
import { toaster } from "@/components/ui/toaster";
import { axiosInstance } from "@/lib/axios";
import { QueryConfig } from "@/lib/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { useSetAtom } from "jotai";
import { RESET } from "jotai/utils";
import { useEffect } from "react";

type User = {
    id: number;
    username: string
    email: string
    fullname: string
    x_id: string | null;
    wallet_address: string | null;
    created_at: string
};

type AuthedUserResponse = {
    status: string
    message: string
    data: {
        user: User;
    } | null;
    errors: string[] | null;
};

type UseAuthedUserParams = {
    queryConfig?: QueryConfig<typeof getAuthedUser>;
    token?: string
};
export const getAuthedUser = async (params?: { token?: string }) => {
    try {
        const config = params?.token ? {
            headers: {
                "Authorization": `Bearer ${params.token}`
            }
        } : undefined;
        const response = await axiosInstance.get<AuthedUserResponse>("/users/current", config);
        return response.data.data;
    } catch (error) {
        throw error;
    }
};

export const getAuthedUserQueryKey = () => ["get-authed-user"];
export const getAuthedUserQueryOptions = (params?: { token?: string }) => {
    return queryOptions({
        queryKey: getAuthedUserQueryKey(),
        queryFn: () => getAuthedUser(params),
    });
};


export const useAuthedUser = (params: UseAuthedUserParams = {}) => {
    const setTokenStorage = useSetAtom(tokenStorageAtom);
    const setAuthedUser = useSetAtom(authedUserAtom);
    const authedUserQuery = useQuery({
        ...getAuthedUserQueryOptions({ token: params.token }),
        ...params.queryConfig,
    });

    useEffect(() => {
        if (authedUserQuery.isError) {
            setTokenStorage(RESET); 
            // toaster.create({
            //     type:"error",
            //     title: "Your session no longer valid"
            // })
        }
        if (authedUserQuery.data){
            setAuthedUser(authedUserQuery.data)
        }
    }, [authedUserQuery, setAuthedUser, setTokenStorage])

    return authedUserQuery;
};