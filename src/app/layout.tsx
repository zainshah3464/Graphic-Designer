import Script from 'next/script'
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// ✅ Metadata export (allowed only on server side)
export const metadata: Metadata = {
  title: "Zain Shah",
  description: "Creative Developer & Designer from Karachi 🚀",
  icons: {
    icon: "/favicon-32x32.png",
  },
  openGraph: {
    title: "Zain Shah — Creative Developer",
    description: "Explore my design + dev projects, all in one place.",
    url: "https://zain-gaming-hub.vercel.app/",
    siteName: "Zain Shah",
    images: [
      {
        url: "/zain-org.jpg",
        width: 1200,
        height: 630,
        alt: "Zain Shah",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zain Shah",
    description: "Creative Developer & Designer",
    images: ["/zain-og.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* ✅ Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-MQEHNHFSQX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MQEHNHFSQX');
        `}
      </Script>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
