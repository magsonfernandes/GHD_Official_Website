import { cn } from "@/lib/utils";

export const sectionTagClass =
  "font-display-wide text-[0.6875rem] font-black uppercase tracking-[0.26em] sm:text-xs sm:tracking-[0.3em]";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
  as?: "p" | "span";
};

export function SectionLabel({
  children,
  className,
  light = false,
  as: Component = "p",
}: SectionLabelProps) {
  return (
    <Component
      className={cn(
        sectionTagClass,
        light ? "text-white" : "text-black",
        className,
      )}
    >
      {children}
    </Component>
  );
}
