// ── Trailer base prices (per weekend) ──────────────────────────────
export const TRAILER_PRICES: Record<string, number> = {
  "2-door-2-stall": 1000,
  "2-door-5-stall": 1150,
  "3-door-3-stall": 1150,
  "4-door-4-stall": 1400,
  "2-door-10-stall": 1750,
  "8-door-8-stall": 2000,
};

// ── Trailer max guest capacities ───────────────────────────────────
export const TRAILER_CAPACITY: Record<string, number> = {
  "2-door-2-stall": 175,
  "2-door-5-stall": 250,
  "3-door-3-stall": 175,
  "4-door-4-stall": 350,
  "2-door-10-stall": 500,
  "8-door-8-stall": 700,
};

// ── Distance pricing ──────────────────────────────────────────────
export const ORIGIN_ZIP = "11432";
export const FREE_MILES = 15;
export const DELIVERY_BASE_FEE = 100; // flat delivery fee
export const PER_MILE_RATE = 5; // dollars per mile beyond free radius

// ── Surcharges & fees ────────────────────────────────────────────
export const HOLIDAY_FEE = 150; // flat $150 per holiday
export const EXTRA_WEEKDAY_FEE = 50; // $50 per extra weekday (Mon-Thu)
export const EXTRA_WEEKEND_DAY_FEE = 100; // $100 per extra weekend day (Fri/Sat/Sun)
export const WATER_FEE = 100; // $100 when no water spigot available
export const GENERATOR_FEE = 300; // $300 when no power outlet available
export const CREDIT_CARD_FEE = 0.03; // 3%

/**
 * Returns major US holiday dates for a given year.
 * Includes: New Year's Day, Memorial Day, Independence Day,
 * Labor Day, Thanksgiving, Christmas + surrounding weekends.
 */
export function getHolidayDates(year: number): Date[] {
  const holidays: Date[] = [];

  // New Year's Day — Jan 1
  holidays.push(new Date(year, 0, 1));
  // New Year's weekend (Dec 31 prev year already covered by that year)
  holidays.push(new Date(year, 0, 2)); // day after

  // Memorial Day — last Monday of May
  const memDay = lastDayOfWeek(year, 4, 1); // May, Monday
  addWeekendRange(holidays, memDay);

  // Independence Day — July 4
  const july4 = new Date(year, 6, 4);
  addWeekendRange(holidays, july4);

  // Labor Day — first Monday of September
  const laborDay = firstDayOfWeek(year, 8, 1); // Sept, Monday
  addWeekendRange(holidays, laborDay);

  // Thanksgiving — fourth Thursday of November
  const thanksgiving = nthDayOfWeek(year, 10, 4, 4); // Nov, Thursday, 4th
  addWeekendRange(holidays, thanksgiving);
  // Black Friday
  holidays.push(new Date(thanksgiving.getTime() + 86400000));

  // Christmas — Dec 25
  const christmas = new Date(year, 11, 25);
  addWeekendRange(holidays, christmas);

  return holidays;
}

/** Check if a single date falls on or near a major US holiday */
export function isHoliday(date: Date): boolean {
  const year = date.getFullYear();
  const holidays = getHolidayDates(year);
  const dateStr = dateToString(date);
  return holidays.some((h) => dateToString(h) === dateStr);
}

/**
 * Returns the core holiday dates for a given year (one date per holiday).
 * Used for counting distinct holidays (not expanded weekend ranges).
 */
export function getCoreHolidays(year: number): Date[] {
  return [
    new Date(year, 0, 1),                              // New Year's Day
    lastDayOfWeek(year, 4, 1),                          // Memorial Day
    new Date(year, 6, 4),                               // Independence Day
    firstDayOfWeek(year, 8, 1),                         // Labor Day
    nthDayOfWeek(year, 10, 4, 4),                       // Thanksgiving
    new Date(year, 11, 25),                             // Christmas
  ];
}

/** Count how many distinct holidays fall within a rental range */
export function countHolidaysInRange(startDate: Date, endDate: Date): number {
  let count = 0;
  for (let y = startDate.getFullYear(); y <= endDate.getFullYear(); y++) {
    for (const h of getCoreHolidays(y)) {
      if (h >= startDate && h <= endDate) {
        count++;
      }
    }
  }
  return count;
}

/**
 * Count the number of distinct weekends (Fri-Sun groups) that overlap
 * with the rental period. A weekend is any Fri/Sat/Sun block.
 * Minimum is always 1 (base rental covers at least one weekend).
 */
export function countWeekends(startDate: Date, endDate: Date): number {
  const weekendSundays = new Set<string>();
  const d = new Date(startDate);
  while (d <= endDate) {
    const day = d.getDay(); // 0=Sun, 5=Fri, 6=Sat
    if (day === 5 || day === 6 || day === 0) {
      // Find the Sunday that anchors this weekend
      const sunday = new Date(d);
      if (day === 5) sunday.setDate(sunday.getDate() + 2);
      else if (day === 6) sunday.setDate(sunday.getDate() + 1);
      // day === 0 → already Sunday
      weekendSundays.add(dateToString(sunday));
    }
    d.setDate(d.getDate() + 1);
  }
  return Math.max(1, weekendSundays.size);
}

/** Count extra weekdays and weekend days in a rental (beyond the first day) */
export function countExtraDays(startDate: Date, endDate: Date): { extraWeekdays: number; extraWeekendDays: number; totalDays: number } {
  const ms = endDate.getTime() - startDate.getTime();
  const totalDays = Math.max(1, Math.round(ms / 86400000) + 1);
  let extraWeekdays = 0;
  let extraWeekendDays = 0;
  // Skip the first day (included in base), count from day 2 onward
  const d = new Date(startDate);
  d.setDate(d.getDate() + 1);
  while (d <= endDate) {
    const day = d.getDay();
    if (day === 5 || day === 6 || day === 0) {
      extraWeekendDays++;
    } else {
      extraWeekdays++;
    }
    d.setDate(d.getDate() + 1);
  }
  return { extraWeekdays, extraWeekendDays, totalDays };
}

function dateToString(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function addWeekendRange(list: Date[], holiday: Date) {
  // Add the holiday itself plus the surrounding Fri-Sun
  for (let offset = -2; offset <= 2; offset++) {
    const d = new Date(holiday.getTime() + offset * 86400000);
    list.push(d);
  }
}

function lastDayOfWeek(year: number, month: number, dayOfWeek: number): Date {
  const d = new Date(year, month + 1, 0); // last day of month
  while (d.getDay() !== dayOfWeek) d.setDate(d.getDate() - 1);
  return d;
}

function firstDayOfWeek(year: number, month: number, dayOfWeek: number): Date {
  const d = new Date(year, month, 1);
  while (d.getDay() !== dayOfWeek) d.setDate(d.getDate() + 1);
  return d;
}

function nthDayOfWeek(year: number, month: number, dayOfWeek: number, n: number): Date {
  const d = firstDayOfWeek(year, month, dayOfWeek);
  d.setDate(d.getDate() + (n - 1) * 7);
  return d;
}

// ── Distance calculation (Haversine) ──────────────────────────────

// Coordinates for origin ZIP 11432 (Jamaica, Queens, NY)
const ORIGIN_COORDS = { lat: 40.7116, lng: -73.7935 };

// Approximate ZIP → coordinates using zippopotam.us (free, no key)
export async function getZipCoords(zip: string): Promise<{ lat: number; lng: number } | null> {
  try {
    const res = await fetch(`https://api.zippopotam.us/us/${zip}`);
    if (!res.ok) return null;
    const data = await res.json();
    const place = data.places?.[0];
    if (!place) return null;
    return { lat: parseFloat(place.latitude), lng: parseFloat(place.longitude) };
  } catch {
    return null;
  }
}

/** Haversine distance in miles */
export function haversineDistance(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number }
): number {
  const R = 3958.8; // Earth radius in miles
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const sinDLat = Math.sin(dLat / 2);
  const sinDLng = Math.sin(dLng / 2);
  const h = sinDLat * sinDLat + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * sinDLng * sinDLng;
  return 2 * R * Math.asin(Math.sqrt(h));
}

function toRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

/** Calculate distance in miles from origin (11432) to a destination ZIP */
export async function getDistanceFromOrigin(destinationZip: string): Promise<number | null> {
  if (destinationZip === ORIGIN_ZIP) return 0;
  const coords = await getZipCoords(destinationZip);
  if (!coords) return null;
  return Math.round(haversineDistance(ORIGIN_COORDS, coords));
}

// ── Full price calculation ────────────────────────────────────────

export interface PriceBreakdown {
  basePricePerWeekend: number;
  weekendCount: number;
  rentalDays: number;
  basePrice: number;
  distanceMiles: number | null;
  deliveryFee: number;
  waterFee: number;
  generatorFee: number;
  holidayCount: number;
  holidaySurcharge: number;
  isHoliday: boolean;
  creditCardFee: number;
  totalWithCard: number;
  totalWithBank: number;
  capacityWarning: string | null;
}

export async function calculatePrice(
  trailerSlug: string,
  destinationZip: string,
  eventDate: string,
  eventEndDate: string,
  guestCount?: number,
  waterAccess?: boolean,
  powerAccess?: boolean
): Promise<PriceBreakdown> {
  const basePricePerWeekend = TRAILER_PRICES[trailerSlug] ?? 0;
  const maxCapacity = TRAILER_CAPACITY[trailerSlug] ?? Infinity;

  // Determine rental date range
  const startDate = new Date(eventDate + "T00:00:00");
  const endDate = new Date(eventEndDate + "T00:00:00");

  // Weekend multiplier: base price × number of weekends
  const weekendCount = countWeekends(startDate, endDate);
  const weekendTotal = basePricePerWeekend * weekendCount;

  // Extra day charges: $50/weekday, $100/weekend day (beyond the first day)
  const { extraWeekdays, extraWeekendDays, totalDays: rentalDays } = countExtraDays(startDate, endDate);
  const extraDayCharge = (extraWeekdays * EXTRA_WEEKDAY_FEE) + (extraWeekendDays * EXTRA_WEEKEND_DAY_FEE);

  // Base price = weekend total + extra day charges (shown as one line)
  const basePrice = weekendTotal + extraDayCharge;

  // Distance — delivery fee is charged once
  const distanceMiles = await getDistanceFromOrigin(destinationZip);
  let deliveryFee = DELIVERY_BASE_FEE;
  if (distanceMiles !== null && distanceMiles > FREE_MILES) {
    deliveryFee += (distanceMiles - FREE_MILES) * PER_MILE_RATE;
  }

  // Water fee — $100 when no water spigot available
  const waterFee = waterAccess === false ? WATER_FEE : 0;

  // Generator fee — $300 when no power outlet available
  const generatorFee = powerAccess === false ? GENERATOR_FEE : 0;

  // Holiday check — flat $150 per holiday in the range
  const holidayCount = countHolidaysInRange(startDate, endDate);
  const holidaySurcharge = holidayCount * HOLIDAY_FEE;

  // Capacity warning
  let capacityWarning: string | null = null;
  if (guestCount && guestCount > maxCapacity) {
    capacityWarning = `This trailer is rated for up to ${maxCapacity} guests. With ${guestCount} guests, we recommend upgrading to a larger trailer or adding a second unit for the best experience.`;
  }

  const subtotal = basePrice + deliveryFee + waterFee + generatorFee + holidaySurcharge;
  const creditCardFee = Math.round(subtotal * CREDIT_CARD_FEE);
  const totalWithCard = subtotal + creditCardFee;
  const totalWithBank = subtotal;

  return {
    basePricePerWeekend,
    weekendCount,
    rentalDays,
    basePrice,
    distanceMiles,
    deliveryFee,
    waterFee,
    generatorFee,
    holidayCount,
    isHoliday: holidayCount > 0,
    holidaySurcharge,
    creditCardFee,
    totalWithCard,
    totalWithBank,
    capacityWarning,
  };
}
