import MovieList from "./components/MovieList";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <h1 className="text-center text-white text-3xl font-bold py-6">
        StreamZone – Top 3 Movies
      </h1>
      <MovieList />
    </main>
  );
}
