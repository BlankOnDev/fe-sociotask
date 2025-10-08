import localFont from "next/font/local";

export const notoSansMono = localFont({
    src: "./NotoSansMono-VariableFont.ttf",
    display: "swap",
});

export const outfit = localFont({
    src: "./Outfit-VariableFont.ttf",
    display: "swap",
});

export const playfairDisplay = localFont({
    src: [
        {
            path: "./PlayfairDisplay-VariableFont.ttf",
            style: "normal",
        },
        {
            path: "./PlayfairDisplay-Italic-VariableFont.ttf",
            style: "italic",
        }
    ],
});