import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Leadership | GHD Hotels",
  description:
    "Meet the leadership team shaping the future of GHD Hotels.",
};

/** Leadership now lives on the Who We Are page. */
export default function LeadershipPage() {
  redirect("/about#our-leadership");
}
