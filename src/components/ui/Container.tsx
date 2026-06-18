import { ReactNode } from "react";
import { layout } from "@/constants/layout";

type ContainerProps = {
  children: ReactNode;
};

export default function Container({
  children,
}: ContainerProps) {
  return <div className={layout.containerWidth}>{children}</div>;
}