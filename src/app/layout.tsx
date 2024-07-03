import type { Metadata } from "next";
import PlausibleProvider from 'next-plausible'

import './globals.css'
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Andrew Still",
};

const nonce = headers().get('x-nonce') ?? undefined;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script defer data-domain="andrewstill.moe" src="https://plausible.andrewstill.moe/js/script.js" nonce={nonce}></script>
      </head>
      <body>{children}</body>
    </html>
  );
}