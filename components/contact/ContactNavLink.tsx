"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useContactModal } from "@/components/contact/ContactModalContext";
import { cn } from "@/lib/utils";

type ContactNavLinkProps = {
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, "style">;

export function ContactNavLink({
  className,
  children,
  style,
  onNavigate,
}: ContactNavLinkProps) {
  const { openContact } = useContactModal();

  return (
    <button
      type="button"
      onClick={() => {
        openContact();
        onNavigate?.();
      }}
      className={cn(className)}
      style={style}
    >
      {children}
    </button>
  );
}
