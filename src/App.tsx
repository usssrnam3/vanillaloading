import { useRef, useEffect } from "react";

const WORD = ["V", "A", "N", "I", "L", "L", "A"];
const SONGS = ["/sound.mp3", "/sound2.mp3"];

export default function App() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    el.volume = 0.08;

    const pick = () => SONGS[Math.floor(Math.random() * SONGS.length)];

    const playNext = () => {
      el.src = pick();
      el.load();
      el.play();
    };

    el.addEventListener("ended", playNext);

    el.src = pick();
    el.load();
    el.play().catch(() => {
      const handler = () => {
        el.play();
        document.removeEventListener("click", handler);
      };
      document.addEventListener("click", handler);
    });

    return () => el.removeEventListener("ended", playNext);
  }, []);

  return (
    <>
      <audio ref={audioRef} />
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
        </div>
      </main>
    </div>
    </>
  );
}
