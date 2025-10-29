import { useEffect, useState } from "react";
import MovieRow from "../components/MovieRow";
import SearchBar from "../components/SearchBar";
import { supabase } from "../lib/supabaseClient";

export default function Home() {
  const [trending, setTrending] = useState([]);
  const [hollywood, setHollywood] = useState([]);
  const [series, setSeries] = useState([]);
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const { data, error } = await supabase
      .from("content")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(200);

    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    const items = data || [];
    setTrending(items.slice(0, 8));
    setHollywood(items.filter(i => (i.categories || []).includes("Hollywood")).slice(0, 8));
    setSeries(items.filter(i => (i.type === "episode" || (i.categories || []).includes("Series"))).slice(0, 8));
    setAnime(items.filter(i => (i.categories || []).includes("Anime")).slice(0, 8));
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function onSearch(q) {
    if (!q) return load();
    setLoading(true);
    const { data } = await supabase
      .from("content")
      .select("*")
      .ilike("title", `%${q}%`)
      .limit(50);
    setTrending(data || []);
    setHollywood([]);
    setSeries([]);
    setAnime([]);
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] p-4">
      <h1 className="text-3xl font-bold mb-4">StreamZone</h1>
      <SearchBar onSearch={onSearch} />
      {loading ? (
        <div className="text-sm text-[#9aa4b2]">Loading...</div>
      ) : (
        <>
          <MovieRow title="🔥 Trending Now" items={trending} />
          <MovieRow title="🎬 Hollywood" items={hollywood} />
          <MovieRow title="📺 Series" items={series} />
          <MovieRow title="🎌 Anime" items={anime} />
        </>
      )}
    </div>
  );
}
