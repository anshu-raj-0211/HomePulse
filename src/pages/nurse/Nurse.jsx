import { useEffect, useRef } from "react";

import useGeminiChat from "../../hooks/useGeminiChat";

import ChatHeader from "../../components/nurse/ChatHeader";
import ChatMessage from "../../components/nurse/ChatMessage";
import ChatInput from "../../components/nurse/ChatInput";

function Nurse() {
  const {
    messages,
    loading,
    sendMessage,
  } = useGeminiChat();

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <main className="bg-slate-950 flex flex-col h-[calc(100vh-80px)]">

      <ChatHeader />

      <div className="flex-1 overflow-y-auto px-4 py-6">

        <div className="max-w-4xl mx-auto space-y-4">

          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
            />
          ))}

          {loading && (
            <div className="bg-slate-800 text-slate-300 w-fit px-4 py-3 rounded-2xl animate-pulse">
              AI Nurse is typing...
            </div>
          )}

          <div ref={bottomRef} />

        </div>

      </div>

      <div className="border-t border-slate-800">
        <ChatInput
          onSend={sendMessage}
          disabled={loading}
        />
      </div>

    </main>
  );
}

export default Nurse;