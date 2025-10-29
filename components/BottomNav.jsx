import Link from "next/link";
import { useRouter } from "next/router";

export default function BottomNav() {
  const router = useRouter();
  const current = router.pathname;

  const navItems = [
    { name: "Home", path: "/", emoji: "🏠" },
    { name: "Movies", path: "/movies", emoji: "🎬" },
    { name: "Series", path: "/series", emoji: "📺" },
    { name: "Anime", path: "/anime", emoji: "🎌" },
    { name: "Books", path: "/books", emoji: "📚" },
    { name: "Music", path: "/music", emoji: "🎵" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0f1720] border-t border-[#16202b] text-sm flex justify-around py-2">
      {navItems.map((item) => (
        <Link key={item.path} href={item.path}>
          <button
            className={`flex flex-col items-center ${
              current === item.path ? "text-[var(--accent)]" : "text-[#9aa4b2]"
            }`}
          >
            <span className="text-lg">{item.emoji}</span>
            <span>{item.name}</span>
          </button>
        </Link>
      ))}
    </nav>
  );
}
