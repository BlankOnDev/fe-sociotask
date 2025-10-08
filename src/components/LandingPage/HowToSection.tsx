"use client";

import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import {
    MotionFlex,
    type MotionFlexProps,
    MotionHeading,
} from "../ui/ChakraMotion";

import StartTaskImg from "@/assets/landing/how-to/start-task.png";
import CompleteTaskImg from "@/assets/landing/how-to/complete-task.png";
import ClaimRewardImg from "@/assets/landing/how-to/claim-rewards.png";
import BackLineSvg from "@/assets/landing/how-to/back-line.svg";
import ImageWrapper from "../ui/image";
import { useTranslations } from "next-intl";

const staticCardProps: MotionFlexProps = {
    overflow: "hidden",
    position: "relative",
    w: "316px",
    h: "284px",
    p: "6",
    rounded: "3xl",
    border: "6px solid",
    borderColor: "white",
    boxShadow: "4px 4px 10px 2px rgba(0, 0, 0, 0.1)",
    alignItems: "end",
    bgGradient: "to-b",
    gradientFrom: "#CEE8FC/75",
    gradientVia: "#E9FEFE/75",
    gradientTo: "#F3FCFF/75",
    backdropFilter: "blur(3px)",
};

export default function HowToSection() {
    const intl = useTranslations("homepage.how-to");

    const firstStepCardRotate = useBreakpointValue({ base: -4, md: -4, lg: -6 });
    const secondStepCardRotate = useBreakpointValue({ base: 4, md: 4, lg: 0 });
    const thirdStepCardRotate = useBreakpointValue({ base: -4, md: 0, lg: 6 });

    const firstCardXOffset = useBreakpointValue({ base: -300, md: -300, lg: 300 });
    const secondCardXOffset = useBreakpointValue({ base: 300, md: 300, lg: 0 });
    const thirdCardXOffset = useBreakpointValue({ base: -300, md: -300, lg: -300 });

    const stepCardMargin = useBreakpointValue({ base: "0", lg: "20px" });

    return (
        <Flex
            position={"relative"}
            flexDir={"column"}
            alignItems={"center"}
            as="section"
            mt={"6"}
            p={"6"}
            bgImage={{ base: "none", lg: `url(${BackLineSvg.src})` }}
            bgRepeat={"no-repeat"}
            backgroundPositionX={"center"}
            backgroundPositionY={"350px"}
            bgSize={"1780px"}
            overflow={{ base: "hidden", sm: "visible" }}
            h={"fit"}
        // bg={"pink.100"}
        >
            <Box
                zIndex={-2}
                position="absolute"
                bottom={{ base: "-50px", sm: -172 }}
                w={{ base: "450px", sm: "full" }}
                h={{ base: "calc(100% + 100px)", sm: "425px" }}
                bgGradient={{ base: "to-r", sm: "to-b" }}
                gradientFrom="#ffffff/0"
                gradientVia="#D9FAFF/85"
                gradientTo="#ffffff/0"
                rotate={{ base: "-32", sm: "0" }}
            />

            <MotionHeading
                as={"h5"}
                size={"lg"}
                color={"pink.500"}
                textAlign={"center"}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
            >
                {"~ "}
                {intl("text")}
                {" ~"}
            </MotionHeading>
            <MotionHeading
                as={"h3"}
                size={"4xl"}
                textAlign={"center"}
                maxW={"864px"}
                fontWeight={"semibold"}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
            >
                {intl("title")}
            </MotionHeading>
            <Flex
                flexWrap={{ base: "wrap", lg: "nowrap" }}
                gap={{ base: "10", md: "8", lg: "12" }}
                justifyContent={"center"}
                alignItems={"start"}
                mt={"12"}
            >
                {/* start STEP 1 */}
                <MotionFlex
                    {...staticCardProps}
                    initial={{ x: firstCardXOffset, rotate: 0, marginTop: 0, opacity: 0 }}
                    whileInView={{
                        x: 0,
                        rotate: firstStepCardRotate,
                        marginTop: stepCardMargin,
                        opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "backOut" }}
                >
                    <ImageWrapper
                        rotate={"6"}
                        position={"absolute"}
                        top={"20px"}
                        left={"-9px"}
                        src={StartTaskImg.src}
                        alt="start task illustration"
                        width={"290px"}
                        nextImageProps={{
                            width: 300,
                            height: 0,
                        }}
                    />
                    <Box>
                        <Text fontWeight={"semibold"}>STEP 1</Text>
                        <Text mt={"1"} color={"gray.700"}>
                            {intl("step-1")}
                        </Text>
                    </Box>
                </MotionFlex>
                {/* end STEP 1 */}

                {/* start STEP 2 */}
                <MotionFlex
                    {...staticCardProps}
                    initial={{ opacity: 0, rotate: 0, x: secondCardXOffset }}
                    whileInView={{ opacity: 1, x: 0, rotate: secondStepCardRotate }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "backOut" }}
                    viewport={{ once: true }}
                >
                    <ImageWrapper
                        position={"absolute"}
                        top={"20px"}
                        left={"10px"}
                        src={CompleteTaskImg.src}
                        alt="complete task illustration"
                        width={"284px"}
                        nextImageProps={{
                            width: 300,
                            height: 0,
                        }}
                    />
                    <Box>
                        <Text fontWeight={"semibold"}>STEP 2</Text>
                        <Text mt={"1"} color={"gray.700"}>
                            {intl("step-2")}
                        </Text>
                    </Box>
                </MotionFlex>
                {/* end STEP 2 */}

                {/* start STEP 3 */}
                <MotionFlex
                    {...staticCardProps}
                    initial={{ x: thirdCardXOffset, rotate: 0, marginTop: 0, opacity: 0 }}
                    whileInView={{
                        x: 0,
                        rotate: thirdStepCardRotate,
                        marginTop: stepCardMargin,
                        opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "backOut" }}
                >
                    <ImageWrapper
                        rotate={"-5"}
                        position={"absolute"}
                        top={"10px"}
                        left={"42px"}
                        src={ClaimRewardImg.src}
                        alt="claim reward illustration"
                        width={"224px"}
                        nextImageProps={{
                            width: 300,
                            height: 0,
                        }}
                    />
                    <Box>
                        <Text fontWeight={"semibold"}>STEP 3</Text>
                        <Text mt={"1"} color={"gray.700"}>
                            {intl("step-3")}
                        </Text>
                    </Box>
                </MotionFlex>
                {/* end STEP 3 */}
            </Flex>
        </Flex>
    );
}
