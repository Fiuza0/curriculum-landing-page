import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Software Engineer Portfolio",
  description: "Portfolio and curriculum of a Software Engineer — projects, skills, experience, and contact information.",
  keywords: ["Software Engineer", "Portfolio", "Full-Stack Developer", "React", "TypeScript", "Next.js"],
  authors: [{ name: "Your Name" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Software Engineer Portfolio",
    description: "Portfolio and curriculum of a Software Engineer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Engineer Portfolio",
    description: "Portfolio and curriculum of a Software Engineer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
