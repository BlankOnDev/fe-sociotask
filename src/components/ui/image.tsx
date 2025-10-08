import { Image, type ImageProps } from "@chakra-ui/react";
import NextImg from "next/image";
import { ImageProps as NextImageProps } from "next/image";

type Props = {
    src: string
    nextImageProps?: Omit<NextImageProps, 'src' | 'alt'> & {
        src?: string;
        alt?: string;
    };
} & ImageProps;

export default function ImageWrapper(props: Props) {
    const { nextImageProps, ...chakraImageProps } = props;
    return (
        <Image
            {...chakraImageProps}
            asChild
            alt={chakraImageProps.alt || "image"}
        >
            <NextImg
                {...nextImageProps}
                src={nextImageProps?.src || chakraImageProps.src}
                alt={chakraImageProps.alt || "image"}
                width={nextImageProps?.width || 0}
                height={nextImageProps?.height || 0}
            />
        </Image>
    )
}