import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.CRYPTOPANIC_TOKEN;
  if (!token) {
    return NextResponse.json({ error: "CryptoPanic token not configured" }, { status: 500 });
  }

  try {
    const url = `https://cryptopanic.com/api/v1/posts/?auth_token=${token}&public=true&page=1`;
    const r = await fetch(url);
    if (!r.ok) {
      const text = await r.text();
      console.error("CryptoPanic error:", r.status, text);
      return NextResponse.json({ error: "Failed to fetch news" }, { status: 502 });
    }
    const data = await r.json();

    // minimal mapping to keep payload small
    const items = (data.results || []).map((it: any) => ({
      id: it.id,
      title: it.title,
      url: it.url,
      domain: it.domain,
      published_at: it.published_at
    }));

    return NextResponse.json({ results: items }, { status: 200, headers: { "cache-control": "s-maxage=60, stale-while-revalidate=120" } });
  } catch (e) {
    console.error("API error", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
