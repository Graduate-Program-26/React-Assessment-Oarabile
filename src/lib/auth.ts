import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks: {
    jwt({token, account}){
      if (account){
        token.accessToken = account.access_token;
      }
      return token
    },
    session({session, token}){
      return{
        ...session,
        accessToken: token.accessToken,
      }
    }
  }
})