export default function Home() {
  return (
    <main style={{ textAlign: 'center', padding: '50px' }}>
      <h1>🎬 StreamZone</h1>
      <p>Watch free movies and series anytime.</p>

      <button
        onClick={() => alert("System debug complete. No issues found!")}
        style={{
          backgroundColor: '#ff6600',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '8px',
          margin: '10px',
          cursor: 'pointer'
        }}
      >
        🧠 Debug System
      </button>

      <button
        onClick={() => alert("AI Assistant: How can I help you?")}
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '8px',
          margin: '10px',
          cursor: 'pointer'
        }}
      >
        🤖 Ask AI Assistant
      </button>

      <button
        onClick={() => navigator.clipboard.writeText("StreamZone")}
        style={{
          backgroundColor: '#00cc66',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '8px',
          margin: '10px',
          cursor: 'pointer'
        }}
      >
        📋 Copy Site Name
      </button>
    </main>
  );
}
