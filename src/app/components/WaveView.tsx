import useWaveSurfer from "@/lib/hooks/useWaveSurfer";
import { useCallback, useEffect, useRef } from "react";

const op = {
  waveColor: "rgb(200, 0, 200)",
  progressColor: "rgb(100, 0, 100)",
};

interface WaveViewProps {
  url: "";
}

export default function WaveView({ url }: WaveViewProps) {
  const waveForm = useRef<HTMLDivElement>(null);
  const { waveSurfer: a, isPlaying, time } = useWaveSurfer(waveForm, op);

  const play = useCallback(() => {
    a?.playPause();
  }, [a]);

  useEffect(() => {
    a?.load(url);
  }, [a, url]);

  return (
    <main className="w-full h-full">
      <div ref={waveForm}></div>

      {time}
      <button onClick={play}>ASA</button>
    </main>
  );
}
