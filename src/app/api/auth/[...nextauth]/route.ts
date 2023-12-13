import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import crypto from "crypto";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const id = crypto.randomBytes(20).toString("hex");

        return {
          id: id,
          email: credentials?.email,
        };
      },
    }),
  ],
});

export { handler as GET, handler as POST };
