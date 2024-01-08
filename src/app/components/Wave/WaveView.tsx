"use client";

import useWaveSurfer from "@/lib/hooks/useWaveSurfer";
import { useCallback, useEffect, useRef } from "react";
import { FaFastBackward, FaFastForward, FaPause, FaPlay } from "react-icons/fa";
import WaveSurfer, { WaveSurferOptions } from "wavesurfer.js";
import { ReviewItem } from "../Review/ReviewListItem";

const op: Omit<WaveSurferOptions, "container"> = {
  waveColor: "rgb(200, 0, 200)",
  progressColor: "rgb(100, 0, 100)",
  minPxPerSec: 200,
  // autoScroll: true,
  // autoCenter: true,
};

interface WaveViewProps {
  review?: ReviewItem;
}

export default function WaveView({ review }: WaveViewProps) {
  const waveForm = useRef<HTMLDivElement>(null);
  const {
    waveSurfer: a,
    isPlaying,
    time,
  } = useWaveSurfer(waveForm, op, review);

  const play = useCallback(() => {
    a?.playPause();
  }, [a]);

  useEffect(() => {
    a?.load(review?.url || "");
  }, [a, review?.url]);

  return (
    <main className="fixed w-full h-full grid place-items-center bg-black bg-opacity-70">
      <div className="w-full flex flex-col px-4 gap-y-4 overflow-x-hidden">
        <div ref={waveForm}></div>
      </div>

      <div className="w-full h-16 background flex justify-between items-center px-16">
        <FaFastBackward />
        <span onClick={play}>{isPlaying ? <FaPause /> : <FaPlay />}</span>
        <FaFastForward />
      </div>
    </main>
  );
}
