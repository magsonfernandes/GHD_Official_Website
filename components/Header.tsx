"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { BrandsNavItem } from "@/components/BrandsMegaMenu";
import { ContactNavLink } from "@/components/contact/ContactNavLink";
import { getDefaultBookingHref } from "@/lib/booking";
import { GHD_LOGO, GHD_LOGO_WHITE, NAV_ITEMS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const GHD_BROWN = "#733E24";

function contactClass(scrolled: boolean) {
  return cn(
    "site-header__contact font-body text-[0.6875rem] font-normal tracking-[0.04em] transition-colors duration-500 sm:text-[0.75rem]",
    scrolled
      ? "text-[#733E24] hover:text-[#733E24]/65"
      : "text-white/90 hover:text-white",
  );
}

function NavLinks({ scrolled }: { scrolled: boolean }) {
  return (
    <>
      {NAV_ITEMS.map((item) =>
        item.label === "BRANDS" ? (
          <BrandsNavItem key={item.href} scrolled={scrolled} />
        ) : item.label === "CONTACT" ? (
          <li key={item.href} className="shrink-0">
            <ContactNavLink
              className={cn(
                "site-header__nav-link font-body text-[0.58rem] font-medium uppercase tracking-[0.12em] transition-colors duration-500 sm:text-[0.65rem] md:text-xs",
                scrolled
                  ? "text-charcoal hover:text-charcoal/70"
                  : "text-white/90 hover:text-white",
              )}
              style={{ color: scrolled ? "#111111" : undefined }}
            >
              {item.label}
            </ContactNavLink>
          </li>
        ) : (
          <li key={item.href} className="shrink-0">
            <Link
              href={item.href}
              className={cn(
                "site-header__nav-link font-body text-[0.58rem] font-medium tracking-[0.12em] transition-colors duration-500 sm:text-[0.65rem] md:text-xs",
                item.label !== "FAQs" && "uppercase",
                scrolled
                  ? "text-charcoal hover:text-charcoal/70"
                  : "text-white/90 hover:text-white",
              )}
              style={{ color: scrolled ? "#111111" : undefined }}
            >
              {item.label}
            </Link>
          </li>
        ),
      )}
    </>
  );
}

function TransparentHeaderContent() {
  return (
    <>
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 sm:px-6 lg:px-10">
        <div
          className="justify-self-start border border-white/80 px-3 py-1.5 font-body text-[0.6875rem] font-normal tracking-[0.08em] text-white/90 sm:px-4 sm:py-2 sm:text-[0.75rem]"
          aria-label={SITE.property}
        >
          {SITE.property}
        </div>

        <Link
          href="/"
          className="site-header__logo relative block h-9 w-[7.5rem] shrink-0 justify-self-center sm:h-10 sm:w-[8.5rem] md:h-11 md:w-[9.5rem] lg:h-12 lg:w-[10.5rem]"
          aria-label={`${SITE.name} home`}
        >
          <Image
            src={GHD_LOGO_WHITE}
            alt={SITE.name}
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 120px, 168px"
            priority
          />
        </Link>

        <div className={cn("flex flex-col items-end justify-self-end leading-snug", contactClass(false))}>
          <a href={SITE.phoneHref} className="site-header__contact whitespace-nowrap transition-colors duration-500">
            {SITE.phone}
          </a>
          <a
            href={SITE.phoneSecondaryHref}
            className="site-header__contact mt-0.5 whitespace-nowrap transition-colors duration-500"
          >
            {SITE.phoneSecondary}
          </a>
        </div>
      </div>

      <div className="flex justify-center px-6 sm:px-8">
        <div className="h-[0.5px] w-[96%] max-w-7xl bg-white/80 sm:w-[95%]" aria-hidden />
      </div>

      <nav className="relative bg-transparent" aria-label="Primary navigation">
        <ul className="mx-auto flex h-12 max-w-7xl items-center justify-center gap-4 overflow-x-auto px-4 sm:gap-6 sm:px-6 md:gap-8 lg:gap-10 lg:px-10">
          <NavLinks scrolled={false} />
        </ul>
      </nav>
    </>
  );
}

function StickyHeaderContent() {
  return (
    <div className="flex h-16 w-full items-stretch bg-white">
      <div className="flex min-w-0 flex-1 items-center gap-5 px-4 sm:gap-7 sm:px-6 lg:gap-10 lg:px-10">
        <Link
          href="/"
          className="site-header__logo relative block h-9 w-[7rem] shrink-0 sm:h-10 sm:w-[8rem] md:w-[9rem]"
          aria-label={`${SITE.name} home`}
        >
          <Image
            src={GHD_LOGO}
            alt={SITE.name}
            fill
            className="object-contain object-left"
            sizes="(max-width: 768px) 112px, 144px"
            priority
          />
        </Link>

        <nav className="relative min-w-0 flex-1" aria-label="Primary navigation">
          <ul className="flex items-center gap-3 overflow-x-auto sm:gap-5 md:gap-6 lg:gap-8">
            <NavLinks scrolled={true} />
          </ul>
        </nav>
      </div>

      <Link
        href={getDefaultBookingHref()}
        className="flex h-full shrink-0 items-center justify-center rounded-none bg-[#733E24] px-5 font-body text-[0.62rem] font-medium uppercase tracking-[0.1em] text-white transition-colors duration-500 hover:bg-[#733E24]/90 sm:px-7 sm:text-[0.7rem] lg:px-9"
      >
        Reserve
      </Link>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrollY, setScrollY] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(132);
  const heroHeaderRef = useRef<HTMLElement>(null);

  const measureHeader = useCallback(() => {
    if (heroHeaderRef.current) {
      setHeaderHeight(heroHeaderRef.current.offsetHeight);
    }
  }, []);

  useLayoutEffect(() => {
    measureHeader();
    window.addEventListener("resize", measureHeader, { passive: true });
    return () => window.removeEventListener("resize", measureHeader);
  }, [measureHeader]);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroOffset = Math.min(scrollY, headerHeight);
  const showStickyHeader = !isHome || scrollY >= headerHeight;

  if (!isHome) {
    return (
      <header
        className="site-header site-header--scrolled fixed inset-x-0 top-0 z-[100] bg-white shadow-[0_4px_24px_rgba(17,17,17,0.06)]"
        style={{ backgroundColor: "#ffffff" }}
      >
        <StickyHeaderContent />
      </header>
    );
  }

  return (
    <>
      <header
        ref={heroHeaderRef}
        className="site-header pointer-events-none fixed inset-x-0 top-0 z-[100] bg-transparent will-change-transform"
        style={{
          transform: `translate3d(0, -${heroOffset}px, 0)`,
        }}
        aria-hidden={showStickyHeader}
      >
        <div className="pointer-events-auto">
          <TransparentHeaderContent />
        </div>
      </header>

      <header
        data-scrolled={showStickyHeader}
        className={cn(
          "site-header site-header--scrolled fixed inset-x-0 top-0 z-[100] bg-white shadow-[0_4px_24px_rgba(17,17,17,0.06)] transition-[opacity,transform] duration-300 ease-out",
          showStickyHeader
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
        style={{ backgroundColor: "#ffffff" }}
        aria-hidden={!showStickyHeader}
      >
        <StickyHeaderContent />
      </header>
    </>
  );
}
