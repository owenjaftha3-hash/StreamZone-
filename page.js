// app/page.js
import React from "react";

export default function Page() {
  return (
    <main style={{ textAlign: "center", padding: "20px" }}>
      <h1>🎬 StreamZone – Top 3 Movies</h1>

      <div style={{ marginTop: "30px" }}>
        <img src="/matrix.jpg" alt="The Matrix" width="150" />
        <p>The Matrix</p>
        <button>Watch</button>
        <button onClick={() => navigator.clipboard.writeText("The Matrix")}>
          Copy Name
        </button>
      </div>

      <div style={{ marginTop: "30px" }}>
        <img src="/johnwick.jpg" alt="John Wick" width="150" />
        <p>John Wick</p>
        <button>Watch</button>
        <button onClick={() => navigator.clipboard.writeText("John Wick")}>
          Copy Name
        </button>
      </div>
    </main>
  );
}
