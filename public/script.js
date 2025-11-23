const chatLog = document.getElementById("chat-log");
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Adds a message bubble to the chat window
function addMessage(text, sender) {
  const wrapper = document.createElement("div");
  wrapper.className = `message ${sender}`;

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;

  wrapper.appendChild(bubble);
  chatLog.appendChild(wrapper);
  chatLog.scrollTop = chatLog.scrollHeight;
}

async function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  // Show user's message
  addMessage(text, "user");
  input.value = "";
  input.focus();

  // Show temporary "Eric is thinking..."
  const thinkingMessage = document.createElement("div");
  thinkingMessage.className = "message eric";
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = "Eric is thinking…";
  thinkingMessage.appendChild(bubble);
  chatLog.appendChild(thinkingMessage);
  chatLog.scrollTop = chatLog.scrollHeight;

  sendBtn.disabled = true;

  try {
    const res = await fetch("/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: text }),
    });

    if (!res.ok) {
      const errorBody = await res.json().catch(() => ({}));
      throw new Error(errorBody.error || `Request failed with ${res.status}`);
    }

    const data = await res.json();

    // Replace the "thinking" bubble with actual response
    thinkingMessage.remove();
    addMessage(data.reply || "I couldn't think of a response.", "eric");
  } catch (err) {
    console.error(err);
    thinkingMessage.remove();
    addMessage(
      "Sorry, I couldn't reach the backend. If this is hosted on a free service, it might have gone idle—try again in a moment.",
      "eric"
    );
  } finally {
    sendBtn.disabled = false;
  }
}

// Button click
sendBtn.addEventListener("click", sendMessage);

// Enter/Shift+Enter handling
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});
