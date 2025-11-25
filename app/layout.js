export const metadata = {
  title: "CoinDoor",
  description: "Real-time crypto charts, breaking Web3 news and updates."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
