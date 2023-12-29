"use client";

import Card from "@/ui/Card";
import useStore from "@/lib/hooks/useStore";
import { useTestStore } from "@/lib/store/testStore";

export default function TestList() {
  const tests = useStore(useTestStore, (state) => state.value);
  const delTests = useTestStore((state) => state.del);

  return (
    <ul className="w-44 flex flex-col gap-4">
      {tests?.map((test) => (
        <Card key={test.index}>
          <h3>{test.index}</h3>
          <p>{test.name}</p>
          <button
            onClick={() => delTests(test.index)}
            className="bg-gray-800 text-white "
          >
            Del
          </button>
        </Card>
      ))}
    </ul>
  );
}
