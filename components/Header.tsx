"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ContactNavLink } from "@/components/contact/ContactNavLink";
import { getDefaultBookingHref } from "@/lib/booking";
import { GHD_LOGO, GHD_LOGO_WHITE, NAV_ITEMS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

function contactClass(scrolled: boolean) {
  return cn(
    "site-header__contact font-body text-[0.6875rem] font-normal tracking-[0.04em] transition-colors duration-500 sm:text-[0.75rem]",
    scrolled
      ? "text-[#543119] hover:text-[#543119]/65"
      : "text-white/90 hover:text-white",
  );
}

function NavLinks({ scrolled }: { scrolled: boolean }) {
  return (
    <>
      {NAV_ITEMS.map((item) =>
        item.label === "CONTACT" ? (
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

const mobileNavLinkClass =
  "site-header__nav-link block w-full px-5 py-3.5 text-center font-body text-xs font-medium uppercase tracking-[0.12em] text-charcoal transition-colors hover:bg-muted/60";

function useMobileMenu() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, closeMenu]);

  return { menuOpen, setMenuOpen, closeMenu };
}

function MobileNavMenu({
  open,
  onClose,
  menuId,
}: {
  open: boolean;
  onClose: () => void;
  menuId: string;
}) {
  if (!open) return null;

  return (
    <>
      <button
        type="button"
        className="fixed inset-0 z-[99] bg-black/25 md:hidden"
        aria-label="Close menu"
        onClick={onClose}
      />

      <nav
        id={menuId}
        className="absolute inset-x-0 top-full z-[101] border-t border-border bg-white shadow-[0_12px_32px_rgba(17,17,17,0.08)] md:hidden"
        aria-label="Primary navigation"
      >
        <ul>
          {NAV_ITEMS.map((item) =>
            item.label === "CONTACT" ? (
              <li key={item.href}>
                <ContactNavLink
                  className={mobileNavLinkClass}
                  onNavigate={onClose}
                >
                  {item.label}
                </ContactNavLink>
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    mobileNavLinkClass,
                    item.label !== "FAQs" && "uppercase",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className="border-t border-border px-5 py-4">
          <Link
            href={getDefaultBookingHref()}
            onClick={onClose}
            className="flex h-11 w-full items-center justify-center bg-[#543119] font-body text-xs font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#543119]/90"
          >
            Reserve
          </Link>
        </div>
      </nav>
    </>
  );
}

function MobileMenuButton({
  open,
  onClick,
  menuId,
  light = false,
}: {
  open: boolean;
  onClick: () => void;
  menuId: string;
  light?: boolean;
}) {
  return (
    <button
      type="button"
      className={cn(
        "flex h-9 w-9 shrink-0 items-center justify-center transition-colors md:hidden",
        light
          ? "text-white hover:text-white/75"
          : "text-charcoal hover:text-charcoal/70",
      )}
      onClick={onClick}
      aria-expanded={open}
      aria-controls={menuId}
      aria-label={open ? "Close menu" : "Open menu"}
    >
      {open ? (
        <X className="h-5 w-5" aria-hidden />
      ) : (
        <Menu className="h-5 w-5" aria-hidden />
      )}
    </button>
  );
}

function TransparentHeaderContent() {
  const { menuOpen, setMenuOpen, closeMenu } = useMobileMenu();

  return (
    <div className="relative">
      <div className="px-4 pt-3 pb-3 md:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <Link
            href="/"
            className="site-header__logo relative block h-8 w-[6.5rem] shrink-0"
            aria-label={`${SITE.name} home`}
          >
            <Image
              src={GHD_LOGO_WHITE}
              alt={SITE.name}
              fill
              className="object-contain object-left"
              sizes="104px"
              priority
            />
          </Link>

          <MobileMenuButton
            open={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            menuId="hero-mobile-menu"
            light
          />
        </div>

        <MobileNavMenu
          open={menuOpen}
          onClose={closeMenu}
          menuId="hero-mobile-menu"
        />
      </div>

      <div className="mx-auto hidden h-20 max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 sm:px-6 md:grid lg:px-10">
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

      <div className="hidden justify-center px-4 sm:px-8 md:flex">
        <div className="h-[0.5px] w-full max-w-7xl bg-white/80" aria-hidden />
      </div>

      <nav
        className="relative hidden bg-transparent md:block"
        aria-label="Primary navigation"
      >
        <ul className="mx-auto flex h-11 max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 sm:h-12 sm:gap-x-6 sm:px-6 md:gap-x-8 lg:gap-x-10 lg:px-10">
          <NavLinks scrolled={false} />
        </ul>
      </nav>
    </div>
  );
}

function StickyHeaderContent() {
  const { menuOpen, setMenuOpen, closeMenu } = useMobileMenu();

  return (
    <div className="relative w-full bg-white">
      <div className="flex h-14 w-full items-stretch md:h-16">
        <div className="relative z-10 flex min-w-0 flex-1 items-center justify-between gap-3 px-3 sm:px-6 lg:px-10">
          <Link
            href="/"
            className="site-header__logo relative block h-8 w-[8.5rem] shrink-0 sm:h-10 sm:w-[10.5rem] md:w-[11.5rem]"
            aria-label={`${SITE.name} home`}
          >
            <Image
              src={GHD_LOGO}
              alt={SITE.name}
              fill
              className="object-contain object-left"
              sizes="(max-width: 768px) 136px, 184px"
              priority
            />
          </Link>

          <MobileMenuButton
            open={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            menuId="sticky-mobile-menu"
          />
        </div>

        <nav
          className="pointer-events-none absolute inset-0 hidden items-center justify-center md:flex"
          aria-label="Primary navigation"
        >
          <ul className="pointer-events-auto flex items-center justify-center gap-5 md:gap-6 lg:gap-8">
            <NavLinks scrolled={true} />
          </ul>
        </nav>

        <Link
          href={getDefaultBookingHref()}
          className="site-header__reserve-desktop relative z-10 h-full shrink-0 items-center justify-center rounded-none bg-[#543119] px-5 font-body text-[0.62rem] font-medium uppercase tracking-[0.1em] text-white transition-colors duration-500 hover:bg-[#543119]/90 sm:px-7 sm:text-[0.7rem] lg:px-9"
        >
          Reserve
        </Link>
      </div>

      <MobileNavMenu
        open={menuOpen}
        onClose={closeMenu}
        menuId="sticky-mobile-menu"
      />
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
