import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";



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
      <body className={`text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
