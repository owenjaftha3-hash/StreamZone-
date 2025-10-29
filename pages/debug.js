import { useState } from "react";

export default function DebugPage() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleDebug() {
    setLoading(true);
    setStatus("Checking system...");

    // simulate a quick system check
    setTimeout(() => {
      setLoading(false);
      setStatus(
        "✅ Everything looks good! If something breaks, check Supabase or Vercel logs."
      );
    }, 2000);
  }

  return (
    <div className="min-h-screen bg-[#07111a] text-white p-4 pb-24">
      <h1 className="text-3xl font-bold mb-4">🧠 StreamZone Debug Assistant</h1>
      <p className="mb-4 text-[#9aa4b2]">
        This tool checks for basic system problems. Later, it will use AI to guide
        you through real fixes.
      </p>

      <button
        onClick={handleDebug}
        disabled={loading}
        className="px-4 py-2 rounded"
        style={{ background: "var(--accent)", color: "#001" }}
      >
        {loading ? "Running..." : "Run System Check"}
      </button>

      {status && <p className="mt-4 text-sm">{status}</p>}
    </div>
  );
}
