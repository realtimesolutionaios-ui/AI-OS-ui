import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // テスト用の固定レスポンス
  return res
    .status(200)
    .send("✅ Dify API に正常に接続できました（Next.js API テスト）");
}
