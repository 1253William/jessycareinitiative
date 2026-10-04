import { Link } from "react-router-dom";
import { CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CommunityEvent, formatEventDate } from "@/data/events";

export default function EventCard({ event, featured = false }: {event: CommunityEvent; featured?: boolean}) {
  return <article className={`overflow-hidden rounded-lg border border-border bg-card ${featured ? "md:grid md:grid-cols-2" : ""}`}>
    <div className="overflow-hidden aspect-[4/3]"><img src={event.coverImage} alt={`Community outreach for ${event.title}`} loading="lazy" className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]" /></div>
    <div className="p-6 md:p-8 flex flex-col justify-center">
      <p className="text-accent text-sm font-semibold flex items-center gap-2"><CalendarDays className="w-4 h-4" />{formatEventDate(event.startDate)}</p>
      <h3 className="text-xl md:text-2xl font-bold mt-3">{event.title}</h3>
      <p className="flex items-center gap-2 text-sm mt-3 text-muted-foreground"><MapPin className="w-4 h-4 shrink-0" />{event.location}</p>
      <p className="mt-4 text-muted-foreground">{event.summary}</p>
      <div className="flex flex-wrap gap-3 mt-6">
        {featured && <Button asChild variant="gradient"><Link to={event.registrationUrl || "/contact"}>Register / Get Involved</Link></Button>}
        <Button asChild variant="outline"><Link to={`/events/${event.slug}`}>{featured ? "Learn More" : "View Highlights"}</Link></Button>
      </div>
    </div>
  </article>;
}
