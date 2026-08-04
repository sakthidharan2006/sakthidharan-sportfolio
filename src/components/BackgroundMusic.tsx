import { useEffect, useRef, useState } from "react";
import { Music } from "lucide-react";
import seaBreeze from "@/assets/sea-breeze.mp3.asset.json";

const TARGET_VOLUME = 0.35;

export const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [playing, setPlaying] = useState(false);

  const clamp = (v: number) => Math.min(1, Math.max(0, v));

  const fade = (to: number, ms = 1200, done?: () => void) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const from = clamp(audio.volume);
    const start = performance.now();
    const step = (now: number) => {
      if (!audioRef.current) return;
      const p = Math.min((now - start) / ms, 1);
      audio.volume = clamp(from + (to - from) * p);
      if (p < 1) rafRef.current = requestAnimationFrame(step);
      else done?.();
    };
    rafRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    const audio = new Audio(seaBreeze.url);
    audio.loop = true;
    audio.volume = 0;
    audio.preload = "auto";
    audio.crossOrigin = "anonymous";
    audioRef.current = audio;

    const tryPlay = async () => {
      try {
        audio.volume = 0.02;
        await audio.play();
        setPlaying(true);
        fade(TARGET_VOLUME);
        removeGestures();
      } catch {
        /* autoplay blocked — wait for a user gesture */
      }
    };

    const onGesture = () => void tryPlay();
    const removeGestures = () => {
      ["pointerdown", "keydown", "touchstart", "scroll"].forEach((ev) =>
        window.removeEventListener(ev, onGesture)
      );
    };

    void tryPlay();
    ["pointerdown", "keydown", "touchstart", "scroll"].forEach((ev) =>
      window.addEventListener(ev, onGesture, { passive: true })
    );

    return () => {
      removeGestures();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      fade(0, 600, () => audio.pause());
      setPlaying(false);
    } else {
      audio.volume = 0.02;
      audio
        .play()
        .then(() => {
          setPlaying(true);
          fade(TARGET_VOLUME);
        })
        .catch((e) => console.error("Audio play failed", e));
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Mute sea breeze" : "Play sea breeze"}
      title={`Sea Breeze — ${playing ? "playing" : "muted"}`}
      className="relative inline-flex items-center justify-center h-9 w-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors"
    >
      {playing ? (
        <span className="flex items-end gap-[2px] h-4" aria-hidden>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-[2px] bg-primary rounded-full animate-[eq_1s_ease-in-out_infinite]"
              style={{ height: "100%", transformOrigin: "bottom", animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </span>
      ) : (
        <Music className="h-4 w-4" />
      )}
    </button>
  );
};
