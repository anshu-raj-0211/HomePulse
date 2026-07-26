import { useState } from "react";
import { askGemini } from "../services/geminiService";

function useGeminiChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "👋 Hello! I'm your HomePulse AI Nurse. How can I help you today?",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    const reply = await askGemini(text);

    const aiMessage = {
      id: Date.now() + 1,
      sender: "ai",
      text: reply,
    };

    setMessages((prev) => [...prev, aiMessage]);

    setLoading(false);
  };

  return {
    messages,
    loading,
    sendMessage,
  };
}

export default useGeminiChat;