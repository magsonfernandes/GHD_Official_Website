"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { GHD_FAVICON, NIVAARA_LOGO } from "@/lib/constants";

const CORPORATE_ROUTES = new Set([
  "/",
  "/about",
  "/brands",
  "/culture",
  "/careers",
  "/contact",
  "/leadership",
]);

function isCorporateRoute(pathname: string) {
  return CORPORATE_ROUTES.has(pathname);
}

function setFavicon(href: string) {
  const head = document.head;
  const existing = head.querySelectorAll<HTMLLinkElement>("link[rel='icon'], link[rel='shortcut icon']");

  existing.forEach((link) => link.remove());

  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  link.href = href;
  head.appendChild(link);
}

export function FaviconSwitcher() {
  const pathname = usePathname();

  useEffect(() => {
    setFavicon(isCorporateRoute(pathname) ? GHD_FAVICON : NIVAARA_LOGO);
  }, [pathname]);

  return null;
}
