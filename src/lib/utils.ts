import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateRange(checkIn?: Date | null, checkOut?: Date | null): string {
  if (!checkIn || !checkOut) return "Add Dates";

  const fmt = (d: Date) =>
    d.toLocaleDateString("en-US", { weekday: "short", day: "numeric", month: "short" });

  return `${fmt(checkIn)} - ${fmt(checkOut)}`;
}

export function formatGuests(adults: number, children: number, rooms: number, pets: boolean): string {
  const guests = adults + children;
  const parts = [
    guests > 0 && `${guests} Guest${guests > 1 ? "s" : ""}`,
    rooms > 0 && `${rooms} Room${rooms > 1 ? "s" : ""}`,
    pets && "Pets",
  ].filter(Boolean);

  return parts.length > 0 ? parts.join(", ") : "Add Guests";
}

export function calculateStayPrice(
  checkIn?: Date | null,
  checkOut?: Date | null,
  rooms?: number | null,
  price?: number | null
): [string, string | number] {
  if (!checkIn || !checkOut || !rooms || !price) return ["cost breakdown", "total price"];

  const days = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
  const total = price * rooms * days;
  return [`${price} x ${rooms} rooms x ${days} nights`, total];
}
