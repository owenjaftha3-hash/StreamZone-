import Link from "next/link";

export default function NavBar() {
  return (
    <header className="p-4 border-b border-[#112026] bg-[var(--bg)]">
      <div className="flex items-center justify-between max-w-5xl mx-auto">
        <Link href="/">
          <h1 className="text-2xl font-bold cursor-pointer">StreamZone</h1>
        </Link>

        <div className="flex items-center gap-3">
          <Link href="/download">
            <button className="px-3 py-1 rounded bg-[#0f1720] text-[#9aa4b2]">
              Download App
            </button>
          </Link>

          <Link href="/auth">
            <button className="px-3 py-1 rounded bg-[#16202b] text-white">
              Sign In
            </button>
          </Link>

          <Link href="/profile">
            <button
              className="px-3 py-1 rounded"
              style={{ background: "var(--accent)", color: "#001" }}
            >
              Profile
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
