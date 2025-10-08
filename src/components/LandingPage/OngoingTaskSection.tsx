import { Box, Flex } from "@chakra-ui/react";
import { MotionButton, MotionGrid, MotionHeading } from "../ui/ChakraMotion";
import TaskCard from "../TaskCard";
import { getTranslations } from "next-intl/server";

export default async function OngoingTaskSection() {
    const intl = await getTranslations("homepage.ongoing-tasks");

    return (
        <Flex
            as={"section"}
            flexDir={"column"}
            alignItems={"center"}
            mt={"10"}
            p={"6"}
            overflow={"hidden"}
        >
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
                ~ {intl("text")} ~
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
                transition={{ duration: 0.4, delay: 0.4 }}
            >
                {intl("title")}
            </MotionHeading>

            <MotionGrid
                position={"relative"}
                templateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                }}
                mt={"10"}
                gap={"2"}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
            >
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <Box
                    position={"absolute"}
                    bottom={0}
                    w={"full"}
                    h={"340px"}
                    bgGradient={"to-b"}
                    gradientFrom={"transparent 22%"}
                    gradientTo={"#fff 85%"}
                />
            </MotionGrid>

            <MotionButton
                variant={"outline"}
                size={"xl"}
                mt={"-8"}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
            >
                {intl("more-tasks")} ...
            </MotionButton>
        </Flex>
    );
}
