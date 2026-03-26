import { auth  } from "./lib/auth";
import type { NextAuthRequest } from "next-auth";

//path protetion code
export const proxy = auth((req : NextAuthRequest) => {
    if(!req.auth && (req.nextUrl.pathname !== "/login") && (req.nextUrl.pathname !== "/") && !(req.nextUrl.pathname.startsWith("/profile/"))){
        const newUrl = new URL("/login", req.nextUrl.origin);
        return Response.redirect(newUrl);
    }
}); 

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.svg).*)"],
}