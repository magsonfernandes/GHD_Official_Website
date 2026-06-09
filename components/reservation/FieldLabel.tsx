import { cn } from "@/lib/utils";

type FieldLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function FieldLabel({ children, className }: FieldLabelProps) {
  return (
    <span
      className={cn(
        "font-body text-[9px] font-medium uppercase tracking-[0.2em] text-grey",
        className,
      )}
    >
      {children}
    </span>
  );
}
