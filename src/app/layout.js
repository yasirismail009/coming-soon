import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Script from "next/script";
import JsonLd from "@/components/JsonLd";
import {
  organizationSchema,
  softwareApplicationSchema,
  websiteSchema,
} from "@/lib/structuredData";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Kampalo — Google Ads & Meta Dashboard with Kai",
    template: "%s | Kampalo",
  },
  description:
    "PPC reporting for Google Ads, Meta, and Shopify. An AgencyAnalytics and Looker Studio alternative when the job is paid search versus social. Kai proposes; you confirm.",
  keywords: [
    "Google Ads Meta dashboard",
    "PPC reporting software",
    "Google Ads reporting tool",
    "Facebook Ads dashboard",
    "AgencyAnalytics alternative",
    "Looker Studio alternative",
    "Google Data Studio alternative",
    "Databox alternative",
    "DashThis alternative",
    "Whatagraph alternative",
    "Supermetrics alternative",
    "marketing dashboard",
    "KPI dashboard",
    "Shopify ads dashboard",
    "AI marketing analytics",
    "cross-platform ROAS",
    "Kampalo Kai",
  ],
  authors: [{ name: "Kampalo" }],
  creator: "Kampalo",
  publisher: "Kampalo",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://kampalo.com"),
  openGraph: {
    title: "Kampalo — Google Ads & Meta Dashboard with Kai",
    description:
      "PPC reporting for Google Ads, Meta, and Shopify. AgencyAnalytics and Looker Studio alternative when the job is paid search versus social. Kai proposes; you confirm.",
    url: "/",
    siteName: "Kampalo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kampalo — AI marketing analytics for Google Ads, Meta, and Shopify",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kampalo — Google Ads & Meta Dashboard with Kai",
    description:
      "PPC reporting for Google Ads, Meta, and Shopify. AgencyAnalytics and Looker Studio alternative when the job is paid search versus social. Kai proposes; you confirm.",
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
      { url: "/favicon.ico", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
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
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { other: { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } }
      : {}),
  },
  applicationName: "Kampalo",
  category: "business",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#edf0f6" },
    { media: "(prefers-color-scheme: dark)", color: "#05080F" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1VKP8S34NJ"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1VKP8S34NJ');
            `,
          }}
        />
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'dark';
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
      <body className={`${jakarta.variable} ${geistMono.variable} antialiased`}>
        <JsonLd
          data={[organizationSchema(), websiteSchema(), softwareApplicationSchema()]}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
