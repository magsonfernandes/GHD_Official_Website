import Image from "next/image";
import Link from "next/link";
import { ContactNavLink } from "@/components/contact/ContactNavLink";
import { GHD_LOGO, NAV_ITEMS, SITE, SOCIAL_LINKS } from "@/lib/constants";

type IconProps = {
  className?: string;
};

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M13.5 8.5H16V5.5H13.5C11.01 5.5 9 7.51 9 10v2.5H7v3h2V21h3v-5.5h2.6L15 13h-3v-2.5c0-.83.67-1.5 1.5-1.5z" />
    </svg>
  );
}

function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M6.94 5a2 2 0 1 1 .02 4 2 2 0 0 1-.02-4ZM5 8.75h3.88V20H5V8.75Zm6.13 0H15v1.53h.05c.55-.98 1.9-2.02 3.91-2.02 4.18 0 4.95 2.75 4.95 6.33V20H20v-5.56c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94V20h-3.89V8.75Z" />
    </svg>
  );
}

const SOCIAL_ICONS = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  x: XIcon,
  linkedin: LinkedInIcon,
} as const;

export function Footer() {
  return (
    <footer id="contact" className="site-footer py-16 sm:py-20">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center px-6 text-center">
        <nav className="w-full" aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-7 md:gap-x-9">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                {item.label === "CONTACT" ? (
                  <ContactNavLink className="font-body text-[9px] font-normal uppercase tracking-[0.13em] text-charcoal/80 transition-[color,opacity] duration-300 hover:text-charcoal sm:text-[10px] sm:tracking-[0.14em]">
                    {item.label}
                  </ContactNavLink>
                ) : (
                  <Link
                    href={item.href}
                    className="font-body text-[9px] font-normal uppercase tracking-[0.13em] text-charcoal/80 transition-[color,opacity] duration-300 hover:text-charcoal sm:text-[10px] sm:tracking-[0.14em]"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/"
          className="relative mt-8 block h-9 w-[10rem] sm:mt-10 sm:h-10 sm:w-[11.5rem] md:h-11 md:w-[13rem]"
          aria-label={`${SITE.name} home`}
        >
          <Image
            src={GHD_LOGO}
            alt={SITE.name}
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 160px, 208px"
          />
        </Link>

        <ul className="mt-7 flex items-center justify-center gap-5 sm:mt-8 sm:gap-6">
          {SOCIAL_LINKS.map((social) => {
            const Icon = SOCIAL_ICONS[social.icon];

            return (
              <li key={social.icon}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex text-charcoal/70 transition-[color,opacity] duration-300 hover:text-charcoal"
                >
                  <Icon className="size-4 sm:size-[18px]" />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 w-full border-t border-charcoal/10 pt-6 sm:mt-10 sm:pt-7">
          <Link
            href="/privacy"
            className="font-body text-[8px] uppercase tracking-[0.12em] text-charcoal/65 transition-colors hover:text-charcoal sm:text-[9px]"
          >
            Privacy Policy
          </Link>
          <p className="mt-3 font-body text-[8px] tracking-[0.03em] text-charcoal/55 sm:text-[9px]">
            © 2026 GHD. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
