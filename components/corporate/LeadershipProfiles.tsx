"use client";

import { LEADERSHIP } from "@/lib/corporate-content";
import { cn } from "@/lib/utils";
import { FadeInSection, SectionHeading } from "./CorporateUi";

type Leader = (typeof LEADERSHIP.profiles)[number];

function LeadershipCard({ leader }: { leader: Leader }) {
  const hasBio = Boolean(leader.bio?.trim());

  return (
    <article className="group border-t border-[#E6DDCF] pt-8 text-center transition-colors duration-500 hover:border-[#C6A86B]">
      <h3 className="font-heading text-2xl font-normal leading-snug text-black sm:text-[1.75rem]">
        {leader.name}
      </h3>
      <p className="mt-3 font-body text-[0.68rem] font-normal uppercase tracking-[0.16em] text-[#C6A86B]">
        {leader.designation}
      </p>
      {hasBio ? (
        <p className="mx-auto mt-4 max-w-sm font-body text-sm font-normal leading-relaxed text-black/75">
          {leader.bio}
        </p>
      ) : null}
    </article>
  );
}

export function LeadershipProfiles({ className }: { className?: string }) {
  const count = LEADERSHIP.profiles.length;
  const gridCols =
    count <= 2
      ? "sm:grid-cols-2"
      : count === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={cn("grid gap-10 sm:gap-8 lg:gap-10", gridCols, className)}>
      {LEADERSHIP.profiles.map((leader) => (
        <FadeInSection key={leader.name}>
          <LeadershipCard leader={leader} />
        </FadeInSection>
      ))}
    </div>
  );
}

export function OurLeadershipSection({ className }: { className?: string }) {
  return (
    <section
      id="our-leadership"
      className={cn(
        "border-t border-[#E6DDCF] bg-white py-12 sm:py-16 lg:py-20",
        className,
      )}
    >
      <div className="mx-auto max-w-[1100px] px-6 text-center lg:px-10">
        <FadeInSection>
          <SectionHeading className="text-center">{LEADERSHIP.headline}</SectionHeading>
          <h3 className="mt-5 font-heading text-2xl font-normal text-black sm:mt-6 sm:text-3xl">
            {LEADERSHIP.supportingHeadline}
          </h3>
          <p className="mx-auto mt-5 max-w-3xl font-body text-base font-normal leading-relaxed text-black sm:mt-6 sm:text-[1.0625rem]">
            {LEADERSHIP.paragraph}
          </p>
        </FadeInSection>

        <div className="mt-12 sm:mt-14 lg:mt-16">
          <LeadershipProfiles />
        </div>
      </div>
    </section>
  );
}
