"use client";

import { Box, Collapsible, For, Heading, Stack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { MotionFlex } from "../ui/ChakraMotion";
import ElipseGradient from "@/assets/landing/elipse-gradient.svg"
import ImageWrapper from "../ui/image";

type FaqKey = "1" | "2" | "3" | "4";
type FaqItem = {
    key: FaqKey;
    question: string;
    answer: string;
};
const faqData: FaqItem[] = [
    {
        key: "1",
        question: "Do I need to have a crypto wallet to participate?",
        answer: "Yes, you will need a crypto wallet to receive and manage your rewards. We recommend using wallets like MetaMask or Trust Wallet. <a href='https://metamask.io/' target='_blank'>Learn more</a>",
    },
    {
        key: "2",
        question: "Is it completely free?",
        answer: "Yes, joining and participating in tasks on our platform is completely free. There are no hidden fees or charges.",
    },
    {
        key: "3",
        question: "How to cash out received crypto coins?",
        answer: "You can cash out your crypto coins by transferring them to a cryptocurrency exchange that supports fiat withdrawals. From there, you can convert your crypto to your local currency and withdraw it to your bank account.",
    },
    {
        key: "4",
        question: "What types of tasks are available on the platform?",
        answer: "We offer a variety of tasks including social media engagement, content creation, surveys, and more. New tasks are added regularly to provide diverse opportunities for our users.",
    },
];

export default function FaqSection() {
    const [activeFaq, setActiveFaq] = useState<FaqKey | null>(null);
    const intl = useTranslations("homepage.faq");

    const handleToggle = (key: FaqKey) => {
        setActiveFaq(activeFaq === key ? null : key);
    };

    return (
        <MotionFlex
            mt="16"
            mb={"8"}
            as="section"
            w={"calc(100% - 4rem)"}
            maxW={{ base: "100%", lg: "6xl" }}
            rounded="3xl"
            p={{ base: "6", md: "8", lg: "12" }}
            mx="auto"
            flexDir={{ base: "column", md: "row" }}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
            bgGradient={"to-t"}
            gradientFrom={"#FFFFFF"}
            gradientTo={"#F3FCFF 80%"}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.4 }}
            position={"relative"}
            overflow={"hidden"}
        >
            <ImageWrapper
                src={ElipseGradient.src}
                alt="Elipse Gradient"
                position={"absolute"}
                top={"-25%"}
                left={"-43%"}
                width="1000px"
                height={"500px"}
            />
            <ImageWrapper
                src={ElipseGradient.src}
                alt="Elipse Gradient"
                position={"absolute"}
                top={"-60%"}
                right={"-40%"}
                width="1000px"
                height={"600px"}
            />

            <Box flex={"1"} textAlign={{ base: "center", md: "left" }} zIndex={1} mb={{ base: "8", md: "0" }} maxW={{ base: "100%", lg: "400px" }}>
                <Heading as="h6" fontSize={"lg"} fontWeight={"semibold"} color="pink.500">
                    {intl("text")}
                </Heading>
                <Heading as="h4" fontSize="3xl" mt={"1"} mb={"8"} maxW={{ base: "100%", lg: "300px" }} lineHeight={"40px"}>
                    {intl("title")}
                </Heading>
            </Box>
            <Stack
                as="div"
                zIndex={1}
                flex={"1.5"}
            >
                <For each={faqData}>
                    {(faq) => (
                        <Collapsible.Root
                            open={activeFaq === faq.key}
                            onOpenChange={() => handleToggle(faq.key)}
                            key={faq.key}
                            bg={"white"}
                            rounded={"2xl"}
                            border={"1px solid"}
                            borderColor={"gray.100"}
                            boxShadow={"1px 1px 4px rgba(0, 0, 0, 0.05)"}
                            w={"full"}
                            // maxW={"xl"}
                            overflow={"hidden"}
                            pb={activeFaq === faq.key ? "2" : "0"}
                        >
                            <Collapsible.Trigger
                                display={"flex"}
                                gap={"3"}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                                textAlign={"left"}
                                px={"6"}
                                py={"4"}
                                w={"full"}
                                cursor={"pointer"}
                            >
                                <Text fontWeight={"semibold"}>
                                    {faq.question}
                                </Text>
                                <Box w={"16px"}>
                                    {
                                        activeFaq === faq.key ? (
                                            <LuMinus strokeWidth={2.6} />
                                        ) : (
                                            <LuPlus strokeWidth={2.6} />
                                        )
                                    }
                                </Box>
                            </Collapsible.Trigger>
                            <Collapsible.Content
                                px={"6"}
                            >
                                <Text dangerouslySetInnerHTML={{ __html: faq.answer }} pb={"2"} />
                            </Collapsible.Content>
                        </Collapsible.Root>
                    )}
                </For>
            </Stack>
        </MotionFlex>
    );
}
