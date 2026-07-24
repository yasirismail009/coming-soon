import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Script from "next/script";
import JsonLd from "@/components/JsonLd";
import {
  organizationSchema,
  softwareApplicationSchema,
  websiteSchema,
} from "@/lib/structuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Kampalo — AI Marketing Analytics for Google Ads & Meta",
    template: "%s | Kampalo",
  },
  description:
    "Kampalo unifies Google Ads and Meta in one dashboard. Ask Kai, our AI assistant, which campaigns to scale based on your synced performance data.",
  keywords: [
    "AI marketing analytics",
    "Google Ads Meta dashboard",
    "cross-platform ROAS",
    "AI marketing assistant",
    "Kampalo Kai",
    "unified ads analytics",
  ],
  authors: [{ name: "Kampalo" }],
  creator: "Kampalo",
  publisher: "Kampalo",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://kampalo.com"),
  openGraph: {
    title: "Kampalo — AI Marketing Analytics for Google Ads & Meta",
    description:
      "One dashboard for Google Ads and Meta—plus Kai to recommend which campaigns deserve more budget.",
    url: "/",
    siteName: "Kampalo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kampalo — AI marketing analytics for Google Ads and Meta",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kampalo — AI Marketing Analytics for Google Ads & Meta",
    description:
      "One dashboard for Google Ads and Meta—plus Kai to recommend which campaigns deserve more budget.",
    images: ["/og-image.png"],
    creator: "@kampalo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in env when GSC is ready
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <JsonLd
          data={[organizationSchema(), websiteSchema(), softwareApplicationSchema()]}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
