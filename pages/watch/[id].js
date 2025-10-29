import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function Watch() {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState(null);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (!id) return;
    (async () => {
      const { data, error } = await supabase
        .from("content")
        .select("*")
        .eq("id", id)
        .limit(1);
      if (!error && data && data[0]) setItem(data[0]);
    })();
  }, [id]);

  async function recordView() {
    const { data: user } = await supabase.auth.getUser();
    const email = user?.user?.email;

    const res = await fetch("/api/check-and-record-view", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contentId: id, userEmail: email || null }),
    });

    const j = await res.json();
    if (!res.ok) setMsg(j.message || "Blocked");
    else setMsg(`Remaining: ${j.remaining}`);
  }

  if (!item) return <div className="p-6">Loading...</div>;

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] p-4">
      <h1 className="text-2xl font-bold mb-3">{item.title}</h1>

      <div className="bg-black h-64 flex items-center justify-center mb-4">
        {item.storage_path ? (
          <video
            controls
            src={item.storage_path}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="text-white">No video available</div>
        )}
      </div>

      <button
        onClick={recordView}
        className="px-4 py-2 rounded"
        style={{ background: "var(--accent)", color: "#001" }}
      >
        Start / Record view
      </button>

      <p className="mt-3 text-sm text-[#9aa4b2]">{msg}</p>
    </div>
  );
}
