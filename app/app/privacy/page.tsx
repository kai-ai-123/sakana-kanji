import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 魚へん漢字帳",
  description: "魚へん漢字帳のプライバシーポリシーです。",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen" style={{ background: "#f9fafb" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <Link href="/" className="text-sm mb-8 inline-block" style={{ color: "#0088AA" }}>
          ← トップへ戻る
        </Link>
        <h1 className="text-2xl font-black mb-8" style={{ color: "#0088AA" }}>プライバシーポリシー</h1>

        <div className="space-y-8 text-sm leading-relaxed" style={{ color: "#374151" }}>
          <section>
            <h2 className="font-bold text-base mb-2">広告の配信について</h2>
            <p>
              当サイトは、Google LLC の提供する広告サービス「Google AdSense」を利用しています。
              Google AdSense は、ユーザーの興味に応じた広告を配信するために Cookie を使用します。
              Cookie を無効にする方法や Google AdSense に関する詳細は、
              <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#0088AA" }}>
                Google のポリシーと規約
              </a>
              をご確認ください。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-base mb-2">アクセス解析ツールについて</h2>
            <p>
              当サイトは、Google LLC の提供するアクセス解析サービス「Google Analytics」を利用しています。
              Google Analytics は Cookie を使用してトラフィックデータを収集します。
              収集されるデータは匿名であり、個人を特定するものではありません。
              詳細は
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#0088AA" }}>
                Google プライバシーポリシー
              </a>
              をご確認ください。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-base mb-2">Cookie について</h2>
            <p>
              当サイトでは、広告配信やアクセス解析のために Cookie を使用しています。
              ブラウザの設定から Cookie を無効にすることができますが、一部機能が利用できなくなる場合があります。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-base mb-2">免責事項</h2>
            <p>
              当サイトに掲載している情報は正確性に努めていますが、内容の完全性・正確性を保証するものではありません。
              当サイトの情報を利用したことによる損害について、運営者は責任を負いかねます。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-base mb-2">お問い合わせ</h2>
            <p>
              プライバシーポリシーに関するお問い合わせは、
              <a href="/contact" className="underline" style={{ color: "#0088AA" }}>
                お問い合わせページ
              </a>
              よりご連絡ください。
            </p>
          </section>

          <p className="text-xs" style={{ color: "#9ca3af" }}>制定日：2025年3月</p>
        </div>
      </div>
    </main>
  );
}
