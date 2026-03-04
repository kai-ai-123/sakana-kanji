const FONT = "'Noto Sans JP','Hiragino Kaku Gothic ProN','Hiragino Sans','Yu Gothic Medium','Yu Gothic',Meiryo,sans-serif";
const SIZE = 144; // 1.5x

/** 左右構造サンプル：鰕（えび）の左半分（魚部分）。x=2 w=61 y=128 */
export function KamasuHidariSvg() {
  return (
    <svg width="61" height={SIZE} viewBox={`2 0 61 ${SIZE}`}>
      <text
        x={SIZE / 2}
        y={128}
        fontSize={SIZE}
        textAnchor="middle"
        fontFamily={FONT}
        fill="currentColor"
      >
        鰕
      </text>
    </svg>
  );
}

/** 上下構造サンプル：鯊（はぜ）の下半分（魚部分）。左端だけ斜めカット。yStart=75 h=77 leftY=92 rightY=77 */
export function HazeShitaSvg() {
  return (
    <svg width={SIZE} height="77" viewBox={`0 75 ${SIZE} 77`}>
      <defs>
        <clipPath id="haze-clip">
          <polygon points="0,92 40,77 144,77 144,152 0,152" />
        </clipPath>
      </defs>
      <text
        x={SIZE / 2}
        y={SIZE - 4}
        fontSize={SIZE}
        textAnchor="middle"
        fontFamily={FONT}
        fill="currentColor"
        clipPath="url(#haze-clip)"
      >
        鯊
      </text>
    </svg>
  );
}
