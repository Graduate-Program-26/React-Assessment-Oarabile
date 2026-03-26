'use client';
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

export function Provider({children}: {children:React.ReactNode}){
    return(
        <ThemeProvider attribute="data-theme">
           <SessionProvider>
                {children}
            </SessionProvider> 
        </ThemeProvider>  
    )
}