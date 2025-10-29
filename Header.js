import React from "react";

const Header = () => {
  return (
    <header className="bg-black text-white py-4 shadow-md flex justify-between items-center px-6">
      <h1 className="text-2xl font-bold tracking-wide">🎥 CineStream</h1>
      <button
        onClick={() => alert("Debugging system... All systems running smoothly ✅")}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
      >
        Debug System
      </button>
    </header>
  );
};

export default Header;
