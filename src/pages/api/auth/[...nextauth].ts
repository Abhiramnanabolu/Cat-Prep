import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";

console.log("NEXTAUTH_SECRET:", process.env.NEXTAUTH_SECRET);

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        if (typeof user.email !== "string") {
          console.error("Email is not valid");
          return false; 
        }

        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              name: user.name ?? "Anonymous",
              email: user.email,
              password: null,
            },
          });
        }

        return true; 
      } catch (err) {
        console.error("Sign-in error:", err);
        return false; 
      }
    },
    async redirect({ url, baseUrl }) {
      return baseUrl + "/";
    },
  },
  secret:process.env.NEXTAUTH_SECRET,
});
