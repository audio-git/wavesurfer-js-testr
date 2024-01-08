"use client";

import { twMerge } from "tailwind-merge";

export enum ReviewType {
  LIKE = "LIKE",
  FIX = "FIX",
}

export interface ReviewItem {
  id: number;
  url: string;
  type: ReviewType;
  username: string;
  title: string;
  createDateTime: string;
  start: number;
  end: number;
  // ...
}

interface ReviewListItemProps {
  review: ReviewItem;
  onClick: (item: ReviewItem) => void;
}

const ICONS = {
  [ReviewType.FIX]: "✍",
  [ReviewType.LIKE]: "👍",
};

export default function ReviewListItem({
  review,
  onClick,
}: ReviewListItemProps) {
  return (
    <li
      key={review.id}
      className={twMerge("relative w-full max-h-12 flex items-center gap-x-2")}
      onClick={() => onClick(review)}
    >
      <article className="w-12 grid place-items-center p-2 text-2xl rounded-lg">
        {ICONS[review.type]}
      </article>

      <div className="flex flex-col justify-between gap-[2px]">
        <h3 className="font-semibold">{review.username}</h3>
        <p className="w-full text-sm line-clamp-1">{review.title}</p>
      </div>

      <span className="absolute top-1 right-1 text-xs text-neutral-500 dark:text-neutral-400">
        {review.createDateTime}
      </span>
    </li>
  );
}
