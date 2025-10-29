import MovieCard from "./MovieCard";

export default function MovieRow({ title, items = [] }) {
  return (
    <section className="mb-6">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <div className="flex overflow-x-auto pb-2">
        {items.length === 0 ? (
          <div className="text-sm text-[#9aa4b2]">No items found</div>
        ) : (
          items.map((i) => <MovieCard key={i.id} item={i} />)
        )}
      </div>
    </section>
  );
}
