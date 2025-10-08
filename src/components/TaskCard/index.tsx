import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import { LuBadgeCheck, LuUserRound, LuZap } from "react-icons/lu";
import EndedOn from "./EndedOn";
import SocialsAvatars from "./SocialsAvatar";
import UsdtImg from "@/assets/coin-icon/ic-usdt.svg";

export default function TaskCard() {
    return (
        <Flex
            bg={"transparent"}
            flexDir={"column"}
            p={"2"}
            pb={"3"}
            rounded={"3xl"}
            cursor={"default"}
            _hover={{ bg: "gray.100", scale: 1.02 }}
            transition="all 0.2s ease-in-out"
        >
            <Flex
                flexDir={"column"}
                w={"325px"}
                h={"256px"}
                p={"16px"}
                rounded={"18px"}
                bgGradient={"to-b"}
                border={"1px solid #CFF5FF"}
                gradientFrom={"#c3f2ffcc 22%"}
                gradientVia={"#E8FDFDcc 71%"}
                gradientTo={"#DFF6FDcc 100%"}
            >
                <Flex justifyContent={"space-between"}>
                    <Flex gap={"1.5"}>
                        <CompletedUser completed={24} max={100} />
                        <EndedOn date={"2025-10-01T02:00:00.000Z"} />
                    </Flex>
                    <SocialsAvatars
                        socials={[
                            "instagram",
                            "facebook",
                            "x",
                            "youtube",
                            "threads",
                            "tiktok",
                        ]}
                    />
                </Flex>

                <Flex mt={"4"} alignItems={"center"} gap={"1"}>
                    <Text>Sociotask</Text>
                    <LuBadgeCheck size={14} color="#2563EB" />
                </Flex>

                <Text mt={"1"} as={"h6"} fontSize={"xl"} fontWeight={"medium"}>
                    The Socio Product Launch Campaign
                </Text>

                <Flex
                    gap={"2"}
                    flexWrap={"wrap"}
                    fontSize={"xs"}
                    mt={"auto"}
                    maxLines={2}
                >
                    <Flex
                        py={"1"}
                        px={"3.5"}
                        border={"1px solid"}
                        borderColor={"black/25"}
                        rounded={"full"}
                    >
                        <Text>Follow</Text>
                    </Flex>
                    <Flex
                        py={"1"}
                        px={"3.5"}
                        border={"1px solid"}
                        borderColor={"black/25"}
                        rounded={"full"}
                    >
                        <Text>Like</Text>
                    </Flex>
                    <Flex
                        py={"1"}
                        px={"3.5"}
                        border={"1px solid"}
                        borderColor={"black/25"}
                        rounded={"full"}
                    >
                        <Text>Comment</Text>
                    </Flex>
                    <Flex
                        py={"1"}
                        px={"3.5"}
                        border={"1px solid"}
                        borderColor={"black/25"}
                        rounded={"full"}
                    >
                        <Text>Repost</Text>
                    </Flex>
                    <Flex
                        py={"1"}
                        px={"3.5"}
                        border={"1px solid"}
                        borderColor={"black/25"}
                        rounded={"full"}
                    >
                        <Text>Repost</Text>
                    </Flex>
                    <Flex
                        py={"1"}
                        px={"3.5"}
                        border={"1px solid"}
                        borderColor={"black/25"}
                        rounded={"full"}
                    >
                        <Text>Subscribe</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex mt={"4"} justifyContent={"space-between"}>
                <Flex ml={"1"} gap={"2"} alignItems={"center"}>
                    <Avatar.Root>
                        <Avatar.Fallback name="USDT" />
                        <Avatar.Image src={UsdtImg.src} />
                    </Avatar.Root>
                    <Flex flexDir={"column"}>
                        <Text fontWeight={"medium"}>1.13 USDT</Text>
                        <Text fontSize={"xs"} color={"gray.500"}>
                            Rewards
                        </Text>
                    </Flex>
                </Flex>
                <Button w={"fit"} colorPalette={"pink"}>
                    Start Task <LuZap />
                </Button>
            </Flex>
        </Flex>
    );
}

function CompletedUser({ completed, max }: { completed: number; max: number }) {
    return (
        <Flex
            w={"fit-content"}
            h={"fit-content"}
            alignItems={"center"}
            gap={"4px"}
            py={"4px"}
            px={"8px"}
            rounded={"full"}
            fontSize={"11px"}
            bg={"white/75"}
            fontWeight={"medium"}
        >
            <LuUserRound strokeWidth={2.5} />
            <Text>
                {completed}/{max}
            </Text>
        </Flex>
    );
}
