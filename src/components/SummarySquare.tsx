import { ReactNode } from "react";

interface SummarySquareProps {
  children: ReactNode;
  className?: string;
}

export default function SummarySquare({ children, className = "" }: SummarySquareProps) {
  return (
    <section className={`rounded-3xl flex justify-center items-center gap-2.5 relative ${className}`}>
      {children}
    </section>
  );
}
