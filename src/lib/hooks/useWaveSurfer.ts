import { ReviewItem } from "@/app/components/Review/ReviewListItem";
import { RefObject, useEffect, useState } from "react";
import WaveSurfer, { WaveSurferOptions } from "wavesurfer.js";
import RegionsPlugin from "wavesurfer.js/dist/plugins/regions.js";

export default function useWaveSurfer(
  ref: RefObject<HTMLElement>,
  options: Omit<WaveSurferOptions, "container">,
  review?: ReviewItem
) {
  const [waveSurfer, setWaveSurfer] = useState<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const ws = WaveSurfer.create({
      ...options,
      container: ref.current,
    });
    const wsRegions = ws.registerPlugin(RegionsPlugin.create());

    setWaveSurfer(ws);

    const subs = [
      ws.on("play", () => setIsPlaying(true)),
      ws.on("pause", () => setIsPlaying(false)),
      ws.on("timeupdate", (time) => setTime(time)),
      ws.on("decode", () => {
        wsRegions.addRegion({
          start: review?.start || 0,
          end: review?.end || 0,
          content: review?.title,
          color: "rgba(255, 255, 255, 0.5)",
        });
      }),
    ];

    return () => {
      subs.forEach((unsub) => unsub());
      ws.destroy();
    };
  }, [options, ref, review?.end, review?.start, review?.title]);

  return { waveSurfer, isPlaying, time };
}
