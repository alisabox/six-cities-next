import { Geist, Geist_Mono } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import type { Metadata } from 'next';
import { verifySession } from '@/lib/auth';
import AuthContextProvider from '@/lib/context/auth';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '6 cities',
  description: 'Booking service',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookie = await verifySession();
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AuthContextProvider cookie={cookie}>
          {children}
        </AuthContextProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
