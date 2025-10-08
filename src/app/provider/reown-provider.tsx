'use client';
import { projectId, wagmiAdapter } from '@/lib/reown-config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useTheme } from 'next-themes';
import React, { useEffect, type ReactNode } from 'react';
import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi';
import { useAppKitTheme } from '@reown/appkit/react';

// Set up queryClient
const queryClient = new QueryClient()

if (!projectId) {
    throw new Error('Project ID is not defined')
}

export default function ReownProvider({ children, cookies }: { children: ReactNode; cookies: string | null }) {
    const { setThemeMode } = useAppKitTheme();
    const { theme } = useTheme();
    const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)

    useEffect(()=>{
        if(theme === "dark") {
            setThemeMode("dark")
        }
        if(theme === "light") {
            setThemeMode("light")
        }
    }, [theme, setThemeMode])

    return (
        <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
    )
}