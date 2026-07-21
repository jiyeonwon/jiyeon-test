import "./globals.css";

export const metadata = {
  title: "Won Jiyeon — Portfolio",
  description: "Won Jiyeon, visual communication designer based in Seoul.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
