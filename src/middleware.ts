import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: [
    '/((?!login|signup|_next|favicon.ico).*)', // Excluye login, signup, y rutas estáticas
  ],
};

export async function middleware(request: NextRequest) {
  const cookiesStore = cookies();
  const accessToken = (await cookiesStore).get('accessToken')?.value;
  const pathname = request.nextUrl.pathname;

  if (!accessToken && pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (accessToken && pathname === '/login') {
    return NextResponse.redirect(new URL('/store', request.url));
  }

  return NextResponse.next();
}