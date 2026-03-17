import { motion } from "framer-motion";
import { Stethoscope, Megaphone, HeartHandshake, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import hero3 from "@/assets/hero-3.jpg";

const areas = [
  {
    icon: Stethoscope,
    title: "Health Education",
    desc: "We deliver accessible health education to underserved communities, covering topics from disease prevention and nutrition to maternal health and hygiene. Our programs ensure families have the knowledge they need to make informed health decisions.",
  },
  {
    icon: Megaphone,
    title: "Awareness Campaigns",
    desc: "Through targeted outreach campaigns, we raise awareness on critical health issues including malaria prevention, reproductive health, mental wellness, and childhood vaccination. We reach thousands through community events and media.",
  },
  {
    icon: HeartHandshake,
    title: "Community Outreach",
    desc: "We go directly into communities — both urban and rural — to provide health screenings, distribute educational materials, and connect families with healthcare resources. No community is too remote for our reach.",
  },
  {
    icon: Users,
    title: "Strategic Partnerships",
    desc: "We collaborate with healthcare providers, government agencies, NGOs, and corporate partners to amplify our impact. Together, we build sustainable health infrastructure and expand access to care across Ghana.",
  },
];

const WhatWeDo = () => (
  <Layout>
    <PageHero title="What We Do" subtitle="Transforming lives through health education, awareness, and community care." image={hero3} />

    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          label="Our Focus Areas"
          title="Four Pillars of Health Impact"
          description="Each of our programs is designed to address a critical health need in the communities we serve."
        />
        <div className="space-y-8">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row gap-6 bg-card border border-border rounded-2xl p-6 md:p-8 hover:card-shadow-hover transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                <area.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl mb-2">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default WhatWeDo;