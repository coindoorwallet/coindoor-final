import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "CoinDoor — Live Crypto Charts & News",
  description: "Real-time crypto charts, breaking Web3 news and updates."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site">
          <header className="site-header">
            <div className="container">
              <Navbar />
            </div>
          </header>

          <main className="container">{children}</main>

          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
