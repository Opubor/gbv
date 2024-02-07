import { User } from "@prisma/client";
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: User & DefaultSession;
  }
  interface User extends DefaultUser {
    role: string;
    id: string;
    firstName: string;
    lastName: string;
    password: string;
    dob: DateTimestring;
    gender: string;
    phoneNumber: string;
    profilePic: string;
    newsletterSubscription: string;
    accountStatus: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: string;
    id: string;
    firstName: string;
    lastName: string;
    password: string;
    dob: DateTime;
    gender: string;
    phoneNumber: string;
    profilePic: string;
    newsletterSubscription: string;
    accountStatus: string;
  }
  //   type JWT = User;
}

type PaystackEventData = {
  id: number;
  amount: number;
  status: string;
  reference: string;
  metadata: Record<string, any>;
  paid_at: string;
  created_at: string;
  currency: "NGN" | "USD" | "EUR";
};

type PaystackEventResponse = {
  event: string;
  data: PaystackEventData;
};

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  phoneNumber: string;
  resetPasswordToken: string;
  resetPasswordTokenExpiry: string;
};
