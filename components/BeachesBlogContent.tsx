import Image from "next/image";
import { BEACHES_BLOG } from "@/lib/beaches-blog";

const bodyClass =
  "font-body text-sm font-light leading-relaxed text-justify text-charcoal sm:text-base md:text-lg";

function BeachPhotoPlaceholder({ beachName }: { beachName: string }) {
  return (
    <div
      className="relative aspect-[21/9] w-full bg-[#c8d5d2] sm:aspect-[2.4/1]"
      role="img"
      aria-label={`${beachName} photo placeholder`}
    >
      <span className="absolute inset-0 flex items-center justify-center px-4 text-center font-body text-[0.65rem] font-medium uppercase tracking-[0.18em] text-charcoal/45">
        Beach photo coming soon
      </span>
    </div>
  );
}

function BeachPhoto({
  beachName,
  image,
}: {
  beachName: string;
  image?: string;
}) {
  if (!image) {
    return <BeachPhotoPlaceholder beachName={beachName} />;
  }

  return (
    <div className="relative aspect-[21/9] w-full overflow-hidden bg-muted sm:aspect-[2.4/1]">
      <Image
        src={image}
        alt={beachName}
        fill
        className="object-cover"
        sizes="100vw"
      />
    </div>
  );
}

export function BeachesBlogContent() {
  const { meta, intro, beaches, quickPick, outro } = BEACHES_BLOG;

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="flex flex-wrap gap-x-4 gap-y-2 font-body text-[0.65rem] font-medium uppercase tracking-[0.14em] text-grey sm:text-xs">
          <span>{meta.region}</span>
          <span aria-hidden>·</span>
          <span>{meta.guideType}</span>
          <span aria-hidden>·</span>
          <span>{meta.beachesCovered}</span>
          <span aria-hidden>·</span>
          <span>{meta.baseLocation}</span>
        </div>

        <div className="mt-8 space-y-5">
          <p className={bodyClass}>{intro[0]}</p>
          <p className={bodyClass}>
            For guests staying in <strong className="font-medium">Nerul</strong>,
            some of Goa&apos;s most popular beaches are just minutes away, making
            it an ideal base to explore the coast.
          </p>
        </div>

        <h2 className="mt-12 font-heading text-2xl font-medium text-charcoal sm:text-3xl md:text-4xl">
          The beaches, from closest to furthest
        </h2>

        <ol className="mt-10 list-none space-y-14 md:space-y-20">
          {beaches.map((beach, index) => (
            <li key={beach.id} id={beach.id}>
              <div className="-mx-6 md:-mx-12 lg:-mx-16 xl:-mx-24">
                <BeachPhoto beachName={beach.name} image={beach.image} />
              </div>

              <div className="mt-6 md:mt-8">
                <p className="font-display-wide text-xs font-black uppercase tracking-[0.28em] text-[#733E24] sm:text-sm">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-3 font-heading text-2xl font-medium text-charcoal sm:text-3xl md:text-4xl">
                  {beach.name}
                  <span className="font-body text-lg font-light text-grey sm:text-xl md:text-2xl">
                    {" "}
                    · {beach.subtitle}
                  </span>
                </h3>

                {(beach.distance || beach.travelTime) && (
                  <div className="mt-4 space-y-1">
                    {beach.distance ? (
                      <p className={`${bodyClass} text-sm md:text-base`}>
                        <strong className="font-medium">Distance from Nerul:</strong>{" "}
                        {beach.distance}
                      </p>
                    ) : null}
                    {beach.travelTime ? (
                      <p className={`${bodyClass} text-sm md:text-base`}>
                        <strong className="font-medium">Travel time:</strong>{" "}
                        {beach.travelTime}
                      </p>
                    ) : null}
                  </div>
                )}

                <div className="mt-5 space-y-4">
                  {beach.paragraphs.map((paragraph, paragraphIndex) => (
                    <p
                      key={`${beach.id}-p-${paragraphIndex}`}
                      className={bodyClass}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <p className={`mt-5 ${bodyClass}`}>
                  <strong className="font-medium">Best for:</strong>{" "}
                  {beach.bestFor.join(", ")}.
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 border-t border-border pt-12 md:mt-20 md:pt-16">
          <h2 className="font-heading text-2xl font-medium text-charcoal sm:text-3xl md:text-4xl">
            Choosing your perfect beach
          </h2>

          <ol className="mt-8 list-none space-y-4">
            {quickPick.map((pick, index) => (
              <li key={pick.mood} className={bodyClass}>
                <span className="font-display-wide text-[0.65rem] font-black uppercase tracking-[0.22em] text-[#733E24]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="ml-3 font-medium">{pick.mood}:</span>{" "}
                {pick.beaches}
              </li>
            ))}
          </ol>

          <p className={`mt-10 ${bodyClass}`}>{outro}</p>
        </div>
      </div>
    </section>
  );
}
