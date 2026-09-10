import Image from "next/image";
import Link from "next/link";
import {
  SEAFOOD_BLOG,
  type SeafoodRestaurant,
} from "@/lib/seafood-blog";
import { sectionBodyClass, sectionHeadingClass } from "@/lib/section-typography";

const bodyClass = sectionBodyClass(false, "mt-0 text-left");

function EditorialPhotoPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="relative aspect-[21/9] w-full bg-[#e8e2d8] sm:aspect-[2.4/1]"
      role="img"
      aria-label={`${label} photo placeholder`}
    >
      <span className="absolute inset-0 flex items-center justify-center px-4 text-center font-body text-[0.65rem] font-medium uppercase tracking-[0.18em] text-charcoal/40">
        Photo coming soon
      </span>
    </div>
  );
}

function EditorialPhoto({
  label,
  image,
  className,
}: {
  label: string;
  image?: string;
  className?: string;
}) {
  if (!image) {
    return (
      <div className={className}>
        <EditorialPhotoPlaceholder label={label} />
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-[21/9] w-full overflow-hidden bg-muted sm:aspect-[2.4/1] ${className ?? ""}`}
    >
      <Image
        src={image}
        alt={label}
        fill
        className="object-cover"
        sizes="100vw"
      />
    </div>
  );
}

function RestaurantCard({
  restaurant,
  index,
}: {
  restaurant: SeafoodRestaurant;
  index: number;
}) {
  return (
    <article id={restaurant.id} className="scroll-mt-28">
      <div className="-mx-6 md:-mx-12 lg:-mx-16 xl:-mx-24">
        <EditorialPhoto label={restaurant.name} image={restaurant.image} />
      </div>

      <div className="mt-6 md:mt-8">
        <p className="font-display-wide text-xs font-black uppercase tracking-[0.28em] text-[#543119] sm:text-sm">
          {String(index + 1).padStart(2, "0")}
        </p>

        <h3 className={sectionHeadingClass(false, "mt-3 text-left")}>
          {restaurant.name}
        </h3>

        <p className="mt-2 font-body text-sm font-light text-grey">
          {restaurant.location}
        </p>

        <p className={`mt-5 ${bodyClass}`}>
          <strong className="font-medium">Best for:</strong> {restaurant.bestFor}
        </p>

        <p className={`mt-2 ${bodyClass}`}>
          <strong className="font-medium">Signature:</strong> {restaurant.signature}
        </p>

        <div className="mt-5 space-y-4">
          {restaurant.paragraphs.map((paragraph, paragraphIndex) => (
            <p
              key={`${restaurant.id}-p-${paragraphIndex}`}
              className={bodyClass}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-6 space-y-2 border-t border-border pt-5">
          <p className={`${bodyClass} text-sm md:text-base`}>
            <strong className="font-medium">Ambience:</strong>{" "}
            {restaurant.ambience}
          </p>
          <p className={`${bodyClass} text-sm md:text-base`}>
            <strong className="font-medium">Reservations:</strong>{" "}
            {restaurant.reservation}
          </p>
        </div>
      </div>
    </article>
  );
}

export function SeafoodBlogContent() {
  const {
    meta,
    hero,
    intro,
    seafoodExperience,
    journey,
    northSection,
    southSection,
    chooseExperience,
    outro,
  } = SEAFOOD_BLOG;

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="flex flex-wrap gap-x-4 gap-y-2 font-body text-[0.65rem] font-medium uppercase tracking-[0.14em] text-grey sm:text-xs">
          <span>{meta.region}</span>
          <span aria-hidden>·</span>
          <span>{meta.guideType}</span>
          <span aria-hidden>·</span>
          <span>{meta.placesCovered}</span>
          <span aria-hidden>·</span>
          <span>{meta.readTime}</span>
        </div>

        <p className={`${sectionBodyClass(false, "mt-8 text-left")} max-w-3xl text-lg sm:text-xl`}>
          {hero.subheading}
        </p>

        <div className="mt-8 max-w-3xl space-y-5">
          {intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className={bodyClass}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Culinary journey */}
        <div className="mt-12 border border-border bg-muted/40 px-5 py-6 sm:px-8 sm:py-8">
          <p className="font-body text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[#543119]">
            Culinary journey
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 font-heading text-lg text-charcoal sm:text-xl md:text-2xl">
            {journey.map((stop, index) => (
              <span key={stop} className="inline-flex items-center gap-2">
                {index > 0 ? (
                  <span className="font-body text-sm text-[#C6A86B]" aria-hidden>
                    →
                  </span>
                ) : null}
                <span>{stop}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Seafood experience */}
        <div className="mt-14 max-w-3xl md:mt-16">
          <h2 className={sectionHeadingClass(false, "text-left")}>
            {seafoodExperience.title}
          </h2>
          <div className="mt-6 space-y-4">
            {seafoodExperience.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className={bodyClass}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* North Goa */}
        <div className="mt-16 border-t border-border pt-12 md:mt-20 md:pt-16">
          <h2 className={sectionHeadingClass(false, "text-left")}>
            {northSection.title}
          </h2>
          <p className={`mt-5 max-w-3xl ${bodyClass}`}>{northSection.intro}</p>

          <div className="mt-10 space-y-14 md:mt-14 md:space-y-20">
            {northSection.restaurants.map((restaurant, index) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* South Goa */}
        <div className="mt-16 border-t border-border pt-12 md:mt-20 md:pt-16">
          <h2 className={sectionHeadingClass(false, "text-left")}>
            {southSection.title}
          </h2>
          <p className={`mt-5 max-w-3xl ${bodyClass}`}>{southSection.intro}</p>

          <div className="mt-10 space-y-14 md:mt-14 md:space-y-20">
            {southSection.restaurants.map((restaurant, index) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                index={northSection.restaurants.length + index}
              />
            ))}
          </div>
        </div>

        {/* Choose your experience */}
        <div className="mt-16 border-t border-border pt-12 md:mt-20 md:pt-16">
          <h2 className={sectionHeadingClass(false, "text-left")}>
            Choose Your Experience
          </h2>
          <p className={`mt-4 max-w-2xl ${bodyClass}`}>
            Match the evening you want with the table that suits it.
          </p>

          <ul className="mt-10 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {chooseExperience.map((item) => (
              <li key={item.hrefId}>
                <a
                  href={`#${item.hrefId}`}
                  className="group flex h-full flex-col border border-border bg-white px-5 py-6 transition-colors duration-300 hover:border-[#C6A86B]"
                >
                  <span className="font-body text-[0.65rem] font-medium uppercase tracking-[0.14em] text-[#543119]">
                    {item.label}
                  </span>
                  <span className="mt-3 font-heading text-xl text-charcoal transition-colors group-hover:text-[#543119] sm:text-2xl">
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Outro */}
        <div className="mt-16 border-t border-border pt-12 md:mt-20 md:pt-16">
          <h2 className={sectionHeadingClass(false, "text-left")}>
            {outro.title}
          </h2>
          <div className="mt-6 max-w-3xl space-y-5">
            {outro.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className={bodyClass}>
                {paragraph}
              </p>
            ))}
          </div>

          <Link
            href={outro.ctaHref}
            className="mt-10 inline-flex items-center font-body text-xs font-medium uppercase tracking-[0.14em] text-charcoal transition-colors hover:text-[#543119]"
          >
            {outro.ctaLabel}
            <span className="ml-2" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
