import { cn } from "@/lib/utils";

const STEPS = [
  { number: 1, label: "Choose Your Room" },
  { number: 2, label: "Complete Your Stay" },
] as const;

type BookingTimelineProps = {
  currentStep: 1 | 2;
};

export function BookingTimeline({ currentStep }: BookingTimelineProps) {
  return (
    <ol className="mx-auto flex w-fit max-w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-5">
      {STEPS.map((step) => {
        const isCompleted = step.number < currentStep;
        const isCurrent = step.number === currentStep;

        return (
          <li
            key={step.number}
            className="flex shrink-0 items-center gap-1.5"
          >
            <div
              className={cn(
                "flex size-5 shrink-0 items-center justify-center rounded-full border font-body text-[10px] font-medium leading-none transition-colors",
                isCompleted || isCurrent
                  ? "border-[#543119] bg-[#543119] text-white"
                  : "border-border bg-white text-grey",
              )}
              aria-current={isCurrent ? "step" : undefined}
            >
              {step.number}
            </div>
            <p
              className={cn(
                "whitespace-nowrap font-body text-[10px] leading-none tracking-[0.02em] sm:text-[11px]",
                isCompleted || isCurrent ? "text-charcoal" : "text-grey",
              )}
            >
              {step.label}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
