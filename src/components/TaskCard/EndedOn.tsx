"use client"

import { useRemainingDays } from "@/lib/date-formats";
import { Flex, Text } from "@chakra-ui/react";
import { LuClock } from "react-icons/lu";

export default function EndedOn({ date }: { date: Date | string }) {
    const remainingDays = useRemainingDays(date);
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
            <LuClock strokeWidth={2.5} />
            <Text>{remainingDays}</Text>
        </Flex>
    );
}