import { Avatar, AvatarGroup, Box, Button, Flex, Span, Text } from "@chakra-ui/react";
import HeroBg from "@/assets/landing/hero-bg.png";
import HighlightScribbles from "@/assets/landing/highlight-scribbles.svg";
import { getTranslations } from "next-intl/server";
import { FcFlashOn } from "react-icons/fc";
import { LuArrowRight } from "react-icons/lu";
import Avax from "@/assets/coin-icon/ic-avax.png"
import Eth from "@/assets/coin-icon/ic-eth.png"
import Usdt from "@/assets/coin-icon/ic-usdt.png"
import Usdc from "@/assets/coin-icon/ic-usdc.png"
import ImageWrapper from "../ui/image";
import AccentImages from "./HeroAccentImages";
import { MotionFlex, MotionHeading, MotionText } from "../ui/ChakraMotion";
import { MotionProps } from "motion/react";

function enterAnimation(delay = 0): MotionProps {
    return {
        initial: { opacity: 0, y: 15 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay },
    };
}

export default async function Hero() {
    const intl = await getTranslations("homepage.hero");

    return (
        <Box
            as={"section"}
            flexFlow={"column"}
            position={"relative"}
            // bg={"pink.500/10"}
        >
            <ImageWrapper
                src={HeroBg.src}
                alt="hero background"
                zIndex={-1}
                nextImageProps={{
                    fill: true,
                    priority: true,
                }}
            />

            <Flex
                flexDir={"column"}
                alignItems={"center"}
                justifyContent={{
                    base: "center",
                    // sm: "center",
                }}
                maxW={"1280px"}
                minH={{base:"100vh", md:"fit", lg:"100dvh", "2xl":"fit"}}
                w={"100%"}
                // h={{
                //     base: "100dvh",
                //     // lg: "100dvh",
                //     "2xl": "fit"
                // }}
                pt={{
                    base: "124px",
                    // md: "80px",
                }}
                pb={"56px"}
                px={"32px"}
                mx={"auto"}
                position={"relative"}
                // bg={"pink.200/50"}
            >
                <AccentImages />

                {/* START ANNOUNCEMENT (INFO) */}
                <MotionFlex
                    gap={"12px"}
                    alignItems={"center"}
                    bg={"whiteAlpha.400"}
                    border={"1px solid"}
                    borderColor={"white"}
                    borderRadius={"full"}
                    py={"4px"}
                    pl={"8px"}
                    pr={"8px"}
                    fontSize={{
                        base: "xs",
                        sm: "sm",
                    }}
                    position={"relative"}
                    {...enterAnimation(0)}
                >
                    <Flex
                        gap={"2px"}
                        alignItems={"center"}
                        bg={"pink.500"}
                        py={"2px"}
                        pl={"10px"}
                        pr={"6px"}
                        rounded={"full"}
                        color={"white"}
                        position={{
                            base: "absolute",
                            sm: "static",
                        }}
                        left={"4px"}
                        top={"-16px"}
                    >
                        <Text>{intl("announce.info")}</Text>
                        <FcFlashOn size={"16px"} />
                    </Flex>
                    <Text>{intl("announce.text")}</Text>
                </MotionFlex>
                {/* END ANNOUNCEMENT (INFO) */}

                {/* START HERO TITLE */}
                <MotionHeading
                    mt={"4"}
                    as={"h1"}
                    maxW={"650px"}
                    textAlign={"center"}
                    size={"6xl"}
                    fontWeight={"bold"}
                    lineHeight={"1.3"}
                    letterSpacing={"0.1px"}
                    {...enterAnimation(0.2)}
                >
                    {intl("title.earn")}{" "}
                    <Span
                        position={"relative"}
                        fontFamily={"display"}
                        fontStyle={"italic"}
                        fontWeight={"semibold"}
                    >
                        {intl("title.rewards")}{" "}
                        <ImageWrapper
                            alt="highlight scribbles"
                            src={HighlightScribbles}
                            position={"absolute"}
                            top={"66px"}
                            left={"0"}
                        />
                    </Span>
                    <br />
                    {intl("title.for-social-media-task")}
                </MotionHeading>
                {/* END HERO TITLE */}

                {/* START HERO DESCRIPTION */}
                <MotionText
                    maxW={"700px"}
                    textAlign={"center"}
                    fontSize={"lg"}
                    fontWeight={"medium"}
                    mt={"6"}
                    color={"gray.600"}
                    lineHeight={"1.6"}
                    {...enterAnimation(0.4)}
                >
                    {intl("desc")}
                </MotionText>
                {/* END HERO DESCRIPTION */}

                {/* START HERO CTA */}
                <MotionFlex mt={"8"} gap={"4"} {...enterAnimation(0.6)}>
                    <Button size={"xl"}>
                        {intl("cta.browse-tasks")}
                    </Button>
                    <Button size={"xl"} variant={"outline"}>
                        {intl("cta.join-us")} <LuArrowRight />
                    </Button>
                </MotionFlex>
                {/* END HERO CTA */}

                {/* START AVATAR COIN GROUP */}
                <MotionFlex gap={"2"} alignItems={"center"} mt={"12"} {...enterAnimation(0.8)}>
                    <AvatarGroup gap="0" spaceX="-3" size="lg">
                        <Avatar.Root size={"sm"}>
                            <Avatar.Fallback name="Avalanche" />
                            <Avatar.Image src={Avax.src} />
                        </Avatar.Root>
                        <Avatar.Root size={"sm"}>
                            <Avatar.Fallback name="Ethereum" />
                            <Avatar.Image src={Eth.src} />
                        </Avatar.Root>
                        <Avatar.Root size={"sm"}>
                            <Avatar.Fallback name="Tether" />
                            <Avatar.Image src={Usdt.src} />
                        </Avatar.Root>
                        <Avatar.Root size={"sm"}>
                            <Avatar.Fallback name="USD Coin" />
                            <Avatar.Image src={Usdc.src} />
                        </Avatar.Root>
                        <Avatar.Root size={"sm"} variant="subtle">
                            <Avatar.Fallback>+3</Avatar.Fallback>
                        </Avatar.Root>
                    </AvatarGroup>
                    <Text fontSize={"sm"} color={"gray.600"}>
                        {intl("coins-can-be-rewarded")}
                    </Text>
                </MotionFlex>
                {/* END AVATAR COIN GROUP */}
            </Flex>
        </Box>
    );
}
