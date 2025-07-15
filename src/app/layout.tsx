import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { BackToTop } from '@/components/BackToTop'
import { DarkModeToggle } from '@/components/DarkModeToggle'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lexend - Professional SaaS & Software Template',
  description: 'Full-featured, professional-looking software, saas and startup website template.',
  keywords: 'saas, saas template, site template, software, startup, digital product, html5, landing, marketing, bootstrap, uikit3, agency, ai, digital agency, it solutions, nodejs',
  authors: [{ name: 'UniStudio' }],
  creator: 'UniStudio',
  publisher: 'UniStudio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://unistudio.co/html/lexend'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://unistudio.co/html/lexend/',
    title: 'Lexend',
    description: 'Full-featured, Professional-looking SaaS, Software and Startup Site Template.',
    siteName: 'Lexend',
    images: [
      {
        url: 'https://unistudio.co/html/lexend/assets/images/common/seo-image.jpg',
        width: 1180,
        height: 600,
        alt: 'Lexend',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lexend',
    description: 'Full-featured, Professional-looking SaaS, Software and Startup Site Template.',
    images: ['https://unistudio.co/html/lexend/assets/images/common/seo-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
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
        <link rel="preload" href="/assets/css/unicons.min.css" as="style" />
        <link rel="preload" href="/assets/css/swiper-bundle.min.css" as="style" />
        <link rel="preload" href="/assets/css/magic-cursor.min.css" as="style" />
      </head>
      <body className={`${inter.className} uni-body bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden disable-cursor`}>
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

        {/* Scripts */}
        <Script src="/assets/js/libs/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/libs/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/libs/anime.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/libs/swiper-bundle.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/libs/scrollmagic.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/libs/typed.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/libs/tilt.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/libs/split-type.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/libs/prettify.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/libs/gsap.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/core/magic-cursor.js" strategy="lazyOnload" />
        <Script src="/assets/js/helpers/data-attr-helper.js" strategy="lazyOnload" />
        <Script src="/assets/js/helpers/swiper-helper.js" strategy="lazyOnload" />
        <Script src="/assets/js/helpers/splitype-helper.js" strategy="lazyOnload" />
        <Script src="/assets/js/helpers/anime-helper.js" strategy="lazyOnload" />
        <Script src="/assets/js/helpers/typed-helper.js" strategy="lazyOnload" />
        <Script src="/assets/js/helpers/tilt-helper.js" strategy="lazyOnload" />
        <Script src="/assets/js/core/marquee.js" strategy="lazyOnload" />
        <Script src="/assets/js/uikit-components-bs.js" strategy="lazyOnload" />
        <Script src="/assets/js/form.js" strategy="lazyOnload" />
        <Script src="/assets/js/app.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}