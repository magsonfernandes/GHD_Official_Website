import { cn } from "@/lib/utils";

export function sectionHeadingClass(light = false, className?: string) {
  return cn(
    "font-heading mt-3 max-w-none text-[2.75rem] font-light leading-[1.15] lg:mt-3.5 xl:text-[3rem]",
    light ? "text-white" : "text-charcoal",
    className,
  );
}

export function sectionBodyClass(light = false, className?: string) {
  return cn(
    "mt-4 max-w-none font-body text-[0.9375rem] font-normal leading-[1.75] sm:text-base lg:mt-5",
    light ? "text-white" : "text-charcoal/80",
    className,
  );
}
