import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
const roboto_init = Roboto(
  {
    subsets: ["latin"],
    weight:['100','400','700'],
    variable: '--font-roboto',
  });


export const metadata: Metadata = {
  title: "Portfolio",
  description: "Khon Samnang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
