import {
    createSystem,
    defaultConfig,
    defineConfig,
    defineGlobalStyles,
    defineRecipe,
    defineTokens,
} from "@chakra-ui/react";
import { notoSansMono, outfit, playfairDisplay } from "@/fonts";

const tokens = defineTokens({
    fonts: {
        heading: {
            value: `${outfit.style.fontFamily}, Inter, sans-serif`,
        },
        body: {
            value: `${outfit.style.fontFamily}, Inter, sans-serif`,
        },
        mono: {
            value: `${notoSansMono.style.fontFamily}, monospace`,
        },
        display: {
            value: `${playfairDisplay.style.fontFamily}, "Times New Roman", serif`,
        },
    },
});

const buttonRecipes = defineRecipe({
    base: {
        borderRadius: "xl",
    },
});

const globalCss = defineGlobalStyles({
    html: {
        fontSize: {
            base: "15px",
            sm: "16px",
        },
    },
});

const config = defineConfig({
    globalCss,
    theme: {
        tokens,
        recipes: {
            button: buttonRecipes,
        },
    },
});

export const system = createSystem(defaultConfig, config);
