import { useEffect, useState } from "react";

const WORD = ["V", "A", "N", "I", "L", "L", "A", "+"];

export default function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = 0;
    const id = window.setInterval(() => {
      p += 1;
      if (p > 100) p = 0;
      setProgress(p);
    }, 60);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="screen">
      <main className="stage">
        <div className="word-stage" aria-label="VANILLA PLUS">
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
              <span
                className="hop-plus"
                style={{ animationDelay: `${i * 0.45}s` }}
                aria-hidden="true"
              >
                +
              </span>
            </span>
          ))}
        </div>

        <div
          className="loader"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="bar-track">
            <div className="bar-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </main>
    </div>
  );
}
