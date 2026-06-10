import { SectionLabel } from "@/components/ui/SectionLabel";
import { sectionBodyClass, sectionHeadingClass } from "@/lib/section-typography";
import { cn } from "@/lib/utils";

type SectionIntroProps = {
  label?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
  titleAs?: "h1" | "h2" | "h3";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionIntro({
  label,
  title,
  description,
  light = false,
  align = "center",
  titleAs: Title = "h2",
  className,
  titleClassName,
  descriptionClassName,
}: SectionIntroProps) {
  return (
    <div
      className={cn(
        align === "center" && "text-center",
        align === "left" && "text-left",
        className,
      )}
    >
      {label ? <SectionLabel light={light}>{label}</SectionLabel> : null}
      <Title className={sectionHeadingClass(light, titleClassName)}>{title}</Title>
      {description ? (
        <p className={sectionBodyClass(light, descriptionClassName)}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
