"use client";

import TestList from "./_components/TestList";

export default function Home() {
  return (
    <main className="flex flex-col min-h-full overflow-y-auto items-center justify-between p-24">
      <div className="text-2xl font-bold dark:text-white">Wave~</div>

      <TestList />
      <TestList />
      <TestList />
      <TestList />
    </main>
  );
}
