"use client";

import useStore from "@/lib/hooks/useStore";
import { useThemeStore } from "@/lib/store/themeStore";
import { motion } from "framer-motion";
import { MdSunny } from "react-icons/md";
import { GrSystem } from "react-icons/gr";

export default function ThemeToggle() {
  const theme = useStore(useThemeStore, (state) => state.theme);
  const followOS = useStore(useThemeStore, (state) => state.followOS);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <div className="relative flex items-center text-black dark:text-white text-xl gap-2 transition-colors">
      {followOS ? <GrSystem /> : <MdSunny />}

      <motion.button
        className={`w-16 bg-black rounded-3xl p-1 dark:bg-white transition-colors flex ${
          followOS ? "cursor-default opacity-50" : "cursor-pointer opacity-80"
        }`}
        style={{
          justifyContent: theme === "dark" ? "flex-end" : "flex-start",
        }}
        onClick={toggleTheme}
        disabled={followOS}
      >
        <motion.article
          layout
          className={`w-6 h-6 ${
            followOS
              ? "bg-gray-800 dark:bg-slate-300"
              : "bg-white dark:bg-black"
          } rounded-full transition-colors`}
        />
      </motion.button>
    </div>
  );
}
