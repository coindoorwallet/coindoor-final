export async function GET() {
  try {
    const token = process.env.CRYPTOPANIC_TOKEN;

    if (!token) {
      return Response.json(
        { error: "CRYPTOPANIC_TOKEN missing" },
        { status: 500 }
      );
    }

    const r = await fetch(
      `https://cryptopanic.com/api/v1/posts/?auth_token=${token}&filter=important`,
      { next: { revalidate: 60 } }
    );

    const data = await r.json();

    // FIXED: removed TypeScript
    const items = (data.results || []).map((it) => ({
      id: it.id,
      title: it.title,
      url: it.url
    }));

    return Response.json({ items });
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
