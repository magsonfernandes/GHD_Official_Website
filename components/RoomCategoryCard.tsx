import Image from "next/image";
import Link from "next/link";
import type { RoomCategory } from "@/lib/rooms";
import { RoomFromPrice } from "@/components/RoomFromPrice";
import {
  formatRoomGuests,
  formatRoomSize,
  getRoomCategoryNightlyRate,
} from "@/lib/rooms";
import { sectionBodyClass } from "@/lib/section-typography";

export function RoomCategoryCard({ room }: { room: RoomCategory }) {
  const rate = getRoomCategoryNightlyRate(room);

  return (
    <article className="overflow-hidden border border-border bg-white shadow-[0_8px_30px_rgba(17,17,17,0.06)]">
      <div className="grid md:grid-cols-2">
        <Link
          href={`/rooms/${room.id}`}
          className="group relative block min-h-[14rem] overflow-hidden bg-muted sm:min-h-[18rem] md:min-h-[22rem]"
        >
          <Image
            src={room.image}
            alt={room.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </Link>

        <div className="flex flex-col justify-between p-6 sm:p-8">
          <div>
            <h2 className="font-heading text-2xl font-light leading-[1.15] text-charcoal sm:text-[2rem]">
              {room.name}
            </h2>

            <p className="mt-3 font-body text-sm text-charcoal/70">
              {formatRoomGuests(room.sleeps)}
            </p>

            <p className="mt-1 font-body text-sm text-charcoal/70">
              {formatRoomSize(room.sizeSqFt)}
            </p>

            <p className={sectionBodyClass(false, "mt-4 line-clamp-3 text-left")}>
              {room.summary}
            </p>
          </div>

          <div className="mt-8 border-t border-border pt-6">
            <RoomFromPrice amount={rate.nightlyRate} />

            <Link
              href={`/rooms/${room.id}`}
              className="mt-5 inline-flex items-center justify-center rounded-none border border-charcoal bg-white px-6 py-2.5 font-body text-xs lowercase tracking-[0.08em] text-charcoal"
            >
              show room
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
