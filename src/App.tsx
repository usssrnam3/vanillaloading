import { useState, useRef, useEffect, useCallback } from "react";

const VIDEOS = [
  { src: "/ural1.mp4" },
  { src: "/ural2.mp4" },
  { src: "/ural3.mp4" },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const next = useCallback(() => {
    setIndex((i) => (i + 1 < VIDEOS.length ? i + 1 : 0));
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.load();
    el.play();
  }, [index]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const handler = () => next();
    el.addEventListener("ended", handler);
    return () => el.removeEventListener("ended", handler);
  }, [next]);

  const v = VIDEOS[index];

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

        <div className="video-wrapper" key={index}>
          <video
            ref={videoRef}
            src={v.src}
            controls
            playsInline
            className="video-player"
          />
        </div>

        <div className="playlist-bar">
          <span className="playlist-info">
            {index + 1} / {VIDEOS.length}
          </span>
          <button className="playlist-btn" onClick={next}>
            {index + 1 < VIDEOS.length ? "Далее →" : "Заново ↻"}
          </button>
        </div>
      </main>
    </div>
  );
}
