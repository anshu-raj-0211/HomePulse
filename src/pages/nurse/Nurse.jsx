import { useState } from "react";

import ChatHeader from "../../components/nurse/ChatHeader";
import ChatMessage from "../../components/nurse/ChatMessage";
import ChatInput from "../../components/nurse/ChatInput";
import SuggestionCard from "../../components/nurse/SuggestionCard";

function Nurse() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      message:
        "👋 Hello! I'm your AI Health Companion. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");

  const suggestions = [
    "💊 Explain this medicine",
    "🤒 I have a fever",
    "🤕 I have a headache",
    "🥗 Healthy diet tips",
  ];

  const getBotReply = (text) => {
    const msg = text.toLowerCase();

    if (msg.includes("fever")) {
      return "A fever can have many causes. Stay hydrated, monitor your temperature, and consult a healthcare professional if it is high or persistent.";
    }

    if (msg.includes("headache")) {
      return "Headaches can occur due to stress, dehydration, lack of sleep, or illness. Drink water, rest, and seek medical advice if the pain is severe or unusual.";
    }

    if (msg.includes("diet")) {
      return "A balanced diet includes fruits, vegetables, whole grains, lean protein, and adequate water. Try to avoid excessive processed foods.";
    }

    if (msg.includes("medicine")) {
      return "Please tell me the medicine name, and I'll explain its common uses and general precautions.";
    }

    return "I understand your question. In the next version, I'll use Gemini AI to provide smarter and more personalized responses.";
  };

  const sendMessage = (text = input) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      message: text,
    };

    const botMessage = {
      id: Date.now() + 1,
      sender: "bot",
      message: getBotReply(text),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">

      <ChatHeader />

      <div className="mt-6 space-y-4">

        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            sender={message.sender}
            message={message.message}
          />
        ))}

      </div>

      <div className="mt-8">

        <h2 className="text-lg font-semibold mb-4">
          Quick Questions
        </h2>

        <div className="grid gap-3">

          {suggestions.map((item) => (
            <SuggestionCard
              key={item}
              text={item}
              onClick={sendMessage}
            />
          ))}

        </div>

      </div>

      <ChatInput
        value={input}
        onChange={setInput}
        onSend={() => sendMessage()}
      />

    </main>
  );
}

export default Nurse;