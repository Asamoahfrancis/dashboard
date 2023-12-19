import NextAuth from "next-auth"; // import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { Validate } from "../../validate/Validate";
const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials, req) {
        try {
          const response = await Validate(credentials?.password);
          console.log("the response is ", response);
          if (response) {
            return {
              id: "myid",
              username: credentials?.username,
            };
          }
        } catch (error) {
          return null;
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
