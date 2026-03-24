//declaration file for session extentions
import { DefaultSession } from "next-auth"

declare module "next-auth" {
    interface Session{
        accessToken: string
    }
}

export {}