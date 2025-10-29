import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(query);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 mb-4"
    >
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies, series, anime..."
        className="p-2 rounded bg-[#07111a] border border-[#16202b] w-full"
      />
      <button
        type="submit"
        className="px-3 py-2 rounded"
        style={{ background: "var(--accent)", color: "#001" }}
      >
        Search
      </button>
    </form>
  );
}
