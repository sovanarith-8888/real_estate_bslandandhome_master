import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { SeoDescription } from "@/lib/seo_description";
import {inter,suwannaphum} from "@/app/(home)/fonts";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "East Land and Home",
  description: SeoDescription.TITLE_DESCRIPTINO,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${suwannaphum.variable}`}>{children}</body>
    </html>
  );
}
