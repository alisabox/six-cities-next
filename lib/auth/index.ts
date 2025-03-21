import 'server-only';

import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { SessionPayload } from '@/lib/types/login';

const secretKey = process.env.SECRET;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1hr')
    .sign(key);
}

export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch {
    return null;
  }
}

export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000);
  const session = await encrypt({ userId, expiresAt });
  const allCookies = await cookies();

  allCookies.set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });

  redirect('/');
}

export async function verifySession(): Promise<{ isAuth: boolean, userId?: number }> {
  const allCookies = await cookies();
  const cookie = allCookies.get('session')?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) {
    return { isAuth: false };
  }

  return { isAuth: true, userId: Number(session.userId) };
}

export async function updateSession() {
  const allCookies = await cookies();
  const session = allCookies.get('session')?.value;
  const payload = await decrypt(session);

  if (!session || !payload) {
    return null;
  }

  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  allCookies.set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: 'lax',
    path: '/',
  });
}

export async function deleteSession() {
  const allCookies = await cookies();
  allCookies.delete('session');
  redirect('/login');
}
