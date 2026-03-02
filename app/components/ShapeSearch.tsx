"use client";

import { useState, useEffect, useMemo } from "react";
import kanjiData from "@/data/kanji.json";
import TsukuriModal from "./TsukuriModal";
import { KanjiEntry } from "@/types";
import { KamasuHidariSvg, HazeShitaSvg } from "./StructureSampleSvg";

const data = kanjiData as KanjiEntry[];

type Structure = "左右" | "上下";

type Props = {
  onFilter: (entries: KanjiEntry[]) => void;
};

export default function ShapeSearch({ onFilter }: Props) {
  const [selectedStructure, setSelectedStructure] = useState<Structure>("左右");
  const [selectedTsukuri, setSelectedTsukuri] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tsukuriList = [...new Set(
    data.filter((e) => e.structure === selectedStructure).flatMap((e) => e.tsukuri)
  )].sort((a, b) => a.localeCompare(b, "ja"));

  const matched = useMemo(() =>
    selectedTsukuri
      ? data.filter(
          (e) => e.structure === selectedStructure && e.tsukuri.includes(selectedTsukuri)
        )
      : data.filter((e) => e.structure === selectedStructure),
    [selectedStructure, selectedTsukuri]
  );

  useEffect(() => {
    onFilter(matched);
  }, [matched, onFilter]);

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
            style={selectedStructure === s ? { background: "#ffffff", color: "#0088AA" } : { background: "rgba(255,255,255,0.25)", color: "#ffffff" }}
          >
            {s === "左右" ? "魚が左" : "魚が下"}
          </button>
        ))}
      </div>

      {/* 漢字表示エリア */}
      {selectedTsukuri && matched.length > 0 ? (
        /* 選択後：完成形の漢字を大きく表示 */
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex flex-col items-center justify-center rounded-2xl transition-all hover:bg-gray-50"
          style={{ background: "#ffffff", border: "1px solid #e8e8e8", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", width: "240px", height: "240px", margin: "0 auto" }}
          title="クリックして変更"
        >
          <span style={{ fontSize: "8rem", lineHeight: 1, color: "#0088AA" }}>{matched[0].kanji}</span>
          <span className="text-xs text-gray-400 mt-3">タップして変更</span>
        </button>
      ) : selectedStructure === "左右" ? (
        /* 左右：横並び */
        <div className="flex items-center justify-center gap-1 rounded-2xl shadow-md" style={{ background: "#ffffff", border: "1px solid #e8e8e8", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", width: "240px", height: "240px", margin: "0 auto", overflow: "hidden" }}>
          <span className="text-gray-800 leading-none select-none">
            <KamasuHidariSvg />
          </span>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-5xl font-bold text-gray-300 border-2 border-dashed border-gray-300 hover:border-blue-300 hover:text-blue-300 rounded-2xl transition-all flex items-center justify-center w-20 h-36"
            title="クリックして選ぶ"
          >
            ？
          </button>
        </div>
      ) : (
        /* 上下：縦並び */
        <div className="flex flex-col items-center justify-center gap-1 rounded-2xl shadow-md" style={{ background: "#ffffff", border: "1px solid #e8e8e8", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", width: "240px", height: "240px", margin: "0 auto", overflow: "hidden" }}>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-5xl font-bold text-gray-300 border-2 border-dashed border-gray-300 hover:border-blue-300 hover:text-blue-300 rounded-2xl transition-all flex items-center justify-center w-36 h-[82px]"
            title="クリックして選ぶ"
          >
            ？
          </button>
          <span className="text-gray-800 leading-none select-none">
            <HazeShitaSvg />
          </span>
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
