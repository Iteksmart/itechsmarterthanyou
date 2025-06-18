import fs from "fs";
import path from "path";

const secretsPath = path.join(process.cwd(), "secrets.json");

export async function getSecret(key) {
  try {
    const data = JSON.parse(await fs.promises.readFile(secretsPath, "utf8"));
    return data[key];
  } catch {
    return null;
  }
}

export async function setSecret(key, value) {
  let data = {};
  try {
    data = JSON.parse(await fs.promises.readFile(secretsPath, "utf8"));
  } catch {}
  data[key] = value;
  await fs.promises.writeFile(secretsPath, JSON.stringify(data, null, 2));
}
