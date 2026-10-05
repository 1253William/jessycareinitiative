import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";
import MediaGrid from "@/components/shared/MediaGrid";
import { events, formatEventDate } from "@/data/events";
import type { GalleryItem } from "@/data/gallery";
import NotFound from "./NotFound";
export default function EventDetail() {
  const {slug}=useParams(); const event=events.find(item => item.slug === slug);
  if (!event) return <NotFound />;
  const highlights: GalleryItem[] = event.gallery || [];
  return <Layout><section className="relative min-h-[400px] flex items-end bg-primary"><img src={event.coverImage} alt={event.title} className="absolute inset-0 w-full h-full object-cover opacity-40" /><div className="relative container-narrow w-full px-4 md:px-8 py-16 text-primary-foreground"><Link to="/events" className="flex gap-2 items-center mb-8 hover:text-secondary"><ArrowLeft className="w-4 h-4" /> Events</Link><h1 className="text-4xl md:text-5xl font-bold max-w-3xl">{event.title}</h1></div></section>
  <section className="section-padding"><div className="container-narrow max-w-4xl"><div className="flex flex-wrap gap-6 text-accent font-semibold"><span className="flex items-center gap-2"><CalendarDays className="w-5 h-5" />{formatEventDate(event.startDate)}</span><span className="flex items-center gap-2"><MapPin className="w-5 h-5" />{event.location}</span></div><p className="text-lg mt-8 leading-relaxed">{event.description}</p></div></section>
  {highlights.length > 0 && <section className="section-padding bg-primary"><div className="container-narrow"><h2 className="text-3xl text-primary-foreground mb-8">Highlights</h2><MediaGrid items={highlights} /></div></section>}</Layout>;
}
