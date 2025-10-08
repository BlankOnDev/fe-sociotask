"use client"

import { motion } from "motion/react";
import { Box, Button, Flex, Heading, Text, Grid } from "@chakra-ui/react";
import ImageWrapper from "@/components/ui/image";

const MGrid = motion.create(Grid)
const MFlex = motion.create(Flex);
const MBox = motion.create(Box);
const MButton = motion.create(Button);
const MImage = motion.create(ImageWrapper);
const MHeading = motion.create(Heading);
const MText = motion.create(Text);

export type MotionFlexProps = {
    children?: React.ReactNode;
} & React.ComponentProps<typeof MFlex>

export type MotionBoxProps = {
    children?: React.ReactNode;
} & React.ComponentProps<typeof MBox>

export type MotionButtonProps = {
    children?: React.ReactNode;
} & React.ComponentProps<typeof MButton>

export type MotionImageProps =  React.ComponentProps<typeof MImage>

export type MotionHeadingProps = {
    children?: React.ReactNode;
} & React.ComponentProps<typeof MHeading>

export type MotionTextProps = {
    children?: React.ReactNode;
} & React.ComponentProps<typeof MText>

export type MotionGridProps = {
    children?: React.ReactNode;
} & React.ComponentProps<typeof MGrid>

export function MotionGrid(props: MotionGridProps) {
    return (
        <MGrid
            {...props}
        >
            {props.children}
        </MGrid>
    )
}

export function MotionBox(props: MotionBoxProps) {
    return (
        <MBox
            {...props}
        >
            {props.children}
        </MBox>
    )
}

export function MotionFlex(props: MotionFlexProps) {
    return (
        <MFlex
            {...props}
        >
            {props.children}
        </MFlex>
    )
}

export function MotionButton(props: MotionButtonProps) {
    return (
        <MButton
            {...props}
        >
            {props.children}
        </MButton>
    )
}

export function MotionImage(props: MotionImageProps) {
    return (
        <MImage
            {...props}
        />
    )
}

export function MotionHeading(props: MotionHeadingProps) {
    return (
        <MHeading
            {...props}
        >
            {props.children}
        </MHeading>
    )
}

export function MotionText(props: MotionTextProps) {
    return (
        <MText
            {...props}
        >
            {props.children}
        </MText>
    )
}
