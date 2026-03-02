"use client";

import { useState, useEffect } from "react";
import { KanjiEntry } from "@/types";

function normalize(str: string): string {
  return str.replace(/[\u30A1-\u30F6]/g, (c) =>
    String.fromCharCode(c.charCodeAt(0) - 0x60)
  );
}

type Props = {
  allData: KanjiEntry[];
  onFilter: (entries: KanjiEntry[]) => void;
};

export default function ReadingSearch({ allData, onFilter }: Props) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const filtered =
      query.trim() === ""
        ? allData
        : allData.filter((entry) => {
            const q = normalize(query.trim());
            return (
              entry.kun.some((k) => normalize(k).includes(q)) ||
              entry.on.some((o) => normalize(o).includes(q)) ||
              entry.kanji.includes(query.trim())
            );
          });
    onFilter(filtered);
  }, [query, allData, onFilter]);

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="例：さけ、マグロ、たい"
      className="block mx-auto w-full sm:w-1/2 lg:w-1/3 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-300"
      style={{ fontSize: "16px", background: "#ffffff", border: "1px solid #e8e8e8", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
    />
  );
}
