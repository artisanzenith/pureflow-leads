import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "brand" | "muted";
  className?: string;
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variant === "brand" && "bg-brand-100 text-brand-800 dark:bg-brand-900/50 dark:text-brand-200",
        variant === "default" && "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
        variant === "muted" && "bg-slate-50 text-slate-500 dark:bg-slate-900 dark:text-slate-400",
        className
      )}
    >
      {children}
    </span>
  );
}
