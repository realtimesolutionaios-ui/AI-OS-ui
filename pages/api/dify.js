export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  // まずは「404が消えてAPIが生きてるか」確認するための固定レスポンス
  return res.status(200).send("✅ /api/dify は動作しています");
}
