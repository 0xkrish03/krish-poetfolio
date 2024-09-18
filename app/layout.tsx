import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

export const metadata: Metadata = {
  title: "KR-Portfolio",
  description: "Made by Krish Ramani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-950">
      <body className="text-white">
        {/* Static Header outside PageTransition for better performance */}
        <Header />
        <StairTransition />
        {/* PageTransition only wraps the dynamic content */}
        <PageTransition>
          <main>{children}</main>
        </PageTransition>

      </body>
    </html>
  );
}
