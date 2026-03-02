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
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div
        className="rounded-2xl max-w-sm w-full shadow-2xl flex flex-col max-h-[80vh]"
        style={{ background: "#ffffff" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 pb-4 shrink-0">
          <h2 className="text-base font-bold text-gray-800">つくりを選んでください</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none w-8 h-8 flex items-center justify-center"
          >
            ×
          </button>
        </div>
        <div className="px-6 pb-3 shrink-0">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="つくりを入力..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
            autoFocus
          />
        </div>
        <div className="overflow-y-auto px-6 pb-6">
        <div className="grid grid-cols-5 gap-2">
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
