import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "E-mail",
          type: "email",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "******",
        },
      },
      async authorize(credentials, req) {
        try {
          const res = await fetch(`${process.env.URL}api/login`, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });

          const user = await res.json();

          // If no error and we have user data, return it
          if (res.ok && user) {
            return user;
          }
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user?.role;
        token.firstName = user?.firstName;
        token.lastName = user?.lastName;
        token.id = user?.id;
        token.phoneNumber = user?.phoneNumber;
        token.email = user?.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
        session.user.firstName = token?.firstName;
        session.user.lastName = token?.lastName;
        session.user.id = token?.id;
        session.user.phoneNumber = token?.phoneNumber;
        session.user.email = token?.email;
      }
      return session;
    },
  },
  // =========================================================
  //   async jwt({ token, user }) {
  //     return { ...token, ...user };
  //   },
  //   async session({ session, token }) {
  //     session.user.role = token.role;
  //     return session;
  //   },
  // },
};
