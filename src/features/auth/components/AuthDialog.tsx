"use client";
import DialogWrapper from "@/components/DialogWrapper";
import ImageWrapper from "@/components/ui/image";
import { Flex, Tabs } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import LoginContent from "./LoginContent";
import RegisterContent from "./RegisterContent";

export default function AuthDialog({
    open,
    onOpenChange,
    tab,
}: {
    open?: boolean;
    onOpenChange?: (details: { open: boolean }) => void;
    tab: "login" | "register";
}) {
    const [tabActive, setTabActive] = useState<"login" | "register">(tab);

    useEffect(() => {
        if (open) setTabActive(tab);
    }, [tab, open]);

    const handleOpenChange = (details: { open: boolean }) => {
        onOpenChange?.(details);
    };

    return (
        <DialogWrapper
            open={open}
            onOpenChange={handleOpenChange}
            dialogRoot={{
                size: "xs",
            }}
            drawerRoot={{
                size: "xl",
            }}
        >
            <Flex
                p={6}
                display="flex"
                flexDirection="column"
                bgGradient={"to-b"}
                gradientFrom={"#c3eafecf 0%"}
                gradientVia={"#d6fcfdcf 13%"}
                gradientTo={"#ffffffcf 50%"}
                borderRadius={{ base: "3xl", sm: "2xl" }}
            >
                <Flex
                    bg="white"
                    w={"11"}
                    h={"11"}
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="xl"
                    mx={"auto"}
                    mt={6}
                    shadow={"sm"}
                    border={"1.5px solid"}
                    borderColor={"gray.100"}
                >
                    <ImageWrapper
                        src="/logo/logo-icon-gradient.svg"
                        alt="Sociotask Logo"
                        w="7"
                        nextImageProps={{
                            width: 50,
                            height: 50,
                        }}
                    />
                </Flex>
                <Tabs.Root
                    lazyMount
                    unmountOnExit
                    value={tabActive}
                    // onValueChange={(e) => setTabActive(e.value)}
                    defaultValue={tab}
                >
                    <Tabs.Content value="login">
                        <LoginContent
                            onSignUpClick={() => setTabActive("register")}
                            onLoginSuccess={() =>
                                onOpenChange?.({ open: false })
                            }
                        />
                    </Tabs.Content>
                    <Tabs.Content value="register">
                        <RegisterContent
                            onSignInClick={() => setTabActive("login")}
                        />
                    </Tabs.Content>
                </Tabs.Root>
            </Flex>
        </DialogWrapper>
    );
}
