import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';

export const metadata: Metadata = {
  metadataBase: new URL("https://www.georgeweb-design.ro"),

  title: {
    default: "George Web Design | Website-uri Moderne și Aplicații Web dezvoltate de la zero, cu accent pe tine și afacerea ta",
    template: "%s | George Web Design",
  },

  description:
    "Creare website-uri moderne, rapide și optimizate SEO. Dezvoltare site-uri de prezentare și aplicații web personalizate pentru afaceri care vor vizibilitate și rezultate online.",

  applicationName: "George Web Design",

  keywords: [
    "web design",
    "creare site web",
    "dezvoltare website",
    "site de prezentare",
    "web developer Romania",
    "dezvoltare aplicatii web",
    "optimizare SEO website",
    "website business",
    "creare site personalizat",
    "web design Romania",
  ],

  authors: [{ name: "George Web Design", url: "https://www.georgeweb-design.ro" }],
  creator: "George Web Design",
  publisher: "George Web Design",

  category: "technology",

  alternates: {
    canonical: "https://www.georgeweb-design.ro",
  },

  openGraph: {
    type: "website",
    url: "https://www.georgeweb-design.ro",
    title: "George Web Design | Website-uri Moderne pentru Afaceri",
    description:
      "Website-uri Moderne și Aplicații Web dezvoltate de la zero, cu accent pe tine și afacerea ta",
    siteName: "George Web Design",
    locale: "ro_RO",
    images: [
      {
        url: "/metadata.jpg",
        width: 1285,
        height: 885,
        alt: "George Web Design - Creare Website-uri Profesionale",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "George Web Design | Creare Website-uri Profesionale",
    description:
        "Website-uri Moderne și Aplicații Web dezvoltate de la zero, cu accent pe tine și afacerea ta",
    images: ["/metadata.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  }
};


const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta', 
});

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter', 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${plusJakartaSans.variable} ${inter.variable} antialiased`}
      >
        {children}
        <Script defer src="https://cloud.umami.is/script.js"
        data-website-id="cffe3a05-0489-4419-95a9-33a48ab46468"
        strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
