import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>The Blog Room</title>
      <body>{children}</body>
    </html>
  );
}
