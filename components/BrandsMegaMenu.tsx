"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { BRAND_MENU } from "@/lib/constants";
import { cn } from "@/lib/utils";

const GHD_BROWN = "#543119";

type BrandsMegaMenuProps = {
  scrolled: boolean;
};

export function BrandsNavItem({ scrolled }: BrandsMegaMenuProps) {
  const itemRef = useRef<HTMLLIElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [open, setOpen] = useState(false);
  const [nivaaraOpen, setNivaaraOpen] = useState(false);
  const [panelTop, setPanelTop] = useState(0);

  const updatePanelPosition = useCallback(() => {
    const header = itemRef.current?.closest("header");
    if (header) {
      setPanelTop(header.getBoundingClientRect().bottom);
    }
  }, []);

  useEffect(() => {
    if (!open) return;

    updatePanelPosition();
    window.addEventListener("resize", updatePanelPosition, { passive: true });
    window.addEventListener("scroll", updatePanelPosition, { passive: true });

    return () => {
      window.removeEventListener("resize", updatePanelPosition);
      window.removeEventListener("scroll", updatePanelPosition);
    };
  }, [open, updatePanelPosition]);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openMenu = () => {
    clearCloseTimer();
    updatePanelPosition();
    setOpen(true);
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setOpen(false);
      setNivaaraOpen(false);
    }, 120);
  };

  const navLinkClass = cn(
    "site-header__nav-link font-body text-[0.58rem] font-medium uppercase tracking-[0.12em] transition-colors duration-500 sm:text-[0.65rem] md:text-xs",
    scrolled
      ? "text-charcoal hover:text-charcoal/70"
      : "text-white/90 hover:text-white",
  );

  return (
    <li
      ref={itemRef}
      className="relative shrink-0"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
      onFocus={openMenu}
      onBlur={scheduleClose}
    >
      <button
        type="button"
        className={navLinkClass}
        style={{ color: scrolled ? GHD_BROWN : undefined }}
        aria-expanded={open}
        aria-haspopup="true"
      >
        BRANDS
      </button>

      {open ? (
        <div
          className="fixed inset-x-0 z-[120] min-h-[50vh] border-t border-border bg-white shadow-[0_24px_60px_rgba(17,17,17,0.08)]"
          style={{ top: panelTop }}
          onMouseEnter={openMenu}
          onMouseLeave={scheduleClose}
        >
          <div className="mx-auto flex h-full min-h-[50vh] max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
            <div className="flex items-start gap-0">
              <ul className="min-w-[14rem] space-y-1 sm:min-w-[16rem]">
                {BRAND_MENU.map((brand) => (
                  <li key={brand.id}>
                    <button
                      type="button"
                      className={cn(
                        "flex w-full items-baseline justify-between gap-4 px-3 py-3 text-left transition-colors duration-300",
                        nivaaraOpen
                          ? "bg-muted text-charcoal"
                          : "text-charcoal hover:bg-muted/70",
                      )}
                      onMouseEnter={() => setNivaaraOpen(true)}
                      onFocus={() => setNivaaraOpen(true)}
                      onClick={() => setNivaaraOpen((value) => !value)}
                    >
                      <span className="font-heading text-2xl font-medium sm:text-3xl">
                        {brand.name}
                      </span>
                      <span className="font-body text-xs text-grey" aria-hidden>
                        →
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              <div
                className={cn(
                  "overflow-hidden border-l border-border transition-all duration-300 ease-out",
                  nivaaraOpen ? "ml-6 w-48 opacity-100 sm:ml-10 sm:w-56" : "ml-0 w-0 border-transparent opacity-0",
                )}
                onMouseEnter={() => setNivaaraOpen(true)}
              >
                <div className="px-6 py-3 sm:px-8">
                  <p className="mb-4 font-body text-[0.65rem] font-medium uppercase tracking-[0.18em] text-grey">
                    Locations
                  </p>
                  <ul>
                    {BRAND_MENU.find((brand) => brand.id === "nivaara")?.locations.map(
                      (location) => (
                        <li key={location.name}>
                          <Link
                            href={location.href}
                            className="block py-2 font-heading text-xl font-medium text-charcoal transition-colors duration-300 hover:text-[#543119] sm:text-2xl"
                            onClick={() => {
                              setOpen(false);
                              setNivaaraOpen(false);
                            }}
                          >
                            {location.name}
                          </Link>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </li>
  );
}
