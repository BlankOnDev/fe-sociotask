import { getAuthedUser } from "@/hooks/useAuthedUser";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

type GetAuthedUser = Awaited<ReturnType<typeof getAuthedUser>>

const tokenStorage =
    typeof window !== "undefined"
        ? localStorage.getItem("token")
        : null;
export const tokenStorageAtom = atomWithStorage<string | null>(
    "sociotask-access-token",
    tokenStorage
);

export const authedUserAtom = atom<GetAuthedUser>(null)
