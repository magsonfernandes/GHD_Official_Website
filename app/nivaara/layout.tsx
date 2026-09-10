import type { Metadata } from "next";
import { NIVAARA_LOGO } from "@/lib/constants";

export const metadata: Metadata = {
  icons: {
    icon: NIVAARA_LOGO,
  },
};

export default function NivaaraLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
