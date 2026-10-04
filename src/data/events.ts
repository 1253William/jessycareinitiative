import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";

export type CommunityEvent = {
  id: string; slug: string; title: string; startDate: string; endDate?: string;
  location: string; summary: string; description: string; coverImage: string;
  gallery?: string[]; registrationUrl?: string; status?: string;
};

export const events: CommunityEvent[] = [
  {
    id: "november-2026", slug: "community-outreach-november-2026",
    title: "The Jessicare Initiative Community Outreach — November 2026",
    startDate: "2026-11-14", location: "Accra, Ghana (TBC)",
    summary: "Join us for community health education and outreach. Programme details and registration are coming soon.",
    description: "This event is being planned. The venue, programme, and participation details will be confirmed closer to the date.",
    coverImage: event1,
  },
  {
    id: "annual-2025", slug: "annual-outreach-2025", title: "Annual Outreach 2025",
    startDate: "2025-11-15", location: "Ghana (venue to be confirmed)",
    summary: "A look back at community outreach and health education in 2025. Event details to be confirmed.",
    description: "Highlights and verified details from this past event will be added when available.",
    coverImage: event2, gallery: [event2],
  },
];

export function partitionEvents(now = new Date()) {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const boundary = (event: CommunityEvent) => new Date(`${event.endDate || event.startDate}T23:59:59`).getTime();
  return {
    upcoming: events.filter(event => boundary(event) >= today).sort((a,b) => a.startDate.localeCompare(b.startDate)),
    previous: events.filter(event => boundary(event) < today).sort((a,b) => b.startDate.localeCompare(a.startDate)),
  };
}
export const formatEventDate = (date: string) => new Date(`${date}T12:00:00`).toLocaleDateString("en-GB", {day: "numeric", month: "long", year: "numeric"});
