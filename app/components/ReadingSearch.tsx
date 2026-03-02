"use client";

import { useState } from "react";
import kanjiData from "@/data/kanji.json";
import KanjiCard from "./KanjiCard";
import { KanjiEntry } from "@/types";

const data = kanjiData as KanjiEntry[];

function normalize(str: string): string {
  // カタカナ→ひらがな変換して比較
  return str.replace(/[\u30A1-\u30F6]/g, (c) =>
    String.fromCharCode(c.charCodeAt(0) - 0x60)
  );
}

export default function ReadingSearch() {
  const [query, setQuery] = useState("");

  const filtered =
    query.trim() === ""
      ? data
      : data.filter((entry) => {
          const q = normalize(query.trim());
          return (
            entry.kun.some((k) => normalize(k).includes(q)) ||
            entry.on.some((o) => normalize(o).includes(q)) ||
            entry.kanji.includes(query.trim())
          );
        });

  return (
    <div className="space-y-8">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="例：さけ、マグロ、たい"
        className="w-full rounded-2xl px-4 py-3 text-base shadow-md focus:outline-none focus:ring-2 focus:ring-sky-300 border-none"
        style={{ background: "#ffffff" }}
      />
      {query && filtered.length === 0 ? (
        <p className="text-center text-gray-400 py-12">見つかりませんでした</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {filtered.map((entry) => (
            <KanjiCard key={entry.kanji} entry={entry} />
          ))}
        </div>
      )}
    </div>
  );
}
