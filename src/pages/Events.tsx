import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";

const events = [
  {
    title: "Youth Empowerment Summit 2026",
    date: "April 15, 2026",
    location: "Accra International Conference Centre",
    desc: "A full-day summit bringing together young leaders, mentors, and industry experts to discuss pathways to success.",
  },
  {
    title: "Vocational Skills Open Day",
    date: "May 20, 2026",
    location: "JCF Training Centre, Kumasi",
    desc: "An open day showcasing our vocational training programs with live demonstrations and enrollment opportunities.",
  },
  {
    title: "Community Education Drive",
    date: "June 10, 2026",
    location: "Tamale, Northern Region",
    desc: "A community outreach event providing free tutoring, educational materials, and scholarship information.",
  },
  {
    title: "Entrepreneurship Bootcamp",
    date: "July 5–7, 2026",
    location: "University of Ghana, Legon",
    desc: "A three-day intensive bootcamp for aspiring entrepreneurs with workshops, pitch sessions, and mentorship.",
  },
];

const Events = () => (
  <Layout>
    <PageHero title="Events" subtitle="Stay updated with our upcoming events and activities." />

    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:card-shadow-hover transition-shadow"
            >
              <h3 className="font-heading font-semibold text-xl mb-3">{event.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{event.desc}</p>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" /> {event.date}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" /> {event.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Events;
