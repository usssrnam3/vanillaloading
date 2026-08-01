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
    <video
      ref={videoRef}
      src="main.webm"
      loop
      playsInline
      preload="auto"
      className="fullscreen-video"
    />
  );
}