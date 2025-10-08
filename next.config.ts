import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
    /* config options here */
    webpack: (config) => {
        config.externals.push("pino-pretty", "lokijs", "encoding");
        return config;
    },
    experimental: {
        optimizePackageImports: ["@chakra-ui/react"],
    },
};
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
