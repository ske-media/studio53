import { NextResponse, type NextRequest } from "next/server";

/**
 * Normalise les chemins à slashs dupliqués (ex: //landing-privee/...).
 * Évite la SecurityError de history.replaceState côté client
 * (chemin interprété comme URL protocol-relative).
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.includes("//")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/\/{2,}/g, "/");
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
