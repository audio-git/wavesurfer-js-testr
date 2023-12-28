import { ComponentProps, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export default function Card({
  children,
  className,
  ...attr
}: ComponentProps<"div">) {
  return (
    <div
      className={twMerge(
        "w-full p-4 surface rounded-lg shadow-lg",
        className
      )}
      {...attr}
    >
      {children}
    </div>
  );
}
