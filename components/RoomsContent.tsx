import { RoomCategoryCard } from "@/components/RoomCategoryCard";
import { ROOM_CATEGORIES } from "@/lib/constants";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function RoomsContent() {
  return (
    <>
      <section className="bg-muted pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <SectionIntro
            label="Accommodation"
            title="Luxury Rooms at Nivaãra by GHD Hotels, Nerul"
            description="Thoughtfully designed rooms in Nerul, North Goa — offered across three honest view categories. Select a room to view full details."
            titleAs="h1"
          />
        </div>
      </section>

      <section className="bg-white px-6 py-14 md:py-20 lg:px-10">
        <div className="mx-auto flex max-w-4xl flex-col gap-8 md:gap-10">
          {ROOM_CATEGORIES.map((room) => (
            <RoomCategoryCard key={room.id} room={room} />
          ))}
        </div>
      </section>
    </>
  );
}
