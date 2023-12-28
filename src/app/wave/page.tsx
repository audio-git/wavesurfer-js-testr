"use client";

import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import WaveSurfer, { WaveSurferOptions } from "wavesurfer.js";

const useWaveSurfer = (
  ref: RefObject<HTMLElement>,
  options: Omit<WaveSurferOptions, "container">
) => {
  const [waveSurfer, setWaveSurfer] = useState<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const ws = WaveSurfer.create({ ...options, container: ref.current });
    setWaveSurfer(ws);

    ws.on("play", () => setIsPlaying(true));
    ws.on("pause", () => setIsPlaying(false));
    ws.on("timeupdate", (time) => setTime(time));

    return () => {
      ws.destroy();
    };
  }, [options, ref]);

  return { waveSurfer, isPlaying, time };
};

const op = {
  url: "/sound/sample-15s.mp3",
  waveColor: "rgb(200, 0, 200)",
  progressColor: "rgb(100, 0, 100)",
};

export default function WavePage() {
  const waveForm = useRef<HTMLDivElement>(null);
  const { waveSurfer: a, isPlaying, time } = useWaveSurfer(waveForm, op);

  const play = useCallback(() => {
    a?.playPause();
  }, [a]);

  useEffect(() => {
    console.log(isPlaying);
  }, [isPlaying]);

  return (
    <main className="w-full">
      <div ref={waveForm}></div>

      {time}
      <button onClick={play}>ASA</button>
    </main>
  );
}
