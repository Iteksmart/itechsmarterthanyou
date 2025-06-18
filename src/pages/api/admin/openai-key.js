import { getSecret, setSecret } from "@/lib/secretStore";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const key = await getSecret("OPENAI_API_KEY");
    return res.status(200).json({ key: key ? "••••••••" : "" });
  }
  if (req.method === "POST") {
    const { key } = req.body;
    await setSecret("OPENAI_API_KEY", key);
    return res.status(200).end();
  }
  res.setHeader("Allow", ["GET","POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
