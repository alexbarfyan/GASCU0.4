// server.js - minimal echo server for Eric

const path = require("path");
const express = require("express");

const app = express();
const port = 3000;

// Parse JSON request bodies
app.use(express.json());

// Serve static files from /public
app.use(express.static(path.join(__dirname, "public")));

// Minimal /chat endpoint that just echoes your message
app.post("/chat", (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "Message is required." });
  }

  console.log("Received from browser:", message);

  // For now, just echo back. We'll plug OpenAI in later.
  res.json({ reply: "Eric (test): I heard you say → " + message });
});

// Start server
app.listen(port, () => {
  console.log(`Eric test server running at http://localhost:${port}`);
});
