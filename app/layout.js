import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "CoinDoor — Live Crypto Charts & News",
  description: "Real-time crypto charts, breaking Web3 news and updates."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-[#0f1312]">
          <div className="container">
            <Navbar />
          </div>
        </header>

        <main className="container mt-8">{children}</main>

        <footer className="mt-16">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
