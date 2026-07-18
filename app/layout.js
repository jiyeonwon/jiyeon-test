import "./globals.css";

export const metadata = {
  title: "My Next App",
  description: "Next.js로 만든 웹사이트",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
