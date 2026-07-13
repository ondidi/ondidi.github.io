import type { Metadata } from "next";
import { Parisienne, Plus_Jakarta_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-parisienne",
});

export const metadata: Metadata = {
  title: {
    default: "Ondids",
    template: "%s | Ondids",
  },

  description:
    "Pedaladas, aventuras de bicicleta, reflexões, tecnologia e histórias por Diógenes Pasqualini.",

  keywords: [
    "bike",
    "pedal",
    "ciclismo",
    "aventuras",
    "blog",
    "tecnologia",
    "reflexões",
    "Ondids",
  ],

  authors: [
    {
      name: "Diógenes Pasqualini",
    },
  ],

  creator: "Diógenes Pasqualini",

  metadataBase: new URL("https://ondids.com.br"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${jakarta.variable} ${parisienne.variable}`}>
        {children}
        <GoogleAnalytics gaId="G-CF6BHFP2XB" />
      </body>
    </html>
  );
}