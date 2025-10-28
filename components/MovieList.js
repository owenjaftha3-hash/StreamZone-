import React from "react";

export default function MovieList() {
  return (
    <div>
      <h1>StreamZone – Top 3 Movies</h1>

      <div>
        <img src="/matrix.jpg" alt="The Matrix" width="150" />
        <p>The Matrix</p>
        <button>Watch</button>
        <button>Copy Name</button>
      </div>

      <div>
        <img src="/johnwick.jpg" alt="John Wick" width="150" />
        <p>John Wick</p>
        <button>Watch</button>
        <button>Copy Name</button>
      </div>
    </div>
  );
}
