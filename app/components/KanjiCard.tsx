"use client";

import { useState } from "react";
import { KanjiEntry } from "@/types";

interface Props {
  entry: KanjiEntry;
}

export default function KanjiCard({ entry }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-2xl p-4 flex flex-col items-center gap-2 hover:shadow-md hover:-translate-y-1 transition-all w-full text-left"
        style={{ background: "#ffffff", border: "1px solid #e8e8e8", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
      >
        <div className="flex items-center gap-2">
          {[entry.kanji, ...(entry.variants ?? [])].map((k, i) => (
            <span key={k} className="flex items-center gap-2">
              {i > 0 && <span className="text-xl text-gray-300 font-normal">･</span>}
              <span className="text-5xl font-bold" style={{ color: "#1a1a2e" }}>{k}</span>
            </span>
          ))}
        </div>
        <div className="text-center space-y-0.5">
          {entry.kun.length > 0 && (
            <div className="text-sm text-gray-700">
              <span className="font-medium text-gray-400 text-xs">訓</span>{" "}
              {entry.kun.join("・")}
            </div>
          )}
          {entry.on.length > 0 && (
            <div className="text-xs text-gray-400">
              <span className="font-medium">音</span> {entry.on.join("・")}
            </div>
          )}
        </div>
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setOpen(false)}
        >
          <div
            className="rounded-2xl max-w-sm w-full shadow-2xl p-8 flex flex-col items-center gap-4 animate-popUp"
            style={{ background: "#F5FFFE" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              {[entry.kanji, ...(entry.variants ?? [])].map((k, i) => (
                <span key={k} className="flex items-center gap-3">
                  {i > 0 && <span className="text-3xl text-gray-300 font-normal">･</span>}
                  <span className="text-8xl font-bold" style={{ color: "#1a1a2e" }}>{k}</span>
                </span>
              ))}
            </div>
            <div className="text-center space-y-1">
              {entry.kun.length > 0 && (
                <div className="text-base text-gray-700">
                  <span className="text-xs text-gray-400 font-medium">訓</span>{" "}
                  {entry.kun.join("・")}
                </div>
              )}
              {entry.on.length > 0 && (
                <div className="text-sm text-gray-400">
                  <span className="font-medium">音</span> {entry.on.join("・")}
                </div>
              )}
            </div>
            <p className="text-sm text-gray-600 text-center leading-relaxed">{entry.meaning}</p>
            <button
              onClick={() => setOpen(false)}
              className="mt-2 text-sm text-gray-400 hover:text-gray-600"
            >
              閉じる
            </button>
          </div>
        </div>
      )}
    </>
  );
}
