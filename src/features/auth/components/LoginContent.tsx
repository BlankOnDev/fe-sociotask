import { GoogleLogoColored } from "@/assets/icons/GoogleLogoColored";
import { PasswordInput } from "@/components/ui/password-input";
import {
    Box,
    Button,
    Field,
    Flex,
    Heading,
    Input,
    Text,
    Span,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaXTwitter } from "react-icons/fa6";

type InputValue = {
    email: string;
    password: string;
};

type LoginContentProps = {
    onSignUpClick?: () => void;
}

export default function LoginContent(props: LoginContentProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputValue>();

    const onSubmit: SubmitHandler<InputValue> = (data) => {
        console.log("Form submitted with data:", data);
    };

    return (
        <>
            <Heading
                textAlign="center"
                fontSize={"xl"}
                fontWeight={"semibold"}
            >
                Welcome Back...
            </Heading>
            <Text mt={1} textAlign="center" color={"gray.600"}>
                Please enter your details to sign in.
            </Text>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box mt={6} w="xs" mx="auto">
                    <Field.Root invalid={!!errors.email}>
                        <Field.Label>Email</Field.Label>
                        <Input
                            type="email"
                            rounded={"xl"}
                            placeholder="yourname@example.com"
                            {...register("email", { required: true })}
                        />
                        <Field.ErrorText>
                            Please enter your email address
                        </Field.ErrorText>
                    </Field.Root>
                    <Field.Root mt={3.5} invalid={!!errors.password}>
                        <Field.Label>Password</Field.Label>
                        <PasswordInput
                            type="password"
                            rounded={"xl"}
                            placeholder="••••••••••"
                            {...register("password", { required: true })}
                        />
                        <Field.ErrorText>
                            Please enter your password
                        </Field.ErrorText>
                    </Field.Root>
                    <Button type="submit" colorPalette={"pink"} mt={6} w="full">
                        Sign In
                    </Button>
                </Box>
            </form>

            <Text
                textAlign={"center"}
                fontSize={"xs"}
                color={"gray.600"}
                my={6}
            >
                Or sign in with
            </Text>
            <Flex gap={2} mx={"auto"} w="xs">
                <Button variant="outline" flex={1} colorPalette={"gray"}>
                    <GoogleLogoColored />
                </Button>
                <Button flex={1} variant="outline" colorPalette={"gray"}>
                    <FaXTwitter size={22} />
                </Button>
            </Flex>
            <Text
                textAlign={"center"}
                fontSize={"xs"}
                color={"gray.600"}
                mt={6}
            >
                Don’t have an account yet?
                <Span
                    color={"pink.500"}
                    fontWeight={"semibold"}
                    ml={1}
                    p={0}
                    h={"fit"}
                    fontSize={"xs"}
                    cursor={"pointer"}
                    _hover={{ textDecoration: "underline" }}
                    onClick={props.onSignUpClick}
                >
                    Sign Up
                </Span>
            </Text>
        </>
    );
}
