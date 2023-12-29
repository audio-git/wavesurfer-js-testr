import useWaveSurfer from "@/lib/hooks/useWaveSurfer";
import { useCallback, useRef } from "react";

export default function WaveForm() {
  const waveForm = useRef<HTMLDivElement>(null);
  const { waveSurfer: a, isPlaying, time } = useWaveSurfer(waveForm, op);

  const play = useCallback(() => {
    a?.playPause();
  }, [a]);

  return (
    <main className="w-full h-full">
      <div ref={waveForm}></div>

      {time}
      <button onClick={play}>ASA</button>
    </main>
  );
}
