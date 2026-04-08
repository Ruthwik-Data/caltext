import { createCipheriv, createDecipheriv, createHmac } from "node:crypto";
import { env } from "./env.js";

const ALGORITHM = "aes-256-cbc";

function getKey(): Buffer {
  return Buffer.from(env.ENCRYPTION_KEY, "hex");
}

function deriveIv(plaintext: string): Buffer {
  return createHmac("sha256", getKey())
    .update(plaintext)
    .digest()
    .subarray(0, 16);
}

export function encrypt(plaintext: string): string {
  const key = getKey();
  const iv = deriveIv(plaintext);
  const cipher = createCipheriv(ALGORITHM, key, iv);
  const encrypted = Buffer.concat([
    iv,
    cipher.update(plaintext, "utf8"),
    cipher.final(),
  ]);
  return encrypted.toString("base64url");
}

export function decrypt(token: string): string {
  const key = getKey();
  const raw = Buffer.from(token, "base64url");
  const iv = raw.subarray(0, 16);
  const ciphertext = raw.subarray(16);
  const decipher = createDecipheriv(ALGORITHM, key, iv);
  return decipher.update(ciphertext) + decipher.final("utf8");
}
