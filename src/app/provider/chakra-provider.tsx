"use client"

// import { ColorModeProvider } from "@/components/ui/color-mode"
import { system } from "@/theme"
import { ChakraProvider } from "@chakra-ui/react"
// import { ThemeProvider } from "next-themes"

export default function ChakraProviderWrapper(props: { children: React.ReactNode }) {
    return (
        <ChakraProvider value={system}>
            {/* <ThemeProvider attribute="class" disableTransitionOnChange> */}
                {/* <ColorModeProvider> */}
                    {props.children}
                {/* </ColorModeProvider> */}
            {/* </ThemeProvider> */}
        </ChakraProvider>
    )
}