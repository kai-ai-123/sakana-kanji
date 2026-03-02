"use client";

import { useState } from "react";
import { GakuUeSvgSm } from "./GakuUeSvg";
import { WagoMigiSvgSm } from "./WagoMigiSvg";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (tsukuri: string) => void;
  tsukuriList: string[];
}

export default function TsukuriModal({ isOpen, onClose, onSelect, tsukuriList }: Props) {
  const [query, setQuery] = useState("");

  function handleClose() {
    setQuery("");
    onClose();
  }

  if (!isOpen) return null;

  const filtered = query
    ? tsukuriList.filter((t) => t.includes(query))
    : tsukuriList;

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-start justify-center pt-24 p-4"
      onClick={handleClose}
    >
      <div
        className="rounded-2xl w-full shadow-2xl flex flex-col max-h-[65vh]"
        style={{ background: "#ffffff", maxWidth: "280px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 pt-4 pb-3 shrink-0">
          <h2 className="text-sm font-bold text-gray-800">つくりを選んでください</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none w-8 h-8 flex items-center justify-center"
          >
            ×
          </button>
        </div>
        <div className="px-4 pb-3 shrink-0">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="つくりを入力..."
            className="w-full rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
            style={{ fontSize: "16px", background: "#ffffff", border: "1px solid #e8e8e8", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
          />
        </div>
        <div className="overflow-y-auto px-4 pb-4">
          <div className="grid grid-cols-4 gap-2">
            {filtered.map((tsukuri) => (
              <button
                key={tsukuri}
                onClick={() => {
                  onSelect(tsukuri);
                  handleClose();
                }}
                className="text-2xl py-3 rounded-xl border border-gray-200 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-700 transition-colors flex items-center justify-center"
              >
                {tsukuri === "學上" ? <GakuUeSvgSm /> : tsukuri === "鰖右" ? <WagoMigiSvgSm /> : tsukuri}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
