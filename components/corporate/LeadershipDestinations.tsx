"use client";

import Image from "next/image";
import { DESTINATIONS, GET_IN_TOUCH, LEADERSHIP } from "@/lib/corporate-content";
import { cn } from "@/lib/utils";
import { FadeInSection, GoldButton, SectionEyebrow, SectionHeading } from "./CorporateUi";

export function LeadershipSection({ className }: { className?: string }) {
  return (
    <section className={cn("bg-[#FAF7F2] py-10 sm:py-12 lg:py-14", className)}>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <FadeInSection className="max-w-xl">
          <SectionEyebrow>{LEADERSHIP.eyebrow}</SectionEyebrow>
          <SectionHeading className="mt-2">{LEADERSHIP.headline}</SectionHeading>
        </FadeInSection>

        <FadeInSection className="mt-6">
          <GoldButton href={LEADERSHIP.cta.href}>{LEADERSHIP.cta.label}</GoldButton>
        </FadeInSection>
      </div>
    </section>
  );
}

export function GetInTouchSection({
  className,
  centered = false,
}: {
  className?: string;
  centered?: boolean;
}) {
  return (
    <section className={cn("border-t border-[#E6DDCF] bg-[#FAF7F2] py-10 sm:py-12 lg:py-14", className)}>
      <div
        className={cn(
          "mx-auto max-w-[1200px] px-6 lg:px-10",
          centered && "text-center",
        )}
      >
        <FadeInSection className={cn("max-w-xl", centered && "mx-auto")}>
          <SectionEyebrow>{GET_IN_TOUCH.eyebrow}</SectionEyebrow>
          <SectionHeading className={cn("mt-2", centered && "text-center")}>
            {GET_IN_TOUCH.headline}
          </SectionHeading>
        </FadeInSection>

        <FadeInSection className={cn("mt-6", centered && "flex justify-center")}>
          <GoldButton href={GET_IN_TOUCH.cta.href}>{GET_IN_TOUCH.cta.label}</GoldButton>
        </FadeInSection>
      </div>
    </section>
  );
}

export function DestinationSection() {
  return (
    <section id="destinations" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <FadeInSection>
          <SectionEyebrow>{DESTINATIONS.eyebrow}</SectionEyebrow>
          <SectionHeading className="mt-3">{DESTINATIONS.headline}</SectionHeading>
        </FadeInSection>

        <div className="mt-12 space-y-6 lg:mt-16">
          {DESTINATIONS.items.map((item) => (
            <FadeInSection key={item.brandName}>
              <a
                href={item.href}
                className="group grid overflow-hidden border border-[#E6DDCF] bg-white md:grid-cols-[1fr_280px]"
              >
                <div className="p-6 sm:p-8 lg:p-10">
                  <p className="font-body text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[#C6A86B]">
                    {item.region}
                  </p>
                  <h3 className="mt-2 font-heading text-2xl text-[#2D2D2D] sm:text-3xl">
                    {item.brandName}
                  </h3>
                  {item.location ? (
                    <>
                      <p className="mt-3 font-body text-sm text-[#2D2D2D]">{item.location}</p>
                      {item.detail ? (
                        <p className="font-body text-sm text-[#6F6A62]">{item.detail}</p>
                      ) : null}
                    </>
                  ) : null}
                  <span className="mt-6 inline-flex font-body text-[0.68rem] font-medium uppercase tracking-[0.14em] text-[#2D2D2D] transition-colors group-hover:text-[#C6A86B]">
                    Explore {item.brandName} →
                  </span>
                </div>
                <div className="relative min-h-[180px] md:min-h-full">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="280px"
                  />
                </div>
              </a>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
