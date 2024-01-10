import 'prismjs/themes/prism.css'
import 'react-notion-x/src/styles.css'
import 'katex/dist/katex.min.css'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { ThemeProviders } from '@/components/theme/Providers'
import siteMetadata from '@/data/siteMetadata'
import '@/styles/global.css'
import "@/styles/notion.css"
import { IBM_Plex_Sans } from 'next/font/google'

const IBM_Plex = IBM_Plex_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm-plex',
  weight: "500"
})

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'zh-CN',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang={siteMetadata.language}
      className={`${IBM_Plex.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <body className="bg-white antialiased dark:bg-gray-900">
        <div className='flex flex-col min-h-screen flex-nowrap items-stretch'>
          <ThemeProviders>
            <Header />
            {children}
            <Footer />
          </ThemeProviders>
        </div>
      </body>
    </html>
  )
}
