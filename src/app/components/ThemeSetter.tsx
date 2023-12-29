"use client";

import { useThemeStore } from "@/lib/store/themeStore";
import { useEffect } from "react";

export default function ThemeSetter() {
  const theme = useThemeStore((state) => state.theme);
  const followOS = useThemeStore((state) => state.followOS);
  const setTheme = useThemeStore((state) => state.setTheme);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      useThemeStore.setState((prevState) => ({ ...prevState, followOS: true }));
    } else {
      useThemeStore.setState((prevState) => ({
        ...prevState,
        followOS: false,
      }));
    }

    if (followOS || theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [followOS, setTheme, theme]);

  return null;
}
