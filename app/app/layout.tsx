import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "魚へん漢字帳",
  verification: {
    google: "ZerhD1GcADX5frdNcJHjDXF7gjLcaOcssJnYc7xxxWE",
  },
  description: "魚へんの漢字を読みや形から調べられるサイト。居酒屋のメニューで見かける難しい漢字もすぐ調べられます。",
  openGraph: {
    title: "魚へん漢字帳",
    description: "魚へんの漢字を読みや形から調べられるサイト。居酒屋のメニューで見かける難しい漢字もすぐ調べられます。",
    url: "https://sakanahen-kanji.vercel.app/",
    siteName: "魚へん漢字帳",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "魚へん漢字帳",
    description: "魚へんの漢字を読みや形から調べられるサイト。",
  },
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
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "魚へん漢字帳",
              alternateName: "魚へんの漢字 検索サイト",
              description: "魚へんの漢字を読みや形から調べられるサイト。居酒屋のメニューで見かける難しい漢字もすぐ調べられます。",
              url: "https://sakanahen-kanji.vercel.app",
              inLanguage: "ja",
              keywords: "魚へん,魚偏,漢字,読み方,一覧,検索,居酒屋,メニュー,魚の漢字",
            }),
          }}
        />
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-MDHVVRKTS0" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MDHVVRKTS0');
          `}
        </Script>
      </body>
    </html>
  );
}
