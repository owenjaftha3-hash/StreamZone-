import React, { useState } from "react";

const AIAssistant = () => {
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newChat = [...chat, { sender: "user", text: input }];

    // Simple AI simulation
    let reply = "I'm your CineStream assistant! How can I help? 😊";
    if (input.toLowerCase().includes("error")) reply = "Try refreshing the page or clearing cache.";
    if (input.toLowerCase().includes("movie")) reply = "All movies are updated automatically.";
    if (input.toLowerCase().includes("debug")) reply = "System check complete ✅ No issues found.";

    setChat([...newChat, { sender: "ai", text: reply }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-2xl w-80 shadow-xl">
      <h2 className="font-bold text-lg mb-2">🤖 CineStream Assistant</h2>
      <div className="h-40 overflow-y-auto mb-2 border border-gray-700 rounded p-2 bg-gray-900">
        {chat.map((msg, i) => (
          <div key={i} className={msg.sender === "ai" ? "text-green-400" : "text-blue-400"}>
            <b>{msg.sender === "ai" ? "AI:" : "You:"}</b> {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 rounded bg-gray-700 text-white outline-none"
          placeholder="Ask something..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AIAssistant;
