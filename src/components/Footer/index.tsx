"use client";

import { Box, Flex, Separator, Stack, Text } from "@chakra-ui/react";
import ImageWrapper from "../ui/image";
import Link from "next/link";
import { FaGithub, FaDiscord} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <Box
            as="footer"
            h={"fit"}
            pt={"20"}
            pb={"8"}
            position={"relative"}
            bgGradient={"to-b"}
            gradientFrom={"#C6E8FD -15%"}
            gradientVia={"#D6FCFD"}
            gradientTo={"#FFFFFF"}
        >
            <Box
                position="absolute"
                top="-16px"
                left="0"
                h={"56px"}
                w={"100%"}
                bg={"white"}
                roundedBottom={"48px"}
            />
            <Flex
                w={"calc(100% - 4rem)"}
                mx={"auto"}
                maxW="6xl"
                justifyContent={"space-between"}
                gap={8}
                flexWrap={"wrap"}
            >
                <Box>
                    <ImageWrapper
                        src="/logo/logo-with-text-black.svg"
                        alt="Logo with text"
                        width={"138px"}
                        height={"auto"}
                        nextImageProps={{
                            width: 0,
                            height: 0,
                        }}
                    />
                    <Text color={"gray.600"} mt={"4"} maxW="360px">
                        Create mutualistic symbiosis, get rewards or get
                        engagement easily.
                    </Text>
                </Box>
                <Flex
                    maxW={"400px"}
                    w={"full"}
                    gap={4}
                    justifyContent={"space-between"}
                    flexWrap={"wrap"}
                >
                    <Stack>
                        <Link href={"/#"}>
                            <Text fontWeight={"medium"}>Task</Text>
                        </Link>
                        <Link href={"/#"}>
                            <Text fontWeight={"medium"}>Blog</Text>
                        </Link>
                        <Link href={"/#"}>
                            <Text fontWeight={"medium"}>About Us</Text>
                        </Link>
                    </Stack>
                    <Stack>
                        <Link href={"/#"}>
                            <Text fontWeight={"medium"}>Developers</Text>
                        </Link>
                        <Link href={"/#"}>
                            <Text fontWeight={"medium"}>Sponsor</Text>
                        </Link>
                    </Stack>
                    <Flex gap={3}>
                        <Link href={"/#"}>
                            <FaXTwitter size={22} />
                        </Link>
                        <Link href={"/#"}>
                            <FaGithub size={22} />
                        </Link>
                        <Link href={"/#"}>
                            <FaDiscord size={22} />
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
            <Separator
                w={"calc(100% - 4rem)"}
                mx={"auto"}
                maxW="6xl"
                borderColor={"black/10"}
                my={"6"}
            />
            <Flex w={"calc(100% - 4rem)"} mx={"auto"} maxW="6xl" gap={4} justifyContent={"space-between"} flexWrap={"wrap"}>
                <Text color={"gray.500"} fontSize={"sm"}>
                    © {new Date().getFullYear()}. All rights reserved.
                </Text>
                <Flex gap={4}>
                    <Link href={"/privacy-policy"}>
                        <Text fontSize={"sm"} color={"gray.500"}>
                            Privacy Policy
                        </Text>
                    </Link>
                    <Link href={"/terms-of-service"}>
                        <Text fontSize={"sm"} color={"gray.500"}>
                            Terms of Service
                        </Text>
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
}
