import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const inter = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My year",
  description: "So this is my year",
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
        <main className="w-full max-w-2xl mt-20">{children}</main>
      </body>
    </html>
  );
}
