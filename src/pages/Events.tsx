import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import EventCard from "@/components/events/EventCard";
import { partitionEvents } from "@/data/events";
import { Button } from "@/components/ui/button";

function Countdown({date}: {date: string}) {
  const [now,setNow] = useState(() => Date.now());
  useEffect(() => {const timer=setInterval(() => setNow(Date.now()),60_000);return () => clearInterval(timer);},[]);
  const distance = new Date(`${date}T00:00:00`).getTime()-now;
  if (distance <= 0) return null;
  const days=Math.floor(distance/86_400_000), hours=Math.floor(distance/3_600_000)%24, minutes=Math.floor(distance/60_000)%60;
  return <div className="flex flex-wrap gap-3 mt-8" aria-label="Time until next event">{[[days,"Days"],[hours,"Hours"],[minutes,"Minutes"]].map(([value,label]) => <div key={label} className="bg-primary text-primary-foreground rounded-md min-w-20 px-4 py-3 text-center"><strong className="block text-2xl text-secondary">{value}</strong><span className="text-xs">{label}</span></div>)}</div>;
}
export default function Events() {
  const {upcoming,previous}=partitionEvents();
  return <Layout>
    <section className="bg-primary section-padding text-primary-foreground"><div className="container-narrow"><p className="uppercase text-secondary text-sm font-semibold mb-4">Events</p><h1 className="text-4xl md:text-5xl font-bold">Join Us. Make an Impact.</h1><p className="mt-4 text-secondary">See what’s happening in the communities we serve.</p></div></section>
    <section className="section-padding"><div className="container-narrow"><h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>{upcoming.length ? <><div className="grid gap-6">{upcoming.map(event => <EventCard key={event.id} event={event} featured />)}</div><Countdown date={upcoming[0].startDate} /></> : <div className="py-12"><p className="mb-6">No upcoming events right now. Follow us or join our mailing list to hear first.</p><Button asChild><Link to="/contact">Get in touch</Link></Button></div>}</div></section>
    <section className="section-padding bg-muted"><div className="container-narrow"><h2 className="text-3xl font-bold mb-8">Previous Events</h2>{previous.length ? <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{previous.map(event => <EventCard key={event.id} event={event} />)}</div> : <p>No previous events to show yet.</p>}</div></section>
  </Layout>;
}
