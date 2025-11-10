import { authedUserAtom, tokenStorageAtom } from "@/atom/auth";
import { Avatar, Box, Menu, Portal, Separator } from "@chakra-ui/react";
import { useSetAtom } from "jotai";
import { LuLogOut } from "react-icons/lu";
import { useAlert } from "../ui/Alert";

export const UserMenu = () => {
    const setAccessToken = useSetAtom(tokenStorageAtom);
    const setAuthedUser = useSetAtom(authedUserAtom);


    const logoutAlert = useAlert({
        title: "Logout Confirmation",
        message: "Are you sure you want to logout?",
        confirmText: "Logout",
        cancelText: "Cancel",
        onConfirm: () => {
            alert("Logout confirmed");
        },
        onCancel: () => {
        },
    });
    return (
        <Menu.Root positioning={{ placement: "bottom-end" }}>
            <Menu.Trigger rounded="full" focusRing="outside" ml={2} cursor={"pointer"}>
                <Avatar.Root colorPalette="pink" size="sm">
                    <Avatar.Fallback name="Galang Arsandy" />
                    <Avatar.Image src="https://bit.ly/broken-link" />
                </Avatar.Root>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content rounded={"xl"}>
                        <Menu.Item value="profile">Profile</Menu.Item>
                        <Menu.Item value="settings">Tasks Followed</Menu.Item>
                        <Box py={1} w="full">
                            <Separator />
                        </Box>
                        <Menu.Item
                            onClick={logoutAlert.show}
                            value="logout"
                            color="fg.error"
                            _hover={{ bg: "bg.error", color: "fg.error" }}
                        >
                            <LuLogOut />
                            Logout
                        </Menu.Item>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    );
};
