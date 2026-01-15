import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(
      `${process.env.DIFY_BASE_URL}/chat-messages`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.DIFY_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: {},
          query: "AI-OS UI からのテスト問い合わせ",
          response_mode: "blocking",
          user: "ai-os-ui",
        }),
      }
    );

    const data = await response.json();
    res.status(200).send(data.answer ?? JSON.stringify(data));
  } catch (error) {
    res.status(500).send("Dify API error");
  }
}
