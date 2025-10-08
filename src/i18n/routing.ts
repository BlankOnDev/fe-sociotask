import { defineRouting } from "next-intl/routing";

type Locale = "en" | "id";

const languages: Array<{ label: string; value: Locale }> = [
    { label: "English", value: "en" },
    { label: "Bahasa Indonesia", value: "id" },
];

export const routing = defineRouting({
    locales: languages.map((lang) => lang.value),
    defaultLocale: "en" as Locale,
    localePrefix: "as-needed",
});
