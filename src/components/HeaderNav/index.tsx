"use client";

import { authedUserAtom } from "@/atom/auth";
import AuthDialog from "@/features/auth/components/AuthDialog";
import {
    Avatar,
    Button,
    ButtonProps,
    Flex,
    IconButton,
    Image,
} from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";
import NextImage from "next/image";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { MotionBox, MotionFlex } from "../ui/ChakraMotion";
import ChooseLang from "./ChooseLang";
import { UserMenu } from "./UserMenu";
import { useAuthedUser } from "@/hooks/useAuthedUser";

const btnLogInStaticProps: ButtonProps = {
    colorPalette: "pink",
    rounded: "xl",
    variant: "solid",
};

const btnSignUpStaticProps: ButtonProps = {
    colorPalette: "pink",
    rounded: "xl",
    variant: "surface",
    bg: "transparent",
    color: "pink.solid",
    _hover: { bg: "pink.50" },
};

export default function HeaderNav() {
    const intl = useTranslations("common");
    const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
    const [openedTab, setOpenedTab] = useState<"login" | "register">();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const {} = useAuthedUser();

    const authedUser = useAtomValue(authedUserAtom);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLoginClick = () => {
        setOpenedTab("login");
        setIsLoginDialogOpen(true);
        setIsMenuOpen(false);
    };
    const handleSignUpClick = () => {
        setOpenedTab("register");
        setIsLoginDialogOpen(true);
        setIsMenuOpen(false);
    };

    return (
        <MotionFlex
            as={"header"}
            flexWrap={"wrap"}
            alignItems={"center"}
            justifyContent={"space-between"}
            maxWidth={"4xl"}
            minWidth={"xs"}
            width={"calc(100% - 2rem)"}
            minHeight={"16"}
            rounded={"xl"}
            bg={"white/80"}
            backdropFilter="blur(6px)"
            position={"fixed"}
            top={"5"}
            left={"50%"}
            transform={"translateX(-50%)"}
            zIndex={"docked"}
            px={"6"}
            py={"3"}
            borderColor={"gray.200"}
            shadow={"sm"}
            layout="size"
            animate={{ height: isMenuOpen ? "auto" : 0 }}
            transition={{
                default: { duration: 0.2 },
                height: { duration: 0.2, ease: "circInOut" },
            }}
        >
            <Image
                asChild
                width={"115px"}
                height={"auto"}
                objectFit={"contain"}
                alt="Logo with text"
            >
                <NextImage
                    src={"/logo/logo-with-text-black.svg"}
                    alt="Logo with text"
                    width={0}
                    height={0}
                />
            </Image>
            <ChooseLang ml={"auto"} />
            <Flex gap={2} alignItems={"center"}>
                {authedUser ? (
                    <UserMenu />
                ) : (
                    <>
                        <Button
                            {...btnLogInStaticProps}
                            display={{ base: "none", sm: "flex" }}
                            onClick={handleLoginClick}
                        >
                            {intl("sign-in")}
                        </Button>
                        <Button
                            {...btnSignUpStaticProps}
                            onClick={handleSignUpClick}
                            display={{ base: "none", sm: "flex" }}
                        >
                            {intl("sign-up")}
                        </Button>
                    </>
                )}
            </Flex>
            <IconButton
                hidden={!!authedUser}
                p={0}
                variant={"ghost"}
                display={{ base: "flex", sm: "none" }}
                aria-label="Menu"
                _hover={{ bg: "transparent" }}
                onClick={toggleMenu}
            >
                {isMenuOpen ? <LuX /> : <LuMenu />}
            </IconButton>

            <AnimatePresence>
                {isMenuOpen && (
                    <MotionBox
                        display={{ base: "flex", sm: "none" }}
                        mt={"8"}
                        width={"100%"}
                        key="header-nav-menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.15 } }}
                        transition={{ duration: 0.25, delay: 0.2 }}
                    >
                        <Flex
                            width={"100%"}
                            flexDir={"column"}
                            alignItems={"center"}
                            gap={2}
                        >
                            {authedUser ? (
                                <Avatar.Root colorPalette="pink" size="sm">
                                    <Avatar.Fallback name="Galang Arsandy" />
                                    <Avatar.Image src="https://bit.ly/broken-link" />
                                </Avatar.Root>
                            ) : (
                                <>
                                    <Button
                                        {...btnLogInStaticProps}
                                        w={"full"}
                                        onClick={handleLoginClick}
                                    >
                                        {intl("sign-in")}
                                    </Button>
                                    <Button
                                        w={"full"}
                                        {...btnSignUpStaticProps}
                                        onClick={handleSignUpClick}
                                    >
                                        {intl("sign-up")}
                                    </Button>
                                </>
                            )}
                        </Flex>
                    </MotionBox>
                )}
            </AnimatePresence>
            <AuthDialog
                tab={openedTab || "login"}
                open={isLoginDialogOpen}
                onOpenChange={(details) => setIsLoginDialogOpen(details.open)}
            />
        </MotionFlex>
    );
}
