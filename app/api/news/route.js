export async function GET() {
  const token = process.env.CRYPTOPANIC_TOKEN;
  const url = `https://cryptopanic.com/api/v1/posts/?auth_token=${token}&public=true`;
  const r = await fetch(url, { cache: "no-store" });
  const data = await r.json();
  return Response.json(data);
}
