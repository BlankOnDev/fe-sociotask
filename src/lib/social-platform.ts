import IgCircleImg from "@/assets/social-circle/ig-circle.png";
import ThreadCircleImg from "@/assets/social-circle/thread-circle.png";
import TtCircleImg from "@/assets/social-circle/tt-circle.png";
import XCircleImg from "@/assets/social-circle/x-circle.png";
import FbCircleImg from "@/assets/social-circle/fb-circle.png";
import YtCircleImg from "@/assets/social-circle/yt-circle.png";
import { type SocialPlatform } from "@/types";

export function socialPlatform(platform: SocialPlatform | "get-all") {
    switch (platform) {
        case "instagram":
            return {
                srcImg: IgCircleImg.src,
                alt: "Instagram",
                name: "Instagram",
            };
        case "threads":
            return {
                srcImg: ThreadCircleImg.src,
                alt: "Threads",
                name: "Threads",
            };
        case "tiktok":
            return { srcImg: TtCircleImg.src, alt: "TikTok", name: "TikTok" };
        case "x":
            return { srcImg: XCircleImg.src, alt: "X", name: "X" };
        case "facebook":
            return {
                srcImg: FbCircleImg.src,
                alt: "Facebook",
                name: "Facebook",
            };
        case "youtube":
            return { srcImg: YtCircleImg.src, alt: "YouTube", name: "YouTube" };
    }
}
