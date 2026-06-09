import Image from "next/image";
import { ROYAL_STUDIO } from "@/lib/constants";
import { ReserveButton } from "@/components/ui/ReserveButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

function DetailBlock({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-l-2 border-[#733E24] pl-4">
      <p className="font-body text-[10px] font-medium uppercase tracking-[0.16em] text-grey">
        {label}
      </p>
      <p className="mt-1 font-heading text-lg font-medium text-charcoal sm:text-xl">
        {value}
      </p>
    </div>
  );
}

export function RoomsContent() {
  return (
    <>
      <section className="bg-muted pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <SectionLabel>Accommodation</SectionLabel>
          <h1 className="mt-4 font-heading text-4xl font-medium leading-tight text-charcoal sm:text-5xl md:text-6xl">
            Rooms at Nivaãra
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-body text-base font-light leading-relaxed text-grey sm:text-lg">
            Thoughtfully appointed spaces where natural light, contemporary
            comfort, and quiet elegance come together for a restorative stay in
            Nerul.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-14 md:py-20 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <SectionLabel as="span">{ROYAL_STUDIO.name}</SectionLabel>
          <h2 className="mt-3 font-heading text-3xl font-medium text-charcoal sm:text-4xl">
            {ROYAL_STUDIO.name}
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <DetailBlock label="Bed" value={ROYAL_STUDIO.beds} />
            <DetailBlock
              label="Occupancy"
              value={`Sleeps ${ROYAL_STUDIO.sleeps}`}
            />
            <DetailBlock label="Size" value={ROYAL_STUDIO.size} />
          </div>

          <div className="mt-10">
            <h3 className="font-body text-xs font-medium uppercase tracking-[0.16em] text-charcoal">
              About the room
            </h3>
            <p className="mt-4 font-body text-base font-light leading-relaxed text-grey">
              {ROYAL_STUDIO.description}
            </p>
          </div>

          <div className="mt-10">
            <ReserveButton variant="filled" />
          </div>
        </div>
      </section>

      <section className="bg-muted px-6 py-14 md:py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <SectionLabel>Gallery</SectionLabel>
            <h2 className="mt-3 font-heading text-3xl font-medium text-charcoal sm:text-4xl">
              Inside the Royal Studio
            </h2>
            <p className="mt-4 font-body text-sm font-light leading-relaxed text-grey sm:text-base">
              A closer look at the room, workspace, and ensuite designed for
              both short escapes and longer stays.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {ROYAL_STUDIO.gallery.map((image, index) => (
              <div
                key={image.src}
                className={cn(
                  "relative aspect-[4/3] overflow-hidden bg-white",
                  index === 0 && "sm:col-span-2 lg:col-span-2 lg:aspect-[2.05/1]",
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-14 md:py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionLabel>Amenities</SectionLabel>
              <h2 className="mt-3 font-heading text-3xl font-medium text-charcoal sm:text-4xl">
                Room comforts
              </h2>
              <p className="mt-4 font-body text-sm font-light leading-relaxed text-grey sm:text-base">
                Every detail is considered for ease, comfort, and a seamless
                stay.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {ROYAL_STUDIO.amenities.map((amenity) => (
                  <li
                    key={amenity}
                    className="border border-border bg-muted/30 px-4 py-3 font-body text-sm font-light text-charcoal"
                  >
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionLabel>During your stay</SectionLabel>
              <h2 className="mt-3 font-heading text-3xl font-medium text-charcoal sm:text-4xl">
                House rules & timings
              </h2>

              <div className="mt-8 border border-border bg-muted/30 p-6 sm:p-8">
                <h3 className="font-body text-xs font-medium uppercase tracking-[0.16em] text-charcoal">
                  Timings
                </h3>
                <ul className="mt-4 space-y-3">
                  {ROYAL_STUDIO.duringStay.timings.map((timing) => (
                    <li
                      key={timing.label}
                      className="flex items-start justify-between gap-4 border-b border-border pb-3 last:border-b-0 last:pb-0"
                    >
                      <span className="font-body text-sm font-medium text-charcoal">
                        {timing.label}
                      </span>
                      <span className="text-right font-body text-sm font-light text-grey">
                        {timing.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <ul className="mt-6 space-y-3">
                {ROYAL_STUDIO.duringStay.guidelines.map((guideline) => (
                  <li
                    key={guideline}
                    className="font-body text-sm font-light leading-relaxed text-grey"
                  >
                    {guideline}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
