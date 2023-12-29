import { RefObject, useEffect, useState } from "react";
import WaveSurfer, { WaveSurferOptions } from "wavesurfer.js";

export default function useWaveSurfer(
  ref: RefObject<HTMLElement>,
  options: Omit<WaveSurferOptions, "container">
) {
  const [waveSurfer, setWaveSurfer] = useState<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const ws = WaveSurfer.create({ ...options, container: ref.current });
    setWaveSurfer(ws);

    const subs = [
      ws.on("play", () => setIsPlaying(true)),
      ws.on("pause", () => setIsPlaying(false)),
      ws.on("timeupdate", (time) => setTime(time)),
    ];

    return () => {
      subs.forEach((unsub) => unsub());
      ws.destroy();
    };
  }, [options, ref]);

  return { waveSurfer, isPlaying, time };
}
