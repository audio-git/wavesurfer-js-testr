import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

function PageContainer({
  children,
  className,
  ...attr
}: ComponentProps<"div">) {
  return (
    <div
      className={twMerge("w-full h-full grid place-items-center", className)}
      {...attr}
    >
      {children}
    </div>
  );
}

function PageBody({ children, className, ...attr }: ComponentProps<"main">) {
  return (
    <main
      className={twMerge(
        "w-full h-[calc(100dvh_-_4rem)] flex flex-col items-center",
        className
      )}
      {...attr}
    >
      {children}
    </main>
  );
}

function PageHeader({
  children,
  className,
  ...attr
}: ComponentProps<"header">) {
  return (
    <header
      className={twMerge(
        "w-full min-w-fit min-h-[4rem] flex justify-between items-center px-8 background",
        className
      )}
      {...attr}
    >
      {children}
    </header>
  );
}

const Container = PageContainer;
const Body = PageBody;
const Header = PageHeader;

const Page = { Container, Body, Header };

export { Container, Body, Header };
export default Page;
