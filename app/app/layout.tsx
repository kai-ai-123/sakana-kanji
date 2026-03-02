import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "魚へんの漢字 検索サイト",
  description: "魚へんの漢字を読みや形から調べられるサイト。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;700;900&family=Noto+Sans+JP&text=%F0%A6%A5%AF&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
