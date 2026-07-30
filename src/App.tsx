import { useState, useCallback } from "react";

const VIDEOS = [
  { oid: "-19232159", id: "456250614", hash: "697e12a3dea65677" },
  { oid: "-19232159", id: "456250613", hash: "381709a0d0a35e84" },
  { oid: "-19232159", id: "456250605", hash: "ca72ad1d5a8a0c8f" },
];

export default function App() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1 < VIDEOS.length ? i + 1 : 0));
  }, []);

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
          <iframe
            src={`https://vk.com/video_ext.php?oid=${v.oid}&id=${v.id}&hash=${v.hash}&hd=2&autoplay=1`}
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            allow="autoplay"
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
