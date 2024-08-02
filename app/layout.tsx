import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'
import './globals.css';
import { ToastProvider } from '@/components/providers/toaster-provider';
import { ConfettiProvider } from '@/components/providers/confetti-provider';
import { Button } from '@/components/ui/button';
import { LandingNavbar } from '@/components/landing-navbar';
import { LandingContent } from '@/components/landing-content';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Only English',
  description: 'Hebrew To English Online Courses To All Level ( Elementary -> High School )',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <SignedOut>
            <div className="mx-auto w-full h-full overflow-auto">
              <LandingNavbar />
              <LandingContent />
            </div>
          </SignedOut>
          <SignedIn>
            <ConfettiProvider />
            <ToastProvider />
            {children}
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  )
}