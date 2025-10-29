import React from "react";
import MovieGrid from "./MovieGrid";

function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <header className="text-center py-6 bg-gray-900 shadow-lg">
        <h1 className="text-3xl font-bold text-red-500">🎬 CineStream</h1>
        <p className="text-gray-300">Watch Free Movies Anytime</p>
      </header>
      <main className="p-6">
        <MovieGrid />
      </main>
      <footer className="text-center text-gray-400 py-4 border-t border-gray-800">
        <p>© 2025 CineStream | Stream Smarter, Not Harder</p>
      </footer>
    </div>
  );
}

export default App;
