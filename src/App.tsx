import { useRef, useEffect } from "react";

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    el.volume = 1;
    el.loop = true;
    el.muted = false;
    el.play().catch(() => {
      const retry = () => {
        el.muted = false;
        el.play();
      };
      setTimeout(retry, 1000);
    });
  }, []);

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
            loop
            playsInline
            preload="auto"
            className="video-player"
          />
        </div>
      </main>
    </div>
  );
}
