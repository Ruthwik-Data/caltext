import { describe, expect, test, vi } from "vitest";

const { mockRedis } = vi.hoisted(() => {
  const store: Record<string, string> = {};

  const mockRedis = {
    set: vi.fn((key: string, value: string) => {
      store[key] = value;
      return Promise.resolve("OK");
    }),
    get: vi.fn((key: string) => {
      return Promise.resolve(store[key] ?? null);
    }),
    del: vi.fn((key: string) => {
      delete store[key];
      return Promise.resolve(1);
    }),
  };

  return { mockRedis };
});

vi.mock("../client", () => ({
  getRedis: () => mockRedis,
}));

vi.mock("@caltext/shared", () => ({
  env: {},
  encryptContent: async (s: string) => `enc:${s}`,
  decrypt: async (s: string) => {
    if (!s.startsWith("enc:")) throw new Error("bad ciphertext");
    return s.slice(4);
  },
}));

const { saveConversationMessages, getConversationMessages, deleteAllMessages } = await import(
  "../messages"
);

describe("conversation messages", () => {
  test("saves and retrieves ModelMessage array", async () => {
    const messages = [
      { role: "user", content: "I had a salad" },
      { role: "assistant", content: "Nice lunch! 🥗 About 350 kcal." },
    ];
    await saveConversationMessages("usr_test", messages);
    const loaded = await getConversationMessages("usr_test");
    expect(loaded).toEqual(messages);
  });

  test("preserves tool call messages", async () => {
    const messages = [
      { role: "user", content: "I had a salad" },
      {
        role: "assistant",
        content: [
          {
            type: "tool-call",
            toolCallId: "tc_1",
            toolName: "lookupNutrition",
            args: { foodName: "salad" },
          },
        ],
      },
      {
        role: "tool",
        content: [
          {
            type: "tool-result",
            toolCallId: "tc_1",
            toolName: "lookupNutrition",
            output: { calories: 150 },
          },
        ],
      },
      { role: "assistant", content: "That salad has about 150 kcal." },
    ];
    await saveConversationMessages("usr_test2", messages);
    const loaded = await getConversationMessages("usr_test2");
    expect(loaded).toEqual(messages);
    expect(loaded).toHaveLength(4);
  });

  test("returns empty array for unknown user", async () => {
    const messages = await getConversationMessages("usr_unknown");
    expect(messages).toEqual([]);
  });

  test("deleteAllMessages clears conversation", async () => {
    await saveConversationMessages("usr_del", [{ role: "user", content: "hello" }]);
    await deleteAllMessages("usr_del");
    const loaded = await getConversationMessages("usr_del");
    expect(loaded).toEqual([]);
  });
});
