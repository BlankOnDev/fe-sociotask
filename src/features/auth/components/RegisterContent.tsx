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
    Tabs,
} from "@chakra-ui/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaXTwitter } from "react-icons/fa6";

type AccountValue = {
    email: string;
    password: string;
    confirmPassword: string;
};

type ProfileValue = {
    fullName: string;
    username: string;
};

type RegisterContentProps = {
    onSignInClick?: () => void;
};

export default function RegisterContent(props: RegisterContentProps) {
    const [tabActive, setTabActive] = useState<"account" | "profile">(
        "account"
    );

    return (
        <>
            <Heading textAlign="center" fontSize={"xl"} fontWeight={"semibold"}>
                {tabActive === "account"
                    ? "Hey, lets get started..."
                    : "Almost there!"}
            </Heading>
            <Text mt={1} textAlign="center" color={"gray.600"}>
                {tabActive === "account"
                    ? "Create your account to continue."
                    : "Complete your profile to finish."}
            </Text>

            <Tabs.Root
                value={tabActive}
                // onValueChange={(e) => setTabActive(e.value)}
                defaultValue={"account"}
            >
                <Tabs.Content value="account">
                    <AccountTab onSignInClick={props.onSignInClick} onSignUpClick={() => setTabActive("profile")} />
                </Tabs.Content>
                <Tabs.Content value="profile">
                    <ProfileTab onBackClick={() => setTabActive("account")} />
                </Tabs.Content>
            </Tabs.Root>
        </>
    );
}

function AccountTab(props: { onSignInClick?: () => void, onSignUpClick?: () => void }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<AccountValue>();
    const onSubmit: SubmitHandler<AccountValue> = (data) => {
        if (data.password !== data.confirmPassword) {
            setError("confirmPassword", {
                type: "manual",
                message: "Passwords do not match.",
            });
            return;
        }
        props.onSignUpClick?.();
        console.log("Form submitted with data:", data);
    };
    return (
        <>
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
                            {...register("password", {
                                required: true,
                                minLength: 8,
                            })}
                        />
                        <Field.ErrorText>
                            {errors.password?.type === "minLength" &&
                                "Password must be at least 8 characters long."}
                            {errors.password?.type === "required" &&
                                "Please enter your password."}
                        </Field.ErrorText>
                    </Field.Root>
                    <Field.Root mt={3.5} invalid={!!errors.confirmPassword}>
                        <Field.Label>Confirm Password</Field.Label>
                        <PasswordInput
                            type="password"
                            rounded={"xl"}
                            placeholder="••••••••••"
                            {...register("confirmPassword", {
                                required: true,
                            })}
                        />
                        <Field.ErrorText>
                            {errors.confirmPassword?.type === "required" &&
                                "Please confirm your password."}
                            {errors.confirmPassword?.type === "manual" &&
                                errors.confirmPassword.message}
                        </Field.ErrorText>
                    </Field.Root>
                    <Button type="submit" colorPalette={"pink"} mt={6} w="full">
                        Sign Up
                    </Button>
                </Box>
            </form>

            <Text
                textAlign={"center"}
                fontSize={"xs"}
                color={"gray.600"}
                my={4}
            >
                Or sign up with
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
                Already have an account?
                <Span
                    color={"pink.500"}
                    fontWeight={"semibold"}
                    ml={1}
                    p={0}
                    h={"fit"}
                    fontSize={"xs"}
                    cursor={"pointer"}
                    _hover={{ textDecoration: "underline" }}
                    onClick={props.onSignInClick}
                >
                    Sign In
                </Span>
            </Text>
        </>
    );
}

function ProfileTab(props: {onBackClick?: () => void}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ProfileValue>();
    const onSubmit: SubmitHandler<ProfileValue> = (data) => {
        console.log("Form submitted with data:", data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box mt={6} w="xs" mx="auto">
                <Field.Root invalid={!!errors.fullName}>
                    <Field.Label>Full Name</Field.Label>{" "}
                    <Field.RequiredIndicator />
                    <Input
                        type="text"
                        rounded={"xl"}
                        placeholder="Gustavo Fring"
                        {...register("fullName", { required: true })}
                    />
                    <Field.ErrorText>
                        Please enter your email address
                    </Field.ErrorText>
                </Field.Root>
                <Field.Root mt={3.5} invalid={!!errors.username}>
                    <Field.Label>username</Field.Label>
                    <Input
                        type="text"
                        rounded={"xl"}
                        placeholder="heisenberg"
                        {...register("username", {
                            required: "Please enter your username",
                            pattern: {
                                value: /^[a-zA-Z0-9_]+$/,
                                message: "Username can only contain letters, numbers, and underscores"
                            },
                            minLength: {
                                value: 3,
                                message: "Username must be at least 3 characters long"
                            },
                            maxLength: {
                                value: 20,
                                message: "Username must not exceed 20 characters"
                            }
                        })}
                    />
                    <Field.ErrorText>
                        {errors.username?.message}
                    </Field.ErrorText>
                </Field.Root>
                <Button type="submit" colorPalette={"pink"} mt={6} w="full">
                    Create Account
                </Button>
                <Button
                    type="button"
                    colorPalette={"gray"}
                    mt={2}
                    w="full"
                    variant={"outline"}
                    onClick={() => props.onBackClick?.()}
                >
                    Back
                </Button>
            </Box>
        </form>
    );
}
