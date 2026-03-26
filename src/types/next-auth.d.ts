//declaration file for session extentions

declare module "next-auth" {
  interface Session {
    accessToken: string;
  }
}

export {};
