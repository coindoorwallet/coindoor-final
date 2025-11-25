export async function GET() {
  const token = process.env.CRYPTO_PANIC_TOKEN;

  const url = `https://cryptopanic.com/api/v1/posts/?auth_token=${token}&filter=important`;

  const res = await fetch(url);
  const data = await res.json();

  return Response.json(data);
}
