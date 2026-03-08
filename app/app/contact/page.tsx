import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "お問い合わせ | 魚へん漢字帳",
  description: "魚へん漢字帳へのお問い合わせはこちらから。",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen" style={{ background: "#f9fafb" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <Link href="/" className="text-sm mb-8 inline-block" style={{ color: "#0088AA" }}>
          ← トップへ戻る
        </Link>
        <h1 className="text-2xl font-black mb-4" style={{ color: "#0088AA" }}>お問い合わせ</h1>
        <p className="text-sm mb-8 leading-relaxed" style={{ color: "#374151" }}>
          ご意見・ご要望・誤りのご指摘などは、X（Twitter）のDMまたは返信にてご連絡ください。
        </p>
        <a
          href="https://x.com/kai_ai_123"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white text-sm"
          style={{ background: "#0088AA" }}
        >
          X（@kai_ai_123）で連絡する
        </a>
      </div>
    </main>
  );
}
