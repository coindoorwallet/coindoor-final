export default async function NewsPage() {
  // server-side fetch to your existing API (no token exposure)
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/news`, { cache: "no-store" });
  const json = await res.json();
  const items = json.items || json.results || [];

  return (
    <main className="section">
      <h1 className="page-title">Latest Crypto & Web3 News</h1>
      <div className="grid-news">
        {items.map((it) => (
          <a key={it.id} href={it.url} target="_blank" rel="noreferrer" className="news-card">
            <h3 className="news-title">{it.title}</h3>
            <div className="news-meta">
              <span className="muted">{it.domain || "source"}</span>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
