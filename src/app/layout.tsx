import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.tsx ya page.tsx ke sath
export const metadata: Metadata = {
  title: "Zain Shah",
  description: "Creative Developer & Designer from Karachi 🚀",
  icons: {
    icon: "/favicon-32x32.png", // yeh file public folder mein hona chahiye (public/zain.png)
  },
  openGraph: {
    title: "Zain Shah — Creative Developer",
    description: "Explore my design + dev projects, all in one place.",
    url: "https://https://zain-gaming-hub.vercel.app/",
    siteName: "Zain Shah",
    images: [
      {
        url: "/zain-org.jpg", // public/zain-og.jpg
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
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
