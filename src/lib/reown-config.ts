import { cookieStorage, createStorage } from "@wagmi/core";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { avalancheFuji } from "@reown/appkit/networks";
import { createAppKit } from "@reown/appkit/react";

// Get projectId from https://dashboard.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) {
    throw new Error("Project ID is not defined");
}

export const networks = [avalancheFuji];

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
    storage: createStorage({
        storage: cookieStorage,
    }),
    ssr: true,
    projectId,
    networks,
});

export const reownConfig = wagmiAdapter.wagmiConfig;

// Set up metadata
const metadata = {
    name: "socio-task",
    description: "An example app using AppKit and Wagmi",
    url: "https://appkitexampleapp.com", // origin must match your domain & subdomain
    icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

// Create the modal
export const reownModal = createAppKit({
    adapters: [wagmiAdapter],
    projectId,
    networks: [avalancheFuji],
    defaultNetwork: avalancheFuji,
    metadata: metadata,
    themeMode: "light",
    features: {
        analytics: true,
        email:false,
        socials: false,
        onramp: false,
        receive: true,
    },
    themeVariables: {
        "--w3m-font-family": "Inter, sans-serif",
        "--w3m-font-size-master": "9px",
        "--w3m-border-radius-master": "1px"
    }
});
