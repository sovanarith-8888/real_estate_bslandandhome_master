import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { SeoDescription } from "@/lib/seo_description";
import { inter, suwannaphum } from "@/app/[locale]/(home)/fonts";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "East Land and Home",
  description: "Page-Not-Found",
};

interface RootLayoutProps{
  children: React.ReactNode;
  params: {
    locale: string
  }
}

export default function RootLayout({
  children,
  params: {locale}
}: Readonly<
  RootLayoutProps
>) {
  return (
    <html lang={locale}>
      {/* <link rel="shortcut icon" href="@/app/favico.ico" type="image/x-icon" /> */}
      <body className={`${inter.variable} ${suwannaphum.variable}`}>
        {children}
      </body>
    </html>
  );
}
