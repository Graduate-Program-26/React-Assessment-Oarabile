import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import type { Account, Session } from "next-auth"
import type {JWT} from "next-auth/jwt"
 
const config = {
  providers: [GitHub],
  callbacks: {
    jwt({token, account}: {token : JWT, account?: Account | null }){
      if (account){
        token.accessToken = account.access_token;
      }
      return token
    },
    session({session, token}:{session : Session, token : JWT}){
      return{
        ...session,
        accessToken: token.accessToken,
      }
    }
  }
}

export const { handlers , auth , signIn , signOut} = NextAuth(config);