import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-900 text-white rounded-2xl shadow-lg p-3 hover:scale-105 transition-transform duration-200">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-48 object-cover rounded-lg mb-3"
      />
      <h3 className="text-lg font-bold mb-1">{movie.title}</h3>
      <p className="text-sm text-gray-400 mb-2">{movie.genre}</p>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full"
        onClick={() => alert(`Playing ${movie.title}...`)}
      >
        Watch Now
      </button>
    </div>
  );
};

export default MovieCard;
