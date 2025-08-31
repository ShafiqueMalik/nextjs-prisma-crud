import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';

import './globals.css';
import { Providers } from '@/providers';

import { Josefin_Sans } from 'next/font/google';
import Navbar from '@/shared/components/layouts/Navbar';

const josefin_Sans = Josefin_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s - Task Manager',
    default: 'Task Manager',
  },
  description: 'A Task Manager application built with Next.js, Prisma, React, and Tailwind CSS.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth  " suppressHydrationWarning>
      <body className={josefin_Sans.className + ' antialiased  '}>
        <Providers>
          <div className="w-full">
            <Navbar />
            {/* <NavigationBar /> */}
            <main className="flex flex-col min-h-[calc(100vh-62px)] py-6 ">
              <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
            </main>

            <ToastContainer position="bottom-right" />
          </div>
        </Providers>
      </body>
    </html>
  );
}
