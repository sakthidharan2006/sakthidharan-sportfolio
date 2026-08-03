import { useEffect, useRef, useState } from "react";
import { Music } from "lucide-react";
import track from "@/assets/ambient-loop.mp3.asset.json";

export const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(track.url);
    audio.loop = true;
    audio.volume = 0;
    audio.preload = "auto";
    audio.crossOrigin = "anonymous";
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const rafRef = useRef<number | null>(null);
  const clamp = (v: number) => Math.min(1, Math.max(0, v));

  const fade = (to: number, done?: () => void) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const from = clamp(audio.volume);
    const start = performance.now();
    const step = (now: number) => {
      if (!audioRef.current) return;
      const p = Math.min((now - start) / 900, 1);
      audio.volume = clamp(from + (to - from) * p);
      if (p < 1) rafRef.current = requestAnimationFrame(step);
      else done?.();
    };
    rafRef.current = requestAnimationFrame(step);
  };

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      fade(0, () => audio.pause());
      setPlaying(false);
    } else {
      try {
        audio.muted = false;
        audio.volume = 0.05;
        await audio.play();
        setPlaying(true);
        fade(0.35);
      } catch (e) {
        console.error("Audio play failed", e);
        setPlaying(false);
      }
    }
  };


  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Mute background music" : "Play background music"}
      title={playing ? "Mute background music" : "Play background music"}
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
