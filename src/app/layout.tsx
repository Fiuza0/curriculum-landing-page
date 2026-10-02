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
  title: "Rodrigo Oliveira — Engenheiro de Software | Software Engineer",
  description: "Engenheiro de software full-stack especializado em React, Next.js, TypeScript e arquitetura cloud. Veja projetos, habilidades e experiência. | Full-stack software engineer specializing in React, Next.js, TypeScript, and cloud architecture.",
  keywords: ["Engenheiro de Software", "Software Engineer", "Portfolio", "Full-Stack Developer", "React", "TypeScript", "Next.js", "Python", "AWS", "Docker", "Cloud Architecture"],
  authors: [{ name: "Rodrigo Oliveira" }],
  creator: "Rodrigo Oliveira",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Rodrigo Oliveira — Engenheiro de Software | Software Engineer",
    description: "Engenheiro de software full-stack especializado em React, Next.js, TypeScript e arquitetura cloud.",
    type: "website",
    locale: "pt_BR",
    siteName: "Rodrigo Oliveira Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodrigo Oliveira — Engenheiro de Software | Software Engineer",
    description: "Engenheiro de software full-stack especializado em React, Next.js, TypeScript e arquitetura cloud.",
    creator: "@rodrigo_oliveira",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rodrigo Oliveira',
    url: 'https://rodrigo-oliveira.dev',
    jobTitle: 'Engenheiro de Software Sênior',
    description: 'Engenheiro de software full-stack especializado em React, Next.js, TypeScript e arquitetura cloud.',
    sameAs: [
      'https://github.com/rodrigo-oliveira',
      'https://linkedin.com/in/rodrigo-oliveira',
      'https://twitter.com/rodrigo_oliveira',
    ],
    knowsAbout: ['React', 'Next.js', 'TypeScript', 'Python', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'GraphQL', 'Node.js'],
    worksFor: {
      '@type': 'Organization',
      name: 'Open to Opportunities',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'University of Technology',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
