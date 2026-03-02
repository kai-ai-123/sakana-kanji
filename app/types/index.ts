export interface KanjiEntry {
  kanji: string;
  variants?: string[];
  kun: string[];
  on: string[];
  meaning: string;
  tsukuri: string[];
  structure: "左右" | "上下";
}
