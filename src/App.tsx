import { useRef, useEffect } from "react";

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    el.volume = 1;
    el.loop = true;
    el.muted = true;
    el.play().then(() => {
      setTimeout(() => {
        el.muted = false;
      }, 500);
    });
  }, []);

  return (
    <div className="video-wrap">
      <video
        ref={videoRef}
        src="main.webm"
        loop
        playsInline
        preload="auto"
        className="fullscreen-video"
      />
    </div>
  );
}