export default function MovieList() {
  const movies = [
    { title: "Naruto", type: "Anime" },
    { title: "Inception", type: "Movie" },
    { title: "Breaking Bad", type: "Series" },
  ];

  return (
    <section className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Trending Now</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition"
          >
            <p className="font-medium">{movie.title}</p>
            <p className="text-sm text-gray-400">{movie.type}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
