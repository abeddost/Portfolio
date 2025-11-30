import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import StructuredData from "@/components/StructuredData";

const baseUrl = 'https://abeddost.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Abdul Qader Dost | Fullstack Developer & AI Engineer",
    template: "%s | Abdul Qader Dost"
  },
  description: "Abdul Qader Dost - Fullstack Developer & AI Engineer. Specializing in AI, Machine Learning, and modern web applications. Building scalable, user-focused solutions.",
  keywords: [
    "Fullstack Developer",
    "AI Engineer",
    "Machine Learning Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer",
    "Portfolio",
    "Abdul Qader Dost",
    "Fullstack Developer Portfolio",
    "AI ML Engineer Germany"
  ],
  authors: [{ name: "Abdul Qader Dost" }],
  creator: "Abdul Qader Dost",
  publisher: "Abdul Qader Dost",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Abdul Qader Dost Portfolio",
    title: "Abdul Qader Dost | Fullstack Developer & AI Engineer",
    description: "Abdul Qader Dost - Fullstack Developer & AI Engineer. Specializing in AI, Machine Learning, and modern web applications.",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`, // You'll need to create this
        width: 1200,
        height: 630,
        alt: "Abdul Qader Dost - Fullstack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Qader Dost | Fullstack Developer & AI Engineer",
    description: "Abdul Qader Dost - Fullstack Developer & AI Engineer. Specializing in AI, Machine Learning, and modern web applications.",
    creator: "@abeddostt", // Update with your Twitter handle if you have one
    images: [`${baseUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'googlefa924266e7de3aa4',
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="antialiased">
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(219,39,119,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>
        <Navigation />
        <main className="min-h-screen relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
