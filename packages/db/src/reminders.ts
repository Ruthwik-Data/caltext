import { getRedis } from "./client.js";

const reminderKey = (userId: string) => `reminder:${userId}`;

export async function setReminderRunId(userId: string, runId: string): Promise<void> {
  const redis = getRedis();
  await redis.set(reminderKey(userId), runId);
}

export async function getReminderRunId(userId: string): Promise<string | null> {
  const redis = getRedis();
  return await redis.get<string>(reminderKey(userId));
}

export async function deleteReminderRunId(userId: string): Promise<void> {
  const redis = getRedis();
  await redis.del(reminderKey(userId));
}
