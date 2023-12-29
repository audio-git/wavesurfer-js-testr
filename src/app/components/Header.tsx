"use client";

import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  title: string;
}

export default function Header() {
  return (
    <header className="w-full min-w-fit min-h-[4rem] flex justify-between items-center px-8 bg-primary">
      <h1>TEST</h1>
      <ThemeToggle />
    </header>
  );
}
