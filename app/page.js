"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center">
      <header className="w-full flex justify-between items-center px-6 py-4 border-b border-[#1a1a1a]">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" width={42} height={42} alt="CoinDoor Logo" />
          <h1 className="text-xl font-semibold">CoinDoor</h1>
        </div>

        <nav className="flex gap-6 text-gray-300">
          <Link href="/markets">Markets</Link>
          <Link href="/news">News</Link>
        </nav>
      </header>

      <section className="mt-24 text-center px-4">
        <h1 className="text-5xl font-bold mb-6">
          Crypto Insights. Live Data.<br />Smarter Decisions.
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          CoinDoor gives you real-time crypto charts, market updates, and breaking Web3 news.
        </p>

        <div className="flex justify-center gap-6">
          <Link
            href="/markets"
            className="px-6 py-3 rounded-xl bg-[#52A447] text-black font-semibold hover:opacity-90"
          >
            View Markets
          </Link>

          <Link
            href="/news"
            className="px-6 py-3 rounded-xl border border-gray-600 text-white hover:bg-gray-900"
          >
            Latest News
          </Link>
        </div>
      </section>
    </main
