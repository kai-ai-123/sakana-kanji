const FONT = "'Noto Sans JP', sans-serif";
const CHAR = "\u{2696F}"; // 𦥯 學の上部分

/** モーダルボタン用（小） */
export function GakuUeSvgSm() {
  return (
    <span style={{ fontFamily: FONT, fontSize: "1.5rem", opacity: 0.75 }}>
      {CHAR}
    </span>
  );
}

/** 形検索エリア用（大） */
export function GakuUeSvgLg() {
  return (
    <span style={{ fontFamily: FONT, fontSize: "6rem", lineHeight: 1, display: "inline-block", transform: "scaleX(1.3)" }}>
      {CHAR}
    </span>
  );
}
