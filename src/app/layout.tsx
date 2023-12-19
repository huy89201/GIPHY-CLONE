import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GloContextProvider from "./context/gloContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GIPHY",
  description: "GIPHY clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GloContextProvider>{children}</GloContextProvider>
      </body>
    </html>
  );
}
