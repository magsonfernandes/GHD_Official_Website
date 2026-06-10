import { ROOM_CATEGORIES } from "@/lib/constants";

export type RoomCategory = (typeof ROOM_CATEGORIES)[number];

export function getAllRoomCategories(): RoomCategory[] {
  return [...ROOM_CATEGORIES];
}

export function getRoomCategoryById(id: string) {
  return ROOM_CATEGORIES.find((room) => room.id === id);
}

export function getAllRoomSlugs(): string[] {
  return ROOM_CATEGORIES.map((room) => room.id);
}

export function formatRoomRate(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getRoomCategoryNightlyRate(room: RoomCategory) {
  return {
    nightlyRate: room.nightlyRate,
    formatted: formatRoomRate(room.nightlyRate),
  };
}

export function formatRoomGuests(sleeps: number): string {
  return `${sleeps} guest${sleeps === 1 ? "" : "s"}`;
}

export function formatRoomSize(sizeSqFt: number): string {
  const sqM = Math.round(sizeSqFt * 0.092903);
  return `${sqM} m² | ${sizeSqFt.toLocaleString("en-IN")} sq. ft.`;
}

export function formatNightlyPrice(amount: number): string {
  return `${formatRoomRate(amount)} / night`;
}
