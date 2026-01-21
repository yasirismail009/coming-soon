import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KAMPALO - Unified Marketing Analytics & Campaign Management Platform",
  description: "KAMPALO is a powerful B2B SaaS platform that provides unified marketing analytics and campaign management across Google Ads, Meta, TikTok, and more. Connect, monitor, analyze, and optimize your advertising campaigns from a single dashboard. Save time and increase ROI with advanced KPIs and cross-platform insights.",
  keywords: [
    "marketing analytics",
    "advertising dashboard",
    "campaign management",
    "Google Ads",
    "Meta Ads",
    "Facebook Ads",
    "Instagram Ads",
    "TikTok Ads",
    "unified analytics",
    "ROAS",
    "ROI",
    "CPA",
    "marketing automation",
    "advertising platform",
    "digital marketing tools",
  ],
  authors: [{ name: "KAMPALO" }],
  creator: "KAMPALO",
  publisher: "KAMPALO",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://kampalo.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "KAMPALO - Unified Marketing Analytics & Campaign Management",
    description: "Connect, monitor, analyze, and optimize your advertising campaigns across all major platforms through a single, intuitive dashboard.",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://kampalo.com',
    siteName: "KAMPALO",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'KAMPALO - Unified Marketing Analytics Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "KAMPALO - Unified Marketing Analytics & Campaign Management",
    description: "Connect, monitor, analyze, and optimize your advertising campaigns across all major platforms through a single, intuitive dashboard.",
    images: ['/og-image.png'],
    creator: '@kampalo',
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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
