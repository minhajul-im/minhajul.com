import "./globals.css";

export const metadata = {
  title: "minhajul",
  name: "Minhajul Islam (MinhaJ)",
  description: "Hey, I'm MinhaJ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo-m.png" sizes="any" />
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
