*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  background: radial-gradient(circle at top, #e0f2fe, #0f172a);
  color: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.app {
  background: rgba(15, 23, 42, 0.93);
  color: #e5e7eb;
  width: 100%;
  max-width: 900px;
  height: 90vh;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(18px);
}

.header {
  padding: 16px 24px;
  border-bottom: 1px solid rgba(148, 163, 184, 0.35);
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.title {
  font-size: 1.4rem;
  font-weight: 700;
}

.subtitle {
  font-size: 0.9rem;
  color: #9ca3af;
}

.chat-container {
  flex: 1;
  padding: 16px 24px;
  overflow-y: auto;
}

.chat-log {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Messages */
.message {
  display: flex;
  max-width: 80%;
}

.message.user {
  margin-left: auto;
  justify-content: flex-end;
}

.message.eric {
  margin-right: auto;
  justify-content: flex-start;
}

.bubble {
  padding: 10px 14px;
  border-radius: 18px;
  font-size: 0.95rem;
  line-height: 1.4;
  white-space: pre-wrap;
}

.message.user .bubble {
  background: linear-gradient(135deg, #38bdf8, #0ea5e9);
  color: #0f172a;
  border-bottom-right-radius: 4px;
}

.message.eric .bubble {
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.6);
  border-bottom-left-radius: 4px;
}

/* Input area */
.input-container {
  border-top: 1px solid rgba(148, 163, 184, 0.35);
  padding: 12px 16px;
  display: flex;
  gap: 8px;
  background: rgba(15, 23, 42, 0.96);
}

#user-input {
  flex: 1;
  resize: none;
  border-radius: 16px;
  border: 1px solid rgba(148, 163, 184, 0.6);
  padding: 10px 12px;
  font-size: 0.95rem;
  background: rgba(15, 23, 42, 0.95);
  color: #e5e7eb;
  outline: none;
}

#user-input::placeholder {
  color: #6b7280;
}

#user-input:focus {
  border-color: #38bdf8;
}

#send-btn {
  border: none;
  border-radius: 999px;
  padding: 0 18px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: #022c22;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  transition: transform 0.08s ease, box-shadow 0.08s ease,
    filter 0.08s ease;
}

#send-btn:disabled {
  opacity: 0.6;
  cursor: default;
  filter: grayscale(0.3);
}

#send-btn:not(:disabled):hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(34, 197, 94, 0.45);
}

#send-btn:not(:disabled):active {
  transform: translateY(0);
  box-shadow: none;
}

/* Mobile tweaks */
@media (max-width: 640px) {
  .app {
    height: 100vh;
    border-radius: 0;
  }

  .chat-container {
    padding: 12px 10px;
  }

  .message {
    max-width: 100%;
  }
}
