import Link from "next/link";
import NewsFeed from "../components/NewsFeed";

export default function Home() {
  return (
    <section>
      <div className="rounded-xl p-10 bg-[#071017] border border-[#0f1718]">
        <div className="flex flex-col items-center text-center gap-4">
          <img src="/logo.png" alt="CoinDoor" className="h-20 w-auto" />
          <h1 className="text-4xl font-extrabold mt-2">Crypto Insights. Live Data. Smarter Decisions.</h1>
          <p className="text-gray-300 max-w-2xl">
            Real-time charts, breaking Web3 news, and practical education updates. No login — just reliable market visuals and curated updates.
          </p>

          <div className="mt-6 flex gap-3">
            <Link href="/charts">
              <a className="px-5 py-3 rounded-md bg-coin-green text-black font-semibold shadow">Charts</a>
            </Link>

            <a href="#news" className="px-5 py-3 rounded-md border border-[#1b1f1c] text-gray-200">News</a>
          </div>
        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <section id="news" className="rounded-lg p-6 bg-[#071017] border border-[#0f1718]">
            <h2 className="text-2xl font-semibold mb-4">Latest Web3 & Crypto News</h2>
            <NewsFeed />
          </section>
        </div>

        <aside>
          <div className="rounded-lg p-6 bg-[#071017] border border-[#0f1718]">
            <h3 className="font-semibold mb-3">Why CoinDoor?</h3>
            <ul className="text-gray-300 list-disc ml-5">
              <li>Interactive live TradingView charts</li>
              <li>Curated crypto & Web3 news</li>
              <li>Education waitlist (Email + WhatsApp)</li>
            </ul>
            <div className="mt-4">
              <a href="/subscribe" className="inline-block px-4 py-2 rounded bg-coin-green text-black font-medium">Join Waitlist</a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
