export default async function NewsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news`, {
    cache: "no-store",
  });

  const news = await res.json();

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Latest Crypto News</h1>

      <div className="grid gap-6">
        {news.results.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            className="block p-5 border border-gray-800 rounded-xl hover:bg-gray-900 transition"
          >
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-400">{item.domain}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
