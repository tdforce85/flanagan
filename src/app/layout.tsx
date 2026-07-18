import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/lib/business";
import { localBusinessJsonLd } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCallBar } from "@/components/StickyCallBar";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: `${BUSINESS.name} | ${BUSINESS.tagline}`,
    template: `%s | ${BUSINESS.name}`,
  },
  description: `${BUSINESS.name} — reliable local handyman services in ${BUSINESS.serviceAreas
    .slice(0, 2)
    .join(" and ")}. Repairs, carpentry, painting, and more. Call for a free quote.`,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} | ${BUSINESS.tagline}`,
    description: `Reliable local handyman services. Call ${BUSINESS.phone} for a free quote.`,
    url: BUSINESS.url,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="flex min-h-screen flex-col bg-white text-ink antialiased">
        <Header />
        <main className="flex-1 pb-20 sm:pb-0">{children}</main>
        <Footer />
        <StickyCallBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
      </body>
    </html>
  );
}
