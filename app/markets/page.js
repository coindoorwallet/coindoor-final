import TradingViewChart from "../../components/TradingViewChart";

export default function ChartsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Live Charts</h1>

      <div className="rounded-lg p-4 bg-[#071017] border border-[#0f1718] mb-6">
        <h2 className="mb-3 font-semibold">BTC / USDT (Featured)</h2>
        <TradingViewChart symbol="BINANCE:BTCUSDT" height={540} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-lg p-4 bg-[#071017] border border-[#0f1718]">
          <h3 className="font-medium mb-3">ETH / USDT</h3>
          <TradingViewChart symbol="BINANCE:ETHUSDT" height={300} />
        </div>

        <div className="rounded-lg p-4 bg-[#071017] border border-[#0f1718]">
          <h3 className="font-medium mb-3">XRP / USDT</h3>
          <TradingViewChart symbol="BINANCE:XRPUSDT" height={300} />
        </div>
      </div>
    </section>
  );
}
