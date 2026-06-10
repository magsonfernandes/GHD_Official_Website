"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { waitForPageMediaWithUpdates } from "@/lib/media-preload";

const PAGE_READY_TIMEOUT_MS = 25_000;

export function PageMediaGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;

    const reveal = () => {
      if (!cancelled) {
        setReady(true);
      }
    };

    const timeoutId = window.setTimeout(reveal, PAGE_READY_TIMEOUT_MS);

    const loadMedia = async () => {
      await new Promise<void>((resolve) => {
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
      });

      if (cancelled) return;

      try {
        await waitForPageMediaWithUpdates(container);
      } catch {
        // Never block the page indefinitely.
      }

      reveal();
    };

    void loadMedia();

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [pathname]);

  return (
    <>
      <div
        ref={containerRef}
        className={ready ? "page-media-ready" : "page-media-loading"}
        aria-busy={!ready}
      >
        {children}
      </div>
      {!ready ? (
        <div
          className="fixed inset-0 z-[9999] bg-white"
          aria-live="polite"
          aria-label="Loading page"
        />
      ) : null}
    </>
  );
}
