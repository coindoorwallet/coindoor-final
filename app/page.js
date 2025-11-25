import Link from "next/link";
import MarketGrid from "../components/MarketGrid";
import NewsFeed from "../components/NewsFeed";

export default function Home() {
  return (
    <section className="home-hero">
      <div className="hero-card">
        <img src="/logo.png" alt="CoinDoor" className="logo" />
        <h1 className="hero-title">Crypto Insights. Live Data. Smarter Decisions.</h1>
        <p className="hero-sub">Real-time charts, curated Web3 news, and education updates.</p>

        <div className="hero-ctas">
          <Link href="/markets"><a className="btn-primary">Charts</a></Link>
          <a href="#news" className="btn-outline">News</a>
        </div>
      </div>

      <section className="section">
        <h2 className="section-title">Market Snapshot</h2>
        <MarketGrid />
      </section>

      <section id="news" className="section">
        <h2 className="section-title">Latest News</h2>
        <NewsFeed limit={6} />
        <div style={{ marginTop: 14 }}>
          <Link href="/news"><a className="link-more">See all news →</a></Link>
        </div>
      </section>
    </section>
  );
}
