import { type ReactNode } from "react";
import { cn } from "~/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
}) => {
  return <div className={cn("mx-3 sm:mx-4 lg:container w-full min-w-0 overflow-x-hidden", className)}>{children}</div>;
};
