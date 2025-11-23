// server.js (CommonJS version)

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve the frontend
app.use(express.static("public"));

// OpenAI client
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Chat endpoint
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required." });
    }

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini", // change to another model if you want
      messages: [
        {
          role: "system",
          content:
            "You are Eric, an internal chatbot for Alex at GASCU. Be concise, friendly, and clear.",
        },
        { role: "user", content: message },
      ],
      temperature: 0.6,
      max_tokens: 500,
    });

    const reply =
      completion.choices?.[0]?.message?.content?.trim() ||
      "Sorry, I couldn't think of a response.";

    res.json({ reply });
  } catch (err) {
    console.error("Error in /chat:", err);
    res.status(500).json({
      error:
        "Eric ran into a problem reaching the AI backend. Try again in a moment.",
    });
  }
});

// Simple healthcheck (optional)
app.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Eric is listening on http://localhost:${port}`);
});
