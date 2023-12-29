"use client";

import Card from "@/ui/Card";
import { FaFastBackward, FaPause, FaFastForward } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const MOCKS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export default function Home() {
  return (
    <main className="w-full lg:w-[1239px] flex flex-col min-h-full overflow-y-auto items-center justify-between">
      <section className="w-full h-full surface"></section>

      <section className="w-full">
        <div className="w-full h-16 background flex justify-between items-center px-16">
          <FaFastBackward />
          <FaPause />
          <FaFastForward />
        </div>

        <ul className="max-h-[18rem] overflow-y-auto">
          {MOCKS.map((mock, index) => (
            <li
              key={mock}
              className={twMerge(
                "min-h-[64px] grid place-items-center font-extrabold",
                index % 2 === 0
                  ? "bg-white dark:bg-neutral-800"
                  : "bg-secondary-50/90 dark:bg-secondary-900/90"
              )}
            >
              Goal.{mock}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
