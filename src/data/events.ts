import event1 from "@/assets/event-1.jpg";
import { outreach2025Gallery } from "./gallery";
import type { GalleryItem } from "./gallery";

export type CommunityEvent = {
  id: string; slug: string; title: string; startDate: string; endDate?: string;
  location: string; summary: string; description: string; coverImage: string;
  gallery?: GalleryItem[]; registrationUrl?: string; status?: string;
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
    id: "annual-2025", slug: "annual-outreach-2025", title: "2025 Health Awareness & Free Health Outreach",
    startDate: "2025-11-18", location: "Ghana",
    summary: "A community health outreach bringing practical health awareness and free outreach closer to the people it serves.",
    description: "The 2025 Health Awareness & Free Health Outreach brought community members and local health volunteers together around a shared goal: making useful health information and outreach more accessible. Through personal conversations, community engagement, and practical health support, the initiative created space for people to learn, ask questions, and connect with care. The experience reflects Jessicare's commitment to working alongside communities and partners to support healthier futures.",
    coverImage: outreach2025Gallery[0].src,
    gallery: outreach2025Gallery,
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
