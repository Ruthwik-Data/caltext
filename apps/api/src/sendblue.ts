import { env } from "@caltext/shared";

const BASE = "https://api.sendblue.com/api";
const headers = {
  "Content-Type": "application/json",
  "sb-api-key-id": env.SENDBLUE_API_KEY,
  "sb-api-secret-key": env.SENDBLUE_API_SECRET,
};

async function sbPost(path: string, body: Record<string, unknown>): Promise<void> {
  const res = await fetch(`${BASE}${path}`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Sendblue ${path} ${res.status}: ${text}`);
  }
}

// ── Webhook parsing ─────────────────────────────────────

export interface InboundMessage {
  phone: string;
  text: string;
  imageUrl: string | undefined;
  messageId: string | undefined;
}

const SECRET_HEADERS = ["x-webhook-secret", "x-sendblue-signature", "sb-webhook-secret"];

export function parseInbound(headers: Headers, body: unknown): InboundMessage | null {
  const secret = SECRET_HEADERS.reduce<string | null>((v, h) => v ?? headers.get(h), null);
  if (secret && secret !== env.SENDBLUE_WEBHOOK_SECRET) return null;

  const b = body as Record<string, unknown>;
  if (b.is_outbound || b.status !== "RECEIVED") return null;

  const phone = b.number as string | undefined;
  if (!phone) return null;

  const text = (b.content as string) ?? "";
  const imageUrl = (b.media_url as string) || undefined;
  if (!text && !imageUrl) return null;

  return { phone, text, imageUrl, messageId: b.message_handle as string | undefined };
}

// ── Outbound API calls ─────────────────────────────────

export async function sendMessage(phone: string, text: string): Promise<void> {
  await sbPost("/send-message", {
    number: phone,
    from_number: env.SENDBLUE_FROM_NUMBER,
    content: text,
  });
}

export async function sendTyping(phone: string): Promise<void> {
  try {
    await sbPost("/send-typing-indicator", {
      number: phone,
      from_number: env.SENDBLUE_FROM_NUMBER,
    });
  } catch {
    // not critical
  }
}

export async function markRead(phone: string): Promise<void> {
  try {
    await sbPost("/mark-read", {
      number: phone,
      from_number: env.SENDBLUE_FROM_NUMBER,
    });
  } catch {
    // not critical
  }
}
