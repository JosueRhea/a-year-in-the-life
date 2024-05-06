import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const inter = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "2024 - A Year Recap",
  description:  "A year recap of 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-zinc-100 flex items-center flex-col`}
      >
        <main className="w-full max-w-2xl mt-20 px-4">{children}</main>
      </body>
    </html>
  );
}
