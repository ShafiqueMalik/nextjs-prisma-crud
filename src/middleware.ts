// middleware.ts
import { auth } from '@/lib/auth';
import { NextResponse } from 'next/server';
console.log('============================================');
export default auth((req) => {
  // if not logged in → redirect to login
  console.log('middlware======================', req.auth);
  if (!req.auth) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
});

export const config = {
  matcher: ['/account/:path*'], // matches /account and all children
};
