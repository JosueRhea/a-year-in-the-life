import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const inter = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "2024 - A Year Recap",
  description: "A year recap of 2024",
  metadataBase: new URL("https://recap.josuerhea.me"),
  openGraph: {
    title: "Josue A. - @josuerhea",
    description: "Just a year recap",
    url: "https://recap.josuerhea.me",
    siteName: "2024 - A Year Recap",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Josue A.",
    card: "summary_large_image",
  },
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
        <main className="w-full max-w-2xl mt-10 px-4">{children}</main>
      </body>
    </html>
  );
}
