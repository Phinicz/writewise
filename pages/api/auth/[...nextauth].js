// import NextAuth from "next-auth";
// // import GoogleProvider from "next-auth/providers/google";
// import GitHubProvider from "next-auth/providers/github";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import prisma from "../../../lib/prismadb";

// export const authOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     // GoogleProvider({
//     //   clientId: process.env.GOOGLE_CLIENT_ID,
//     //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     // }),
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//   ],
// };
// export default NextAuth(authOptions);

import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();

export const authOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
