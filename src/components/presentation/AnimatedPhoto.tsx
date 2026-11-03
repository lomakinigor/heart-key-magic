import { useRef, useState } from "react";
import romanticVideo from "@/assets/romantic-video-mobile.mp4";
import photoRomantic from "@/assets/photo-romantic.png";

const AnimatedPhoto = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  const play = () => {
    setFailed(false);
    videoRef.current?.play().catch(() => setFailed(true));
  };

  return (
    <div className="relative w-full h-full" onClick={(event) => event.stopPropagation()}>
      <video
        ref={videoRef}
        src={romanticVideo}
        poster={photoRomantic}
        aria-label="Оживлённое фото"
        className="w-full h-full object-cover"
        autoPlay muted loop playsInline controls preload="auto"
        onPlaying={() => { setPlaying(true); setFailed(false); }}
        onPause={() => setPlaying(false)}
        onError={() => { setPlaying(false); setFailed(true); }}
      />
      {!playing && (
        <button
          type="button"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background/90 px-5 py-3 text-sm font-semibold text-foreground whitespace-nowrap"
          onClick={play}
        >
          {failed ? "Повторить запуск" : "▶ Оживить фото"}
        </button>
      )}
    </div>
  );
};

export default AnimatedPhoto;
