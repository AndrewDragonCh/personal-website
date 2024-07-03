import type { Metadata } from "next";
import PlausibleProvider from 'next-plausible'

import './globals.css'

export const metadata: Metadata = {
  title: "Andrew Still",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="andrewstill.moe" customDomain="plausible.andrewstill.moe" selfHosted />
      </head>
      <body>{children}</body>
    </html>
  );
}