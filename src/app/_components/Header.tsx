"use client";

import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="w-full min-w-fit min-h-[3rem] flex justify-between items-center px-8">
      <h1>TEST</h1>
      <ThemeToggle />
    </header>
  );
}
