import { tool } from "ai";
import { z } from "zod";
import { getUser } from "@caltext/db";

export const getUserProfile = tool({
  description: "Get the user's profile including name, calorie target, goals, and preferences.",
  inputSchema: z.object({
    userId: z.string(),
  }),
  execute: async ({ userId }) => {
    return await getUser(userId);
  },
});
