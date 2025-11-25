"use client";
import { useEffect } from "react";

export default function Markets() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-crypto-mkt-screener.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: 800,
      colorTheme: "dark",
      isTransparent: false,
      locale: "en",
    });
    document.getElementById("tv-container").appendChild(script);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Crypto Markets</h1>
      <div id="tv-container"></div>
    </main>
  );
}
