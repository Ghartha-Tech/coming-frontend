import type { Metadata } from "next";
import { Cormorant_Garamond, Albert_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sansFont = Albert_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ghartha | The Financial OS for Shared Living",
  description: "Ghartha is a home-centric financial operating system for urban Indians. Track UPI spends, split bills, and manage PG or society expenses effortlessly.",
  metadataBase: new URL("https://ghartha.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ghartha | The Financial OS for Shared Living",
    description: "Track all your UPI spends, split bills with flatmates, and never lose track of what you owe. The ultimate financial hub for urban Indians.",
    url: "https://ghartha.in",
    siteName: "Ghartha",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghartha | The Financial OS for Shared Living",
    description: "Track all your UPI spends, split bills with flatmates, and never lose track of what you owe.",
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${sansFont.variable}`}>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-LH1L0ZXKBS`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LH1L0ZXKBS');
            `,
          }}
        />
      </head>
      <body className="antialiased bg-sand text-forest min-h-screen font-sans selection:bg-terracotta selection:text-sand flex flex-col">
        {children}
      </body>
    </html>
  );
}
