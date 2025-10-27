import Link from 'next/link'

export default function MovieCard({ item }) {
  return (
    <Link href={`/watch/${encodeURIComponent(item.id)}`}>
      <a className="block min-w-[150px] max-w-[150px] rounded overflow-hidden shadow-sm mr-3" style={{ background:'#0f1720' }}>
        <div className="h-32 bg-gray-800 flex items-center justify-center text-sm">
          {item.poster ? (
            <img src={item.poster} alt={item.title} className="w-full h-full object-cover" />
          ) : (
            <div className="p-2">{item.title}</div>
          )}
        </div>
        <div className="p-2 text-sm">
          <div className="font-semibold truncate">{item.title}</div>
          <div className="text-xs text-[#9aa4b2]">{item.type}</div>
        </div>
      </a>
    </Link>
  )
}
