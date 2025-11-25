import TradingViewChart from "../components/TradingViewChart";
import MarketGrid from "../components/MarketGrid";

export default function MarketsPage() {
  return (
    <section className="section">
      <h1 className="page-title">Live Charts</h1>

      <div className="card">
        <h2 className="card-title">BTC / USDT — Featured</h2>
        <TradingViewChart symbol="BINANCE:BTCUSDT" height={560} />
      </div>

      <div className="mt-6">
        <h3 className="section-subtitle">Other markets</h3>
        <MarketGrid />
      </div>
    </section>
  );
}
