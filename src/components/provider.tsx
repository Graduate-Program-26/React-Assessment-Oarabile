'use client';
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

export function Provider({children}: {children:React.ReactNode}){
    return(
        <SessionProvider>
            {children}
        </SessionProvider> 
    )
}