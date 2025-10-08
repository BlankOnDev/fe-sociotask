import { socialPlatform } from "@/lib/social-platform";
import { SocialPlatform } from "@/types";
import { Avatar, AvatarGroup } from "@chakra-ui/react";

export default function SocialsAvatars({ socials }: { socials: SocialPlatform[] | [] }) {
    return (
        <AvatarGroup gap="0" spaceX="-2.5" size="xs">
            {
                socials?.slice(0, 4).map((social, index) => (
                    <Avatar.Root key={index} w={"28px"} h={"28px"} border="1.5px solid white">
                        <Avatar.Fallback name={socialPlatform(social)?.name} />
                        <Avatar.Image src={socialPlatform(social)?.srcImg} />
                    </Avatar.Root>
                ))
            }
            {
                socials.length > 4 && (
                    <Avatar.Root w={"28px"} h={"28px"} border="1.5px solid white" variant="subtle">
                        <Avatar.Fallback fontSize={"10px"}>+{socials.length - 4}</Avatar.Fallback>
                    </Avatar.Root>
                )
            }
        </AvatarGroup>
    )
}