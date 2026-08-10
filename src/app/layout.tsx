import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_METADATA } from "@/lib/data";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE_METADATA.title,
    template: "%s | Vận Hành Mới",
  },
  description: SITE_METADATA.description,
  keywords: [
    "quản lý vận hành",
    "AI cho vận hành",
    "Operation Manager",
    "tự động hóa vận hành",
    "dashboard vận hành",
    "KPI vận hành",
    "SOP",
    "AI automation",
  ],
  authors: [{ name: "Vận Hành Mới Team" }],
  creator: "Vận Hành Mới",
  metadataBase: new URL("https://vanhanhmoi.com"),
  alternates: {
    canonical: "https://vanhanhmoi.com",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://vanhanhmoi.com",
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    siteName: "Vận Hành Mới",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${plusJakartaSans.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Vận Hành Mới",
              "url": "https://vanhanhmoi.com",
              "description": SITE_METADATA.description,
              "sameAs": ["https://vanhanhmoi.vn"],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
