"use client";

import { useState } from "react";
import ReadingSearch from "@/components/ReadingSearch";
import ShapeSearch from "@/components/ShapeSearch";
import KanjiCard from "@/components/KanjiCard";
import kanjiData from "@/data/kanji.json";
import { KanjiEntry } from "@/types";

type Tab = "reading" | "shape";

const data = kanjiData as KanjiEntry[];

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("reading");
  const [filteredEntries, setFilteredEntries] = useState<KanjiEntry[]>(data);

  return (
    <main className="min-h-screen" style={{ background: "#0088AA" }}>
      {/* Header（白・固定） */}
      <header className="sticky top-0 z-10" style={{ background: "#ffffff" }}>
        <div className="px-6 pt-6 pb-4">
          <h1 className="text-3xl font-black" style={{ color: "#0088AA" }}>魚へんの漢字 検索サイト</h1>
        </div>
      </header>

      {/* Tabs */}
      <div className="sticky top-[72px] z-10 bg-white border-b" style={{ borderColor: "#e5e7eb" }}>
        <div className="px-6 flex">
          <button
            onClick={() => setActiveTab("reading")}
            className="py-3 px-6 text-sm font-bold transition-all border-b-2"
            style={activeTab === "reading"
              ? { color: "#0088AA", borderColor: "#0088AA" }
              : { color: "#9ca3af", borderColor: "transparent" }}
          >
            読みから探す
          </button>
          <button
            onClick={() => setActiveTab("shape")}
            className="py-3 px-6 text-sm font-bold transition-all border-b-2"
            style={activeTab === "shape"
              ? { color: "#0088AA", borderColor: "#0088AA" }
              : { color: "#9ca3af", borderColor: "transparent" }}
          >
            形から探す
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        <h2 className="text-2xl font-black" style={{ color: "#ffffff" }}>
          {activeTab === "reading" ? "読みから探す" : "形から探す"}
        </h2>
        <p className="text-sm mt-1 mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>
          {activeTab === "reading" ? "読み仮名や漢字で検索できます" : "へんとつくりの組み合わせから選べます"}
        </p>

        {/* 検索UI（タブで切り替え） */}
        {activeTab === "reading"
          ? <ReadingSearch key="reading" onFilter={setFilteredEntries} allData={data} />
          : <ShapeSearch key="shape" onFilter={setFilteredEntries} />
        }

        {/* カードグリッド（共通） */}
        <div className="mt-8">
          {filteredEntries.length === 0 ? (
            <p className="text-center text-gray-400 py-12">見つかりませんでした</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
              {filteredEntries.map((entry) => (
                <KanjiCard key={entry.kanji} entry={entry} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
