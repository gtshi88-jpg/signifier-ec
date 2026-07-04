import type { Metadata } from "next";
import { Shippori_Mincho, Yeseva_One } from "next/font/google";
import "./globals.css";
import { Cursor, Grain } from "./components/chrome";

const yesevaOne = Yeseva_One({
  variable: "--font-serif-brand",
  weight: "400",
  subsets: ["latin"],
});

const shipporiMincho = Shippori_Mincho({
  variable: "--font-serif-jp",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "signifier | Gallery",
  description: "Jewelry gallery — layout study",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${yesevaOne.variable} ${shipporiMincho.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Grain />
        <Cursor />
      </body>
    </html>
  );
}
