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
  title: "Your Name — Software Engineer Portfolio",
  description: "Full-stack software engineer specializing in React, Next.js, TypeScript, and cloud architecture. View projects, skills, and experience.",
  keywords: ["Software Engineer", "Portfolio", "Full-Stack Developer", "React", "TypeScript", "Next.js", "Python", "AWS", "Docker", "Cloud Architecture"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Your Name — Software Engineer Portfolio",
    description: "Full-stack software engineer specializing in React, Next.js, TypeScript, and cloud architecture.",
    type: "website",
    locale: "en_US",
    siteName: "Your Name Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name — Software Engineer Portfolio",
    description: "Full-stack software engineer specializing in React, Next.js, TypeScript, and cloud architecture.",
    creator: "@yourname",
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
