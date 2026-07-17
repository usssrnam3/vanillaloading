const WORD = ["V", "A", "N", "I", "L", "L", "A"];

export default function App() {
  return (
    <div className="screen">
      <main className="stage">
        <div className="word-stage" aria-label="VANILLA">
          {WORD.map((ch, i) => (
            <span
              className={`letter-cell ${i % 2 === 0 ? "up" : "down"}`}
              key={i}
            >
              <span
                className="letter"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {ch}
              </span>
            </span>
          ))}
          <span className="jumping-plus" aria-hidden="true">+</span>
        </div>
      </main>
    </div>
  );
}
