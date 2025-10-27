// components/MovieList.js
import React from "react";

const movies = [
  {
    name: "The Matrix",
    image: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
    link: "https://archive.org/details/TheMatrix1999",
  },
  {
    name: "John Wick",
    image: "https://m.media-amazon.com/images/I/71vN6L5lTFL._AC_SL1500_.jpg",
    link: "https://archive.org/details/JohnWick2014",
  },
  {
    name: "Avengers: Endgame",
    image: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg",
    link: "https://archive.org/details/AvengersEndgame2019",
  },
];

export default function MovieList() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied "${text}" to clipboard`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {movies.map((movie) => (
        <div
          key={movie.name}
          className="bg-gray-800 text-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
        >
          <img src={movie.image} alt={movie.name} className="w-full h-64 object-cover" />
          <div className="p-4 text-center">
            <h2 className="text-lg font-semibold mb-2">{movie.name}</h2>
            <div className="flex justify-center gap-2">
              <button
                onClick={() => window.open(movie.link, "_blank")}
                className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Watch
              </button>
              <button
                onClick={() => copyToClipboard(movie.name)}
                className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600"
              >
                Copy Name
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
