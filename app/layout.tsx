import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'
import './globals.css';
import { ToastProvider } from '@/components/providers/toaster-provider';
import { ConfettiProvider } from '@/components/providers/confetti-provider';
import { Button } from '@/components/ui/button';

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
        <body>
          <SignedOut>
            <Button>
              <SignInButton mode='modal'/>
            </Button>
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