import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const tokenStorage =
    typeof window !== "undefined"
        ? localStorage.getItem("token")
        : null;
export const tokenStorageAtom = atomWithStorage<string | null>(
    "sociotask-access-token",
    tokenStorage
);

// export const userAuthedAtom = atom(
//     async () => {
//         try {
//             const user = await getProfile();
//             return {
//                 payload: {
//                     code: user.code,
//                     name: user.name,
//                     email: user.email,
//                     profileImage: user.profileImage,
//                     phone: user.phone,
//                     roleName: user.roleName,
//                 },
//                 isAuthed: true,
//             };
//         } catch (err) {
//             console.error({ authInvalid: err });
//             return { isAuthed: false };
//         }
//     },
//     (_, set, newAuth: AuthContextType) => {
//         set(asyncAuthAtom, newAuth);
//     }
// );