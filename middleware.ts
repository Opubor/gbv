import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    if (
      request.nextUrl.pathname.startsWith("/admin") &&
      request.nextauth.token?.role !== "2" &&
      request.nextauth.token?.role !== "1"
    ) {
      return NextResponse.rewrite(new URL("/denied", request.url));
    }
    if (
      request.nextUrl.pathname.startsWith("/admin/reports") &&
      request.nextauth.token?.role !== "2"
    ) {
      return NextResponse.rewrite(new URL("/auth-denied", request.url));
    }
    if (
      request.nextUrl.pathname.startsWith("/admin/activity-log") &&
      request.nextauth.token?.role !== "2"
    ) {
      return NextResponse.rewrite(new URL("/auth-denied", request.url));
    }
    if (
      request.nextUrl.pathname.startsWith("/admin/staffs") &&
      request.nextauth.token?.role !== "2"
    ) {
      return NextResponse.rewrite(new URL("/auth-denied", request.url));
    }
    if (
      request.nextUrl.pathname.startsWith("/admin/agencies") &&
      request.nextauth.token?.role !== "2"
    ) {
      return NextResponse.rewrite(new URL("/auth-denied", request.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = { matcher: ["/admin/:path*", "/superAdmin/:path*"] };
