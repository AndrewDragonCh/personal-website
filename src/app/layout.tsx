import type { Metadata } from "next";

import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL("https://www.andrewstill.moe"),
  title: "Andrew Still",
  description: "Personal website for Andrew Still",
  applicationName: "Andrew Still",
  authors: [{ name: "Andrew Still" }],
  keywords: ["Resume", "Developer", "Programmer"],
  referrer: "no-referrer",
  viewport: "width=device-width, initial-scale=1.0",
  creator: "Andrew Still",
  publisher: "Andrew Still",
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
    date: true,
    url: true,
  },
  robots: "index, follow",
  // Open Graph
  openGraph: {
    title: "Andrew Still",
    description: "Personal website for Andrew Still",
    type: "website",
    locale: "en_US",
    url: "https://andrewstill.moe",
    siteName: "Andrew Still",
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
      </head>
      <body>{children}</body>
    </html>
  );
}