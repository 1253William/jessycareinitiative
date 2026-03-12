import { motion } from "framer-motion";
import { MapPin, Star, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import hero1 from "@/assets/hero-1.jpg";

const ongoing = [
  {
    title: "Vocational Training Initiative",
    desc: "Equipping youth with practical skills in carpentry, tailoring, welding, and hairdressing across three major cities in Ghana.",
    locations: ["Accra", "Kumasi", "Tamale"],
    impact: "2,000+ trained",
  },
  {
    title: "Entrepreneurship & Mentorship Workshop",
    desc: "Comprehensive business training, mentorship pairing, and startup incubation for aspiring young entrepreneurs.",
    locations: ["Greater Accra Region"],
    impact: "100+ startups launched",
  },
  {
    title: "Community Education Outreach",
    desc: "Bringing quality educational resources and tutoring to underserved communities across Northern Ghana.",
    locations: ["Northern Ghana"],
    impact: "500+ students supported",
  },
];

const completed = [
  { title: "Youth Empowerment Seminars", impact: "5,000 young people reached", desc: "A series of motivational and skills-building seminars held across multiple regions." },
  { title: "Community Library Initiative", impact: "5 libraries built", desc: "Establishing community libraries to provide access to books and digital learning resources." },
  { title: "Digital Literacy Workshop", impact: "1,000 students trained", desc: "Teaching basic and advanced digital skills to students in underserved schools." },
];

const Projects = () => (
  <Layout>
    <PageHero title="Our Projects" subtitle="See how we're making a difference across Ghana." image={hero1} />

    {/* Ongoing */}
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading label="Active" title="Ongoing Projects" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ongoing.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:card-shadow-hover transition-shadow"
            >
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold gradient-bg text-primary-foreground mb-4">
                Ongoing
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3">{proj.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{proj.desc}</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5" /> {proj.locations.join(", ")}
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                  <Star className="w-3.5 h-3.5" /> {proj.impact}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Completed */}
    <section className="section-padding bg-muted">
      <div className="container-narrow">
        <SectionHeading label="Completed" title="Past Projects" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {completed.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 text-sm text-primary font-semibold mb-3">
                <CheckCircle className="w-4 h-4" /> Completed
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{proj.title}</h3>
              <p className="text-muted-foreground text-sm mb-3">{proj.desc}</p>
              <p className="text-xs font-semibold text-primary">{proj.impact}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Projects;
