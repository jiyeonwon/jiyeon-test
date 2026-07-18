export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        fontFamily: "sans-serif",
      }}
    >
      <section style={{ textAlign: "center" }}>
        <h1>안녕하세요, Next.js!</h1>
        <p>첫 번째 페이지가 정상적으로 만들어졌습니다.</p>
      </section>
    </main>
  );
}
