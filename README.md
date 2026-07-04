# Caltext

iMessage calorie tracking assistant powered by AI.

## Stack

- **Runtime**: Node + Turborepo monorepo (npm)
- **API**: Hono on Nitro (deployed to Vercel via the Build Output API)
- **iMessage**: Chat SDK + Sendblue adapter
- **AI**: AI SDK v6 + GPT-4.1 (vision + agent)
- **Database**: Upstash Redis
- **Workflows**: Vercel Workflow SDK for durable pipelines
- **Nutrition**: GPT-4.1 estimates, tagged with a source label (AI estimate / packaged label)

## Setup

### 1. Install dependencies

```bash
npm install --legacy-peer-deps
```

### 2. Configure environment

```bash
cp .env.example .env
```

Fill in the required keys:

| Variable | Source |
|---|---|
| `SENDBLUE_API_KEY` / `SENDBLUE_API_SECRET` | [sendblue.co](https://sendblue.co) |
| `SENDBLUE_FROM_NUMBER` | Your Sendblue phone number |
| `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` | [console.upstash.com](https://console.upstash.com) |
| `REDIS_URL` | Same Upstash Redis in `redis://` format |
| `OPENAI_API_KEY` | [platform.openai.com](https://platform.openai.com) |
| `ENCRYPTION_KEY` | 64-char hex, generate with `openssl rand -hex 32` |

### 3. Run locally

```bash
npm run dev
```

### 4. Deploy to Vercel

The API uses Nitro's `vercel` preset, which emits Vercel's Build Output API to `apps/api/.vercel/output`. Build locally, then deploy the prebuilt output:

```bash
npm run build --workspace=@caltext/api
cd apps/api && vercel deploy --prebuilt
```

> The webhook endpoint must be publicly reachable, so disable Vercel Deployment Protection for the project (the app authenticates callers via `SENDBLUE_WEBHOOK_SECRET`).

### 5. Set Sendblue webhook

Point your Sendblue incoming message webhook to:

```
https://your-app.vercel.app/webhooks/sendblue
```

## Project Structure

```
caltext/
  apps/
    api/                  # Hono API server
      src/
        index.ts          # Routes + webhook handler
        bot.ts            # Chat SDK singleton
        router.ts         # Onboarding vs assistant routing
      workflows/
        handle-message.ts # Main message handler
        onboarding.ts     # Multi-step onboarding
        reminder-loop.ts  # Daily reminders + summaries
  packages/
    ai/                   # AI agent + tools
    db/                   # Upstash Redis data layer
    shared/               # Types, locale, timezone utils
```

## How It Works

1. User texts the Caltext number via iMessage
2. Sendblue forwards the message via webhook
3. New users go through conversational onboarding (name, stats, goal)
4. Returning users interact with the AI assistant
5. Photos are analyzed with GPT-4.1 vision, which estimates each item's portion and nutrition with a confidence score
6. Text descriptions are estimated the same way, tagged with a source label (AI estimate / packaged label)
7. Daily reminders at breakfast/lunch/dinner times (timezone-aware)
8. End-of-day summaries with calorie/macro breakdown
9. Weekly recaps with progress bars and trends

## Recent Improvements (2026-06-08)

### 1. Confidence Scoring
- Food identification now includes **0-100 confidence scores** per item
- Users see exactly how certain the AI is: "94% confident" for clear items, "60% confident" for ambiguous ones
- Low confidence items are flagged with notes: "Not 100% sure on that one — let me know if the portion's off"

### 2. Supportive Tone + Trust Signals
- Changed personality from "chill and minimal" → **"expert + supportive coach"**
- Responses now include trust cues and transparent reasoning
- When users are over target: facts without shame ("You're at 1,850 / 2,329 kcal. That happens — keep going")
- New CTA: "Looks good? Or adjust portion." (vs old "Log it?")

### 3. Personalized Suggestions
- After logging meals, users get **1 smart suggestion** based on their eating patterns
- Example: "Your breakfasts are usually high carb. Try adding protein next time — eggs or Greek yogurt work great."
- Only shown when a pattern is detected (not just generic advice)
- Analyzed from last 3 meals today

### 4. Source Attribution
- Food data now shows where it came from: "USDA database", "AI estimate", "packaged label"
- Builds transparency and trust in the data

**Impact:** Users feel more confident in the tracking, trust the AI more, and get personalized guidance to improve their habits.
