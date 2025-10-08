"use client"

import { MotionImage } from "../ui/ChakraMotion"
import Ig from "@/assets/landing/accent/ig-logo.png"
import Thread from "@/assets/landing/accent/thread-logo.png"
import Yt from "@/assets/landing/accent/yt-logo.png"
import X from "@/assets/landing/accent/x-logo.png"
import Fb from "@/assets/landing/accent/fb-logo.png"
import Tt from "@/assets/landing/accent/tt-logo.png"
import { Box } from "@chakra-ui/react";
import { MotionProps } from "motion/react";

const staticMotionProps: MotionProps = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        y: [0, -15, 0],
        x: [0, 5, 0],
        scale: [1, 1.05, 1, 1.05, 1],
    }
}

export default function HeroAccentImages() {
    return (
        <Box
            display={{ base: "none", md: "block" }}
            position={"absolute"}
            top={"50%"}
            left={"50%"}
            transform={"translate(-50%, -50%)"}
            maxW={{
                base: "xl",
                md: "4xl",
                lg: "5xl",
            }}
            width={"100%"}
            height={"450px"}
            zIndex={-1}
            // bg={"pink.400/20"}
        >
            <MotionImage
                src={Ig.src}
                alt="instagram logo"
                nextImageProps={{
                    width: 42,
                }}
                position={"absolute"}
                top={"30px"}
                left={"110px"}
                {...staticMotionProps}
                transition={{
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", },
                    x: { duration: 5, repeat: Infinity, ease: "easeInOut", },
                    scale: { duration: 12, repeat: Infinity, ease: "easeInOut", },
                    opacity: { duration: 1, delay: 1.5 },
                }}
            />
            <MotionImage
                src={Thread.src}
                alt="thread logo"
                nextImageProps={{
                    width: 42,
                }}
                position={"absolute"}
                top={"190px"}
                left={"24px"}
                {...staticMotionProps}
                transition={{
                    y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                    x: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                    scale: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 },
                    opacity: { duration: 1, delay: 1.7 },
                }}
            />
            <MotionImage
                src={Yt.src}
                alt="youtube logo"
                nextImageProps={{
                    width: 45,
                }}
                position={"absolute"}
                top={"385px"}
                left={"140px"}
                {...staticMotionProps}
                transition={{
                    y: { duration: 5.3, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                    x: { duration: 5.3, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                    scale: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                    opacity: { duration: 1, delay: 1.9 },
                }}
            />
            <MotionImage
                src={X.src}
                alt="x logo"
                nextImageProps={{
                    width: 42,
                }}
                position={"absolute"}
                top={"37px"}
                right={"100px"}
                {...staticMotionProps}
                transition={{
                    y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: -1 },
                    x: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: -1 },
                    scale: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: -1 },
                    opacity: { duration: 1, delay: 1.7 },
                }}
            />
            <MotionImage
                src={Fb.src}
                alt="facebook logo"
                nextImageProps={{
                    width: 42,
                }}
                position={"absolute"}
                top={"190px"}
                right={"24px"}
                {...staticMotionProps}
                transition={{
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: -0.5 },
                    x: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: -0.5 },
                    scale: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: -0.5 },
                    opacity: { duration: 1, delay: 1.9 },
                }}
            />
            <MotionImage
                src={Tt.src}
                alt="tiktok logo"
                nextImageProps={{
                    width: 42,
                }}
                position={"absolute"}
                top={"385px"}
                right={"140px"}
                {...staticMotionProps}
                transition={{
                    y: { duration: 5.3, repeat: Infinity, ease: "easeInOut", delay: 0 },
                    x: { duration: 5.3, repeat: Infinity, ease: "easeInOut", delay: 0 },
                    scale: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0 },
                    opacity: { duration: 1, delay: 1.7 },
                }}
            />
        </Box>
    )
}