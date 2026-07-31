import { useRef, useState } from "react";

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const start = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = false;
    el.volume = 1;
    el.loop = true;
    el.play();
    setStarted(true);
  };

  return (
    <div className="screen">
      <main className="stage">
        <div className="word-stage" aria-label="VANILLA">
          {["V", "A", "N", "I", "L", "L", "A"].map((ch, i) => (
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
        </div>

        <div className="video-wrapper">
          <video
            ref={videoRef}
            src="ural1.webm"
            muted
            loop
            controls
            playsInline
            preload="auto"
            className="video-player"
          />
        </div>

        {!started && (
          <button className="play-btn" onClick={start}>
            Включить звук ▶
          </button>
        )}
      </main>
    </div>
  );
}
