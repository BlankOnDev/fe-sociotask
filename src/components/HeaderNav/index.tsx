"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Button, ButtonProps, Flex, IconButton, Image } from "@chakra-ui/react";
import NextImage from "next/image";
import ChooseLang from "./ChooseLang";
import { useTranslations } from "next-intl";
import { LuMenu, LuX } from "react-icons/lu";
import { MotionBox, MotionFlex } from "../ui/ChakraMotion";
import AuthDialog from "@/features/auth/components/AuthDialog";
import { useAtomValue } from "jotai";
import { tokenStorageAtom } from "@/atom/auth";

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

    const accessToken = useAtomValue(tokenStorageAtom);

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
            <Flex
                display={{ base: "none", sm: "flex" }}
                gap={2}
                alignItems={"center"}
            >
                <ChooseLang />
                {accessToken ? (
                    <Button colorPalette={"pink"}>Browse</Button>
                ) : (
                    <>
                        <Button
                            {...btnLogInStaticProps}
                            onClick={handleLoginClick}
                        >
                            {intl("sign-in")}
                        </Button>
                        <Button
                            {...btnSignUpStaticProps}
                            onClick={handleSignUpClick}
                        >
                            {intl("sign-up")}
                        </Button>
                    </>
                )}
            </Flex>
            <IconButton
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
                            <ChooseLang mb={1} />

                            {accessToken ? (
                                <Button w={"full"} colorPalette={"pink"}>
                                    Browse
                                </Button>
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
