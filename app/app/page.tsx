"use client";

import { useState } from "react";
import ReadingSearch from "@/components/ReadingSearch";
import ShapeSearch from "@/components/ShapeSearch";

type Tab = "reading" | "shape";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("reading");

  return (
    <main className="min-h-screen" style={{ background: "#E8FBF5" }}>
      {/* Header（青） */}
      <header style={{ background: "#0088AA" }}>
        <div className="max-w-2xl mx-auto px-4 pt-8 pb-5">
          <h1 className="text-3xl font-black mb-4" style={{ color: "#ffffff" }}>魚へんの漢字 検索サイト</h1>
          {/* Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("reading")}
              className="flex-1 py-2.5 text-sm font-bold rounded-xl transition-all"
              style={activeTab === "reading"
                ? { background: "#ffffff", color: "#0088AA" }
                : { background: "rgba(255,255,255,0.2)", color: "#ffffff" }}
            >
              読みから探す
            </button>
            <button
              onClick={() => setActiveTab("shape")}
              className="flex-1 py-2.5 text-sm font-bold rounded-xl transition-all"
              style={activeTab === "shape"
                ? { background: "#ffffff", color: "#0088AA" }
                : { background: "rgba(255,255,255,0.2)", color: "#ffffff" }}
            >
              形から探す
            </button>
          </div>
        </div>
      </header>

      {/* Content（ミント背景） */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        {activeTab === "reading" ? <ReadingSearch /> : <ShapeSearch />}
      </div>
    </main>
  );
}
