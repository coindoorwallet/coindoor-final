import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">CoinDoor</h1>

      <section className="mt-6 space-y-4">
        <div>
          <Link href="/markets" className="text-blue-500 underline">
            View Markets
          </Link>
        </div>

        <div>
          <Link href="/news" className="text-blue-500 underline">
            Latest News
          </Link>
        </div>
      </section>
    </main>
  );
}
