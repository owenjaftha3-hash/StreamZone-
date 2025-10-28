import MovieList from "../components/MovieList";

export default function Home() {
  return (
    <main className="min-h-screen p-4 bg-black text-white">
      <h1 className="text-3xl font-bold text-center mt-8">🎬 StreamZone</h1>
      <MovieList />
    </main>
  );
}
