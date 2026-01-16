import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // いまはテスト用の固定レスポンス
    res.status(200).send("✅ Dify API に正常に接続できました（テスト）");
  } catch (error) {
    res.status(500).send("❌ Dify API エラー");
  }
}
