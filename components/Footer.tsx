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

function YouTubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.04 5 12 5 12 5s-6.04 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26.3 26.3 0 0 0 2 12a26.3 26.3 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.96 19 12 19 12 19s6.04 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26.3 26.3 0 0 0 22 12a26.3 26.3 0 0 0-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
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

function PinterestIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 2a10 10 0 0 0-3.46 19.4c-.05-.8-.1-2.03.02-2.9l1.2-5.1s-.3-.6-.3-1.48c0-1.39.8-2.43 1.9-2.43.9 0 1.33.67 1.33 1.48 0 .9-.57 2.25-.87 3.5-.25 1.05.53 1.9 1.57 1.9 1.88 0 3.14-2.4 3.14-5.25 0-2.16-1.46-3.77-4.1-3.77-2.97 0-4.82 2.22-4.82 4.7 0 .86.25 1.46.64 1.92.07.08.08.15.06.23l-.24.95c-.04.15-.12.19-.28.12-1.05-.43-1.7-1.77-1.7-2.85 0-2.32 1.97-5.1 5.87-5.1 3.22 0 5.34 2.36 5.34 4.89 0 3.37-1.87 5.89-4.63 5.89-.99 0-1.92-.55-2.24-1.17l-.67 2.45c-.2.8-.76 1.8-1.13 2.41A10 10 0 1 0 12 2z" />
    </svg>
  );
}

const SOCIAL_ICONS = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  youtube: YouTubeIcon,
  x: XIcon,
  pinterest: PinterestIcon,
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
          className="relative mt-8 block h-9 w-[8.5rem] sm:mt-10 sm:h-10 sm:w-[9.5rem] md:h-11 md:w-[10.5rem]"
          aria-label={`${SITE.name} home`}
        >
          <Image
            src={GHD_LOGO}
            alt={SITE.name}
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 136px, 168px"
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
