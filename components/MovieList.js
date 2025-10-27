export default function MovieList() {
  const movies = [
    {
      title: "Inception",
      year: 2010,
      image: "https://m.media-amazon.com/images/I/51s+NniMzIL._AC_.jpg",
    },
    {
      title: "Avatar: The Way of Water",
      year: 2022,
      image: "https://m.media-amazon.com/images/I/71oCMR3vYpL._AC_SY679_.jpg",
    },
    {
      title: "Spider-Man: Across the Spider-Verse",
      year: 2023,
      image: "https://m.media-amazon.com/images/I/81n9u9dIFkL._AC_SY679_.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
      {movies.map((movie) => (
        <div key={movie.title} className="bg-gray-900 p-4 rounded-2xl shadow-lg text-center text-white">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-64 object-cover rounded-xl mb-3"
          />
          <h2 className="text-xl font-semibold">{movie.title}</h2>
          <p className="text-gray-400">{movie.year}</p>
          <button className="mt-3 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
            Watch Now
          </button>
        </div>
      ))}
    </div>
  );
}
