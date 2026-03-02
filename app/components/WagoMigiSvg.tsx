const FONT = "'Hiragino Kaku Gothic ProN','Hiragino Sans','Yu Gothic Medium','Yu Gothic',Meiryo,sans-serif";

/** モーダルボタン用（小）: 鰖の右部分 */
export function WagoMigiSvgSm() {
  // viewBox でクリップ：x=27 から右端まで（文字中央より少し右でカット）
  return (
    <svg width="15" height="31" viewBox="25 3 27 52" style={{ opacity: 0.75, display: "block", margin: "0 auto" }}>
      <text
        x="26"
        y="50"
        fontSize="52"
        textAnchor="middle"
        fontFamily={FONT}
        fill="currentColor"
      >
        鰖
      </text>
    </svg>
  );
}

/** 形検索エリア用（大）: 鰖の右部分 */
export function WagoMigiSvgLg() {
  // font-size=160、x=82 から右端まで（文字中央より少し右でカット）
  return (
    <svg width="56" height="112" viewBox="78 10 82 164" style={{ display: "block", margin: "0 auto" }}>
      <text
        x="80"
        y="156"
        fontSize="160"
        textAnchor="middle"
        fontFamily={FONT}
        fill="currentColor"
      >
        鰖
      </text>
    </svg>
  );
}
