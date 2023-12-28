import { PropsWithChildren } from "react";
import { ClassNameValue } from "tailwind-merge";

export type BaseProps<P = unknown> = PropsWithChildren<P> & {
  className?: ClassNameValue;
};
