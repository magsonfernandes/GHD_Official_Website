"use client";

import Image from "next/image";
import { DESTINATIONS, LEADERSHIP } from "@/lib/corporate-content";
import { FadeInSection, SectionEyebrow, SectionHeading } from "./CorporateUi";

export function LeadershipSection() {
  return (
    <section className="bg-[#FAF7F2] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <FadeInSection className="max-w-xl">
          <SectionEyebrow>{LEADERSHIP.eyebrow}</SectionEyebrow>
          <SectionHeading className="mt-3">{LEADERSHIP.headline}</SectionHeading>
        </FadeInSection>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:gap-10">
          {LEADERSHIP.profiles.map((profile) => (
            <FadeInSection key={profile.role}>
              <article className="border border-[#E6DDCF] bg-[#FCFBF8]">
                <div className="relative aspect-[4/5] bg-[#F4EFE6]">
                  {profile.image ? (
                    <Image
                      src={profile.image}
                      alt={profile.name}
                      fill
                      className="object-cover"
                      sizes="400px"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="font-body text-xs uppercase tracking-[0.14em] text-[#6F6A62]/50">
                        Portrait to be added
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 sm:p-8">
                  <p className="font-body text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[#C6A86B]">
                    {profile.role}
                  </p>
                  <h3 className="mt-2 font-heading text-2xl text-[#2D2D2D]">{profile.name}</h3>
                  <p className="mt-4 font-body text-sm leading-relaxed text-[#6F6A62]">
                    {profile.bio}
                  </p>
                </div>
              </article>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DestinationSection() {
  return (
    <section id="destinations" className="bg-[#FCFBF8] py-16 sm:py-20 lg:py-28">
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
                className="group grid overflow-hidden border border-[#E6DDCF] bg-[#FAF7F2] md:grid-cols-[1fr_280px]"
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
                  ) : (
                    <p className="mt-3 font-body text-sm uppercase tracking-[0.12em] text-[#6F6A62]">
                      Coming Soon
                    </p>
                  )}
                  {item.status === "live" ? (
                    <span className="mt-6 inline-flex font-body text-[0.68rem] font-medium uppercase tracking-[0.14em] text-[#2D2D2D] transition-colors group-hover:text-[#C6A86B]">
                      Explore Nivaãra →
                    </span>
                  ) : (
                    <span className="mt-6 inline-flex font-body text-[0.68rem] font-medium uppercase tracking-[0.14em] text-[#2D2D2D] transition-colors group-hover:text-[#C6A86B]">
                      Discover Samraya →
                    </span>
                  )}
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
