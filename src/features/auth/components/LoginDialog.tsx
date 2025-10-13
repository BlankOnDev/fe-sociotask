"use client";
import DialogWrapper from "@/components/DialogWrapper";
import {
    Box,
    Button,
    Field,
    Flex,
    Heading,
    Input,
    Link,
    Text,
} from "@chakra-ui/react";
import ImageWrapper from "@/components/ui/image";

export default function LoginDialog({
    open,
    onOpenChange,
}: {
    open?: boolean;
    onOpenChange?: (details: { open: boolean }) => void;
}) {
    return (
        <DialogWrapper
            open={open}
            onOpenChange={onOpenChange}
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
                borderRadius={"2xl"}
            >
                <Flex
                    bg="white"
                    w={"11"}
                    h={"11"}
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="xl"
                    mx={"auto"}
                    mt={"12"}
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
                <Heading
                    mt={6}
                    textAlign="center"
                    fontSize={"xl"}
                    fontWeight={"semibold"}
                >
                    Welcome Back...
                </Heading>
                <Text mt={1} textAlign="center" color={"gray.600"}>
                    Please enter your details to sign in.
                </Text>
                <Box as="form" mt={6} w="xs" mx="auto">
                    <Field.Root required>
                        <Field.Label>Email</Field.Label>
                        <Input
                            rounded={"xl"}
                            placeholder="yourname@example.com"
                        />
                        <Field.ErrorText>
                            This field is required
                        </Field.ErrorText>
                    </Field.Root>
                    <Field.Root required mt={3.5}>
                        <Field.Label>Password</Field.Label>
                        <Input
                            type="password"
                            rounded={"xl"}
                            placeholder="••••••••••"
                        />
                        <Field.ErrorText>
                            This field is required
                        </Field.ErrorText>
                    </Field.Root>
                    <Button colorPalette={"pink"} mt={6} w="full">
                        Sign In
                    </Button>
                </Box>

                <Text
                    textAlign={"center"}
                    fontSize={"xs"}
                    color={"gray.600"}
                    my={6}
                >
                    Or sign in with
                </Text>
                <Flex gap={2} w={"full"}>
                    <Button variant="outline" flex={1} colorPalette={"gray"}>
                        Google
                    </Button>
                    <Button flex={1} variant="outline" colorPalette={"gray"}>
                        GitHub
                    </Button>
                </Flex>
                <Text
                    textAlign={"center"}
                    fontSize={"xs"}
                    color={"gray.600"}
                    mt={6}
                >
                    Don’t have an account yet? 
                    <Link href="/auth/register" color={"pink.500"} fontWeight={"semibold"} ml={1}>
                        Sign Up
                    </Link>
                </Text>
            </Flex>
        </DialogWrapper>
    );
}
