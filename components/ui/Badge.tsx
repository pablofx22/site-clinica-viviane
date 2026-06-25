import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="badge">
      <span className="badge-dot"></span>
      {children}
    </span>
  );
}