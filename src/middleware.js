import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const { pathname } = req.nextUrl;

    // If the user is not authenticated
    if (!token) {
      if (pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL("/login/admin", req.url));
      }
      if (pathname.startsWith("/profile")) {
        return NextResponse.redirect(new URL("/login", req.url));
      }
      return;
    }

    // If the user is authenticated, check roles
    if (pathname.startsWith("/admin") && token?.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  },
  {
    callbacks: {
      // This is a workaround to make withAuth work with a custom middleware function.
      // We return true to always trigger the middleware function.
      authorized: () => true,
    },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/profile"],
};
