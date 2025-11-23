import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// --- Middleware ---
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // serves index.html, css, js

// --- OpenAI client ---
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// --- Chat endpoint ---
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required." });
    }

    // Call OpenAI
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini", // change if you want a different model
      messages: [
        {
          role: "system",
          content:
            "You are Eric, an internal chatbot for Alex. You are concise, friendly, and helpful. Use clear, direct answers.",
        },
        { role: "user", content: message },
      ],
      temperature: 0.6,
      max_tokens: 500,
    });

    const reply = completion.choices[0]?.message?.content?.trim() || "…";

    res.json({ reply });
  } catch (err) {
    console.error("Error in /chat:", err);
    res.status(500).json({
      error:
        "Eric ran into a problem reaching the AI backend. If this is hosted on a free tier, it may have gone to sleep—try again in a moment.",
    });
  }
});

// Healthcheck route (helps avoid “inactive crash” during pings)
app.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Eric is listening on http://localhost:${port}`);
});
