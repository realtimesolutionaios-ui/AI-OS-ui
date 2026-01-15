export default function Home() {
  async function testDify() {
    const res = await fetch("/api/dify", { method: "POST" });
    const text = await res.text();
    alert(text);
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>AI-OS UI（商品版プロトタイプ）</h1>
      <p>Difyを中核とした「診断 → 判断 → アクション」を統合するAI OS UI</p>

      <button onClick={testDify}>
        Difyに問い合わせる
      </button>
    </main>
  );
}
