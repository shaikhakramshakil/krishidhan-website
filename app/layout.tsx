import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Krishidhan Seeds | Leading Agri-Input Company",
  description: "Krishidhan Seeds is a pioneer agricultural biotech company delivering high quality seeds for the Indian market.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${plusJakartaSans.variable} ${playfair.variable} antialiased min-h-screen flex flex-col font-sans overflow-x-hidden w-full bg-background text-foreground selection:bg-primary/20`}
      >
        <Header />
        <main className="flex-1 w-full overflow-x-hidden relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
