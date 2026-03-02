"use client";

import { useState } from "react";
import kanjiData from "@/data/kanji.json";
import KanjiCard from "./KanjiCard";
import TsukuriModal from "./TsukuriModal";
import { KanjiEntry } from "@/types";
import { GakuUeSvgLg } from "./GakuUeSvg";
import { WagoMigiSvgLg } from "./WagoMigiSvg";
import { KamasuHidariSvg, HazeShitaSvg } from "./StructureSampleSvg";

const data = kanjiData as KanjiEntry[];

type Structure = "左右" | "上下";

export default function ShapeSearch() {
  const [selectedStructure, setSelectedStructure] = useState<Structure>("左右");
  const [selectedTsukuri, setSelectedTsukuri] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tsukuriList = [...new Set(
    data.filter((e) => e.structure === selectedStructure).flatMap((e) => e.tsukuri)
  )].sort((a, b) => a.localeCompare(b, "ja"));

  const matched = selectedTsukuri
    ? data.filter(
        (e) => e.structure === selectedStructure && e.tsukuri.includes(selectedTsukuri)
      )
    : data.filter((e) => e.structure === selectedStructure);

  function handleStructureChange(s: Structure) {
    setSelectedStructure(s);
    setSelectedTsukuri(null);
  }

  return (
    <div className="space-y-8">
      {/* 構造タイプトグル */}
      <div className="flex items-center justify-center gap-2">
        {(["左右", "上下"] as Structure[]).map((s) => (
          <button
            key={s}
            onClick={() => handleStructureChange(s)}
            className={`px-5 py-2 rounded-2xl text-sm font-bold transition-all ${
              selectedStructure === s
                ? "text-white shadow-md"
                : ""
            }`}
            style={selectedStructure === s ? { background: "rgba(255,255,255,0.25)", color: "#ffffff" } : { background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }}
          >
            {s}
          </button>
        ))}
      </div>

      {/* 漢字表示エリア */}
      {selectedStructure === "左右" ? (
        /* 左右：横並び（魚53px＋つくり43px＝96px正方形） */
        <div className="flex items-center justify-center gap-1 rounded-2xl shadow-md" style={{ background: "#ffffff", width: "240px", height: "240px", margin: "0 auto" }}>
          <span className="text-gray-800 leading-none select-none">
            <KamasuHidariSvg />
          </span>
          <button
            onClick={() => setIsModalOpen(true)}
            className={`rounded-2xl transition-all flex items-center justify-center overflow-hidden w-20 h-36 ${
              selectedTsukuri
                ? "text-blue-600 hover:bg-blue-50"
                : "text-5xl font-bold text-gray-300 border-2 border-dashed border-gray-300 hover:border-blue-300 hover:text-blue-300"
            }`}
            title={selectedTsukuri ? "クリックして変更" : "クリックして選ぶ"}
          >
            {selectedTsukuri
              ? selectedTsukuri === "鰖右"
                ? <WagoMigiSvgLg />
                : <span style={{ fontSize: "5rem", lineHeight: 1, display: "inline-block", transform: "scaleY(1.7) translateY(10%)" }}>{selectedTsukuri}</span>
              : "？"
            }
          </button>
        </div>
      ) : (
        /* 上下：縦並び（つくり48px＋魚46px＝94px正方形） */
        <div className="flex flex-col items-center justify-center gap-1 rounded-2xl shadow-md" style={{ background: "#ffffff", width: "240px", height: "240px", margin: "0 auto" }}>
          <button
            onClick={() => setIsModalOpen(true)}
            className={`rounded-2xl transition-all flex items-center justify-center overflow-hidden w-36 h-[82px] ${
              selectedTsukuri
                ? "text-blue-600 hover:bg-blue-50"
                : "text-5xl font-bold text-gray-300 border-2 border-dashed border-gray-300 hover:border-blue-300 hover:text-blue-300"
            }`}
            title={selectedTsukuri ? "クリックして変更" : "クリックして選ぶ"}
          >
            {selectedTsukuri
              ? selectedTsukuri === "學上"
                ? <GakuUeSvgLg />
                : <span style={{ fontSize: "5rem", lineHeight: 1, display: "inline-block", transform: "scaleX(1.6)" }}>{selectedTsukuri}</span>
              : "？"
            }
          </button>
          <span className="text-gray-800 leading-none select-none">
            <HazeShitaSvg />
          </span>
        </div>
      )}

      {/* 結果 */}
      {matched.length > 0 && (
        <div className="space-y-3 mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {matched.map((entry) => (
              <KanjiCard key={entry.kanji} entry={entry} />
            ))}
          </div>
        </div>
      )}


      <TsukuriModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={setSelectedTsukuri}
        tsukuriList={tsukuriList}
      />
    </div>
  );
}
