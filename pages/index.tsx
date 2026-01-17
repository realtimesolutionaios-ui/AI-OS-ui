import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState("結果がここに表示されます");

  async function testDify() {
    setResult("Dify に問い合わせ中...");

    try {
      const res = await fetch("/api/dify", {
        method: "POST",
      });

      const text = await res.text();
      setResult(text);
    } catch (e) {
      setResult("❌ Dify に接続できませんでした");
    }
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>AI-OS UI（商品版プロトタイプ）</h1>
      <p>
        Difyを中核とした「診断 → 判断 → アクション」を統合する
        次世代AIオペレーティングUI。
      </p>

      <section style={{ marginTop: 40 }}>
        <h2>Dify 接続テスト</h2>
        <p>下のボタンを押すと、Dify API にリクエストを送信します。</p>

        <button onClick={testDify}>
          Dify に問い合わせる
        </button>

        <div style={{ marginTop: 20 }}>
          {result}
        </div>
      </section>
    </main>
  );
}
