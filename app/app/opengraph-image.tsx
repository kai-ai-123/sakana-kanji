import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "魚へん漢字帳 - 魚へんの漢字 検索サイト";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BASE_URL = "https://sakanahen-kanji.vercel.app";

export default async function Image() {
  // Noto Sans JP Bold をGoogle Fontsから取得
  let fontData: ArrayBuffer | null = null;
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700",
      { headers: { "User-Agent": "Mozilla/5.0 (compatible)" } }
    ).then((r) => r.text());
    const fontUrl = css.match(/src: url\((.+?)\) format\('woff2'\)/)?.[1];
    if (fontUrl) fontData = await fetch(fontUrl).then((r) => r.arrayBuffer());
  } catch {
    // フォント取得失敗時はシステムフォントにフォールバック
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(to right, #006688, #0088AA)",
          fontFamily: "'Noto Sans JP', sans-serif",
        }}
      >
        {/* 背景装飾: 大きな「魚」 */}
        <div
          style={{
            position: "absolute",
            right: -80,
            bottom: -100,
            fontSize: 500,
            fontWeight: "bold",
            color: "rgba(255,255,255,0.07)",
            lineHeight: 1,
          }}
        >
          魚
        </div>

        {/* 海藻イラスト */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${BASE_URL}/wakame.png`}
          alt=""
          width={300}
          height={300}
          style={{
            position: "absolute",
            left: 730,
            top: 340,
            opacity: 0.92,
          }}
        />

        {/* 魚イラスト */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${BASE_URL}/kumanomi.png`}
          alt=""
          width={170}
          height={170}
          style={{
            position: "absolute",
            left: 940,
            top: 200,
            opacity: 0.95,
          }}
        />

        {/* テキスト */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            left: 80,
            top: 150,
          }}
        >
          <div
            style={{
              fontSize: 110,
              fontWeight: "bold",
              color: "white",
              lineHeight: 1.1,
            }}
          >
            魚へん漢字帳
          </div>
          <div
            style={{
              fontSize: 48,
              color: "rgba(255,255,255,0.85)",
              marginTop: 20,
            }}
          >
            魚へんの漢字 検索サイト
          </div>
          <div
            style={{
              fontSize: 26,
              color: "rgba(255,255,255,0.45)",
              marginTop: 175,
            }}
          >
            sakanahen-kanji.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      ...(fontData
        ? {
            fonts: [
              {
                name: "Noto Sans JP",
                data: fontData,
                style: "normal",
                weight: 700,
              },
            ],
          }
        : {}),
    }
  );
}
