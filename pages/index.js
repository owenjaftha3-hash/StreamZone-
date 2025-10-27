import { useState } from "react";

export default function Home() {
  const [debugMessage, setDebugMessage] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  // Simulate debug scan
  const handleDebug = () => {
    setDebugMessage("🔍 Scanning system for issues...");
    setTimeout(() => {
      setDebugMessage("✅ All systems running smoothly!");
    }, 2000);
  };

  // Simulate AI assistant help
  const handleAiHelp = () => {
    setAiResponse("🤖 Hello! I’m your AI Assistant. How can I help you today?");
  };

  // Example movies fetched from your API (mock for now)
  const movies = [
    { title: "Avengers", category: "Hollywood" },
    { title: "Spider-Man", category: "Hollywood" },
    { title: "Loki", category: "Series" },
    { title: "Naruto", category: "Anime" },
  ];

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px", textAlign: "center" }}>
      <h1>🎬 StreamZone Dashboard</h1>
      <p>Welcome to your admin control panel.</p>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={handleDebug}
          style={{
            margin: "10px",
            padding: "10px 20px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "8px",
          }}
        >
          🧠 Debug System
        </button>

        <button
          onClick={handleAiHelp}
          style={{
            margin: "10px",
            padding: "10px 20px",
            backgroundColor: "#10b981",
            color: "white",
            border: "none",
            borderRadius: "8px",
          }}
        >
          🤖 AI Assistant
        </button>
      </div>

      {debugMessage && <p>{debugMessage}</p>}
      {aiResponse && <p>{aiResponse}</p>}

      <h2 style={{ marginTop: "40px" }}>🎞️ Movie Categories</h2>
      {movies.map((movie, index) => (
        <p key={index}>
          <b>{movie.category}:</b> {movie.title}
        </p>
      ))}
    </div>
  );
}
