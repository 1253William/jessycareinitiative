import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, CheckCircle2, HeartHandshake } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import { outreach2025Gallery } from "@/data/gallery";
import hero1 from "@/assets/hero-1.jpg";

const focusAreas = [
  {
    icon: BookOpen,
    title: "Community Health Education Program",
    description: "Accessible, practical health education to help individuals and families make informed decisions about prevention and wellbeing.",
  },
  {
    icon: HeartHandshake,
    title: "Health Awareness & Outreach Campaign",
    description: "Community-centered outreach that shares important health information and helps people connect with appropriate care.",
  },
];

const Projects = () => {
  const reducedMotion = useReducedMotion();

  return (
    <Layout>
      <PageHero title="Our Projects" subtitle="Working alongside communities to make health knowledge and outreach more accessible." image={hero1} />

      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading
            label="Upcoming"
            title="Upcoming Project"
            description="One connected initiative bringing health education and community outreach together."
          />
          <motion.article
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]"
          >
            <div className="grid md:grid-cols-[0.8fr_1.2fr]">
              <div className="relative min-h-56 bg-primary md:min-h-full">
                <img src={hero1} alt="Community members taking part in a health outreach" className="absolute inset-0 h-full w-full object-cover opacity-75" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
                <span className="absolute bottom-6 left-6 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">Coming soon</span>
              </div>
              <div className="p-6 md:p-9">
                <h3 className="font-heading text-2xl font-bold leading-snug md:text-3xl">Community Health Education &amp; Awareness Outreach</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  A unified project designed to make useful health knowledge easier to access and bring awareness and outreach closer to the communities we serve.
                </p>
                <div className="mt-7 space-y-5">
                  {focusAreas.map(({ icon: Icon, title, description }) => (
                    <div key={title} className="flex gap-3">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"><Icon className="h-5 w-5" /></span>
                      <div>
                        <h4 className="font-semibold">{title}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <SectionHeading
            label="Completed"
            title="Past Projects"
            description="A look at the people, conversations, and community partnerships behind our outreach."
          />
          <motion.article
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]"
          >
            <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
              <div className="p-7 md:p-10">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
                  <CheckCircle2 className="h-4 w-4" /> Completed · 2025
                </div>
                <h3 className="font-heading text-2xl font-bold leading-snug md:text-3xl">Health Awareness &amp; Free Health Outreach</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  The 2025 outreach brought community members and local health volunteers together around a shared goal: making practical health information and free outreach more accessible.
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Through personal conversations and community engagement, the initiative created space for people to learn, ask questions, and connect with care. It reflects Jessicare&apos;s commitment to working alongside communities and partners to support healthier futures.
                </p>
                <Link
                  to="/events/annual-outreach-2025"
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-accent hover:underline"
                >
                  Explore the 2025 outreach <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="outreach-glow relative isolate overflow-hidden p-5 md:p-8">
                <div className="relative z-10 grid grid-cols-2 gap-3">
                  {outreach2025Gallery.slice(0, 4).map((image, index) => (
                    <Link
                      key={image.id}
                      to="/events/annual-outreach-2025"
                      className={`group relative block overflow-hidden rounded-xl ${index === 0 ? "row-span-2 aspect-[3/4]" : "aspect-[4/3]"}`}
                      aria-label="View photos from the 2025 Health Awareness & Free Health Outreach"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
