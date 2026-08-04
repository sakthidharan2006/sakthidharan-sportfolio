import { useEffect, useRef, useState } from "react";
import { Music, Check, ChevronDown } from "lucide-react";
import warmAmbient from "@/assets/warm-ambient.mp3.asset.json";
import deepFocus from "@/assets/deep-focus.mp3.asset.json";
import nightDrive from "@/assets/night-drive.mp3.asset.json";
import sunlit from "@/assets/sunlit.mp3.asset.json";

const TRACKS = [
  { id: "warm", name: "Warm Ambient", mood: "soft major drift", url: warmAmbient.url },
  { id: "focus", name: "Deep Focus", mood: "low minor drone", url: deepFocus.url },
  { id: "night", name: "Night Drive", mood: "dark & shimmering", url: nightDrive.url },
  { id: "sunlit", name: "Sunlit", mood: "bright lydian pad", url: sunlit.url },
] as const;

const TARGET_VOLUME = 0.35;

export const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const [open, setOpen] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const audio = new Audio(TRACKS[0].url);
    audio.loop = true;
    audio.volume = 0;
    audio.preload = "auto";
    audio.crossOrigin = "anonymous";
    audioRef.current = audio;
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // Close the panel on outside click / Escape
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const clamp = (v: number) => Math.min(1, Math.max(0, v));

  const fade = (to: number, ms = 900, done?: () => void) => {
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

  const start = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      audio.muted = false;
      audio.volume = 0.02;
      await audio.play();
      setPlaying(true);
      fade(TARGET_VOLUME);
    } catch (e) {
      console.error("Audio play failed", e);
      setPlaying(false);
    }
  };

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      fade(0, 600, () => audio.pause());
      setPlaying(false);
    } else {
      void start();
    }
  };

  const selectTrack = (index: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    setOpen(false);
    if (index === trackIndex) {
      if (!playing) void start();
      return;
    }
    setTrackIndex(index);

    const swap = async () => {
      audio.src = TRACKS[index].url;
      audio.load();
      if (playing) {
        try {
          audio.volume = 0.02;
          await audio.play();
          fade(TARGET_VOLUME, 700);
        } catch (e) {
          console.error("Audio play failed", e);
          setPlaying(false);
        }
      } else {
        void start();
      }
    };

    if (playing) fade(0, 350, () => void swap());
    else void swap();
  };

  return (
    <div ref={wrapRef} className="relative flex items-center">
      <button
        onClick={toggle}
        aria-label={playing ? "Mute background music" : "Play background music"}
        title={`${TRACKS[trackIndex].name} — ${playing ? "playing" : "muted"}`}
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

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Choose ambient track"
        aria-expanded={open}
        title="Choose ambient track"
        className="inline-flex items-center justify-center h-9 w-5 -ml-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors"
      >
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-60 z-50 rounded-xl border border-border bg-card/95 backdrop-blur-xl shadow-glow p-1.5 animate-in fade-in-0 zoom-in-95">
          <p className="px-2.5 pt-1.5 pb-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono">
            Ambient tracks
          </p>
          {TRACKS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => selectTrack(i)}
              className={`w-full flex items-center gap-2 text-left px-2.5 py-2 rounded-lg transition-colors ${
                i === trackIndex
                  ? "bg-primary/10 text-foreground"
                  : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
              }`}
            >
              <span className="flex-1 min-w-0">
                <span className="block text-sm font-medium truncate">{t.name}</span>
                <span className="block text-[11px] text-muted-foreground truncate">{t.mood}</span>
              </span>
              {i === trackIndex && <Check className="h-3.5 w-3.5 text-primary shrink-0" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
