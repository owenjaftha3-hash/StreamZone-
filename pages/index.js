import React from "react";

export default function Home() {
  const categories = [
    { title: "🔥 Trending Now", items: ["Movie 1", "Movie 2", "Movie 3"] },
    { title: "🎬 Hollywood", items: ["Avengers", "Spider-Man", "Batman"] },
    { title: "📺 Series", items: ["Loki", "The Boys", "Breaking Bad"] },
    { title: "🎌 Anime", items: ["Naruto", "Attack on Titan", "One Piece"] },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">StreamZone</h1>
      {categories.map((cat, i) => (
        <div key={i} className="mb-8">
          <h2 className="text-xl font-semibold mb-3">{cat.title}</h2>
          <div className="flex gap-3 overflow-x-auto">
            {cat.items.map((item, j) => (
              <div
                key={j}
                className="min-w-[120px] h-[160px] bg-gray-800 rounded-xl flex items-center justify-center text-center hover:bg-gray-700 transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
      <footer className="fixed bottom-0 left-0 right-0 bg-gray-900 py-3 flex justify-around text-sm">
        <span>Movies</span>
        <span>Series</span>
        <span>Anime</span>
        <span>Books</span>
        <span>Music</span>
      </footer>
    </div>
  );
}
