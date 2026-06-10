import Image from "next/image";
import Link from "next/link";
import { BeachesBlogContent } from "@/components/BeachesBlogContent";
import { getExperienceBlogContent } from "@/lib/experience-content";
import type { ExperiencePost } from "@/lib/experiences";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { sectionBodyClass, sectionHeadingClass } from "@/lib/section-typography";

type ExperienceBlogPostProps = {
  post: ExperiencePost;
};

export function ExperienceBlogPost({ post }: ExperienceBlogPostProps) {
  const paragraphs = getExperienceBlogContent(post.slug);
  const isBeachesGuide = post.slug === "beaches-of-goa";

  return (
    <article>
      <section className="bg-muted pt-28 pb-10 md:pt-32 md:pb-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Link
            href="/experiences"
            className="inline-flex font-body text-xs font-medium uppercase tracking-[0.14em] text-charcoal transition-colors hover:text-[#733E24]"
          >
            ← All city attractions
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 font-body text-xs font-light text-grey">
            <SectionLabel as="span">{post.category}</SectionLabel>
            <span aria-hidden>·</span>
            <time dateTime={post.date}>{post.date}</time>
            <span aria-hidden>·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className={sectionHeadingClass(false, "mt-5 text-left")}>
            {post.title}
          </h1>

          {!isBeachesGuide ? (
            <p className={sectionBodyClass(false, "mt-5 text-left")}>
              {post.excerpt}
            </p>
          ) : null}
        </div>
      </section>

      <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted sm:aspect-[2.1/1]">
        <Image
          src={post.image}
          alt={post.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {isBeachesGuide ? (
        <BeachesBlogContent />
      ) : (
        <section className="bg-white px-6 py-14 md:py-20 lg:px-10">
          <div className="mx-auto max-w-3xl">
            {paragraphs.length > 0 ? (
              <div className="space-y-6">
                {paragraphs.map((paragraph, index) => (
                  <p
                    key={`${post.slug}-paragraph-${index}`}
                    className={sectionBodyClass(false, "mt-0 text-left")}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <p className="font-body text-sm font-light italic text-grey">
                Full article content coming soon.
              </p>
            )}
          </div>
        </section>
      )}
    </article>
  );
}
