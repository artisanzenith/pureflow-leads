import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50",
        hover && "transition-all duration-200 hover:border-brand-200 hover:shadow-md dark:hover:border-brand-800/50",
        className
      )}
    >
      {children}
    </div>
  );
}
