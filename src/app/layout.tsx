import type { Metadata } from "next";
import type React from "react";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import ScrollProgressIndicator from "@/Component/ui/scroll-progress-indicator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coindox - Blockchain Solutions",
  description: "Navigate the world of blockchain with Coindox",
  generator: "Samuel Horjet",
  icons: {
    icon: "/tablogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        {children}
        <ScrollProgressIndicator />
      </body>
    </html>
  );
}
