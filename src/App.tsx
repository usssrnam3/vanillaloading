import { useRef, useEffect } from "react";

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    el.muted = true;
    el.autoplay = true;
    el.loop = true;
    el.play().catch(() => {
      const handler = () => {
        el.play();
        document.removeEventListener("click", handler);
      };
      document.addEventListener("click", handler);
    });

    const enableSound = () => {
      el.muted = false;
      el.volume = 1;
      document.removeEventListener("click", enableSound);
      document.removeEventListener("keydown", enableSound);
    };
    document.addEventListener("click", enableSound);
    document.addEventListener("keydown", enableSound);
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
            muted
            autoPlay
            loop
            controls
            playsInline
            preload="auto"
            className="video-player"
          />
        </div>
      </main>
    </div>
  );
}
