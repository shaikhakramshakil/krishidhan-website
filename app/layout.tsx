import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Krishidhan Seeds | Leading Agri-Input Company",
  description: "Krishidhan Seeds is a pioneer agricultural biotech company delivering high quality seeds for the Indian market.",
};

export const viewport: Viewport = {
  themeColor: '#16a34a',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <link rel="apple-touch-icon" href="/ios/180.png" />
      </head>
      <body
        className={`${plusJakartaSans.variable} antialiased min-h-screen flex flex-col font-sans overflow-x-hidden w-full`}
      >
        <Header />
        <main className="flex-1 w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
