import { NextRequest, NextResponse } from 'next/server';
import { AppRoute } from '@/lib/const';
import { AppRoutePath } from '@/lib/types/global';

const protectedRoutes: AppRoutePath[] = [AppRoute.FAVORITE];
const publicRoutes: AppRoutePath[] = [AppRoute.LOGIN];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname as AppRoutePath;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = req.cookies.get('session')?.value;

  if (isProtectedRoute && !cookie) {
    return NextResponse.redirect(new URL(AppRoute.LOGIN, req.url));
  }

  if (isPublicRoute && cookie) {
    return NextResponse.redirect(new URL(AppRoute.ROOT, req.url));
  }

  return NextResponse.next();
}
