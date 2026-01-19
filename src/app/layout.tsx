import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pingintrip - Lombok Car & Motor Rental",
  description: "Explore Lombok your way. Easy car and motorcycle rental, private tours, and airport transfers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased flex flex-col min-h-screen`}
      >
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
