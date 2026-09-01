"use client";

import Image from "next/image";
import Link from "next/link";
import { getPublicBrands } from "@/lib/brands";
import { CORPORATE_FOOTER, GHD_LOGO } from "@/lib/corporate-content";
import { getDefaultBookingHref } from "@/lib/booking";

export function CorporateFooter() {
  const brands = getPublicBrands();

  return (
    <footer className="border-t border-[#E6DDCF] bg-[#FAF7F2]">
      <div className="mx-auto max-w-[1200px] px-6 py-14 sm:py-16 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="relative block h-9 w-[7.5rem]">
              <Image
                src={GHD_LOGO}
                alt="GHD Hotels"
                fill
                className="object-contain object-left"
                sizes="120px"
              />
            </Link>
            <p className="mt-4 font-body text-sm leading-relaxed text-[#6F6A62]">
              {CORPORATE_FOOTER.tagline}
            </p>
          </div>

          <div>
            <p className="font-body text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#2D2D2D]">
              Our Brands
            </p>
            <ul className="mt-4 space-y-2.5">
              {brands.map((brand) => (
                <li key={brand.id}>
                  <Link
                    href={brand.exploreHref}
                    className="font-body text-sm text-[#6F6A62] transition-colors hover:text-[#C6A86B]"
                  >
                    {brand.name}
                    {brand.status === "coming-soon" ? " — Coming Soon" : ""}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#2D2D2D]">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {CORPORATE_FOOTER.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[#6F6A62] transition-colors hover:text-[#C6A86B]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-body text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#2D2D2D]">
              Stay
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={getDefaultBookingHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-[#6F6A62] transition-colors hover:text-[#C6A86B]"
                >
                  Book Nivaãra
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-body text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#2D2D2D]">
              Legal
            </p>
            <ul className="mt-4 space-y-2.5">
              {CORPORATE_FOOTER.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[#6F6A62] transition-colors hover:text-[#C6A86B]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-8 flex flex-wrap gap-4">
              {CORPORATE_FOOTER.social.map((social) => (
                <li key={social.icon}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-xs uppercase tracking-[0.1em] text-[#6F6A62] transition-colors hover:text-[#C6A86B]"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[#E6DDCF] pt-6">
          <p className="font-body text-[0.7rem] text-[#6F6A62]">
            © 2026 GHD Hotels. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
