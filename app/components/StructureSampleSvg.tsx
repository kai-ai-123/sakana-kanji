const FONT = "'Hiragino Kaku Gothic ProN','Hiragino Sans','Yu Gothic Medium','Yu Gothic',Meiryo,sans-serif";
const SIZE = 144; // 1.5x

/** 左右構造サンプル：魳（かます）の左半分（魚部分）。カットx=72（50%） */
export function KamasuHidariSvg() {
  return (
    <svg width="64" height={SIZE} viewBox={`0 0 64 ${SIZE}`}>
      <text
        x={SIZE / 2}
        y={SIZE - 4}
        fontSize={SIZE}
        textAnchor="middle"
        fontFamily={FONT}
        fill="currentColor"
      >
        魳
      </text>
    </svg>
  );
}

/** 上下構造サンプル：鯊（はぜ）の下半分（魚部分）。カットy=86（60%） */
export function HazeShitaSvg() {
  return (
    <svg width={SIZE} height="58" viewBox={`0 86 ${SIZE} 58`}>
      <text
        x={SIZE / 2}
        y={SIZE - 4}
        fontSize={SIZE}
        textAnchor="middle"
        fontFamily={FONT}
        fill="currentColor"
      >
        鯊
      </text>
    </svg>
  );
}
