import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { BackToTop } from '@/components/BackToTop'
import { DarkModeToggle } from '@/components/DarkModeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lexend - Professional SaaS & Software Template',
  description: 'Full-featured, professional-looking software, saas and startup website template.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="theme-color" content="#178d72" />
      </head>
      <body className={`${inter.className} uni-body bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden`}>
        <ThemeProvider>
          {/* Bottom Actions Sticky */}
          <div className="backtotop-wrap position-fixed bottom-0 end-0 z-99 m-2 vstack">
            <DarkModeToggle />
            <BackToTop />
          </div>

          {/* Wrapper start */}
          <div id="wrapper" className="wrap overflow-x-hidden">
            {children}
          </div>
          {/* Wrapper end */}
        </ThemeProvider>
      </body>
    </html>
  )
}