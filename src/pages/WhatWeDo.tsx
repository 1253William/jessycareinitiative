import { motion } from "framer-motion";
import { GraduationCap, Wrench, Lightbulb, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import hero3 from "@/assets/hero-3.jpg";

const areas = [
  {
    icon: GraduationCap,
    title: "Education",
    desc: "We provide scholarships, learning materials, and mentoring to students who lack access to quality education. Our programs cover primary through tertiary education, ensuring no deserving student is left behind.",
  },
  {
    icon: Wrench,
    title: "Vocational Skills Training",
    desc: "Our vocational centers in Accra, Kumasi, and Tamale offer hands-on training in carpentry, tailoring, welding, hairdressing, and more. We equip young people with marketable skills for economic independence.",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurship",
    desc: "Through mentorship workshops and startup incubation programs, we help young entrepreneurs turn their ideas into viable businesses. Over 100 startups have been launched through our programs.",
  },
  {
    icon: Users,
    title: "Community Support",
    desc: "We strengthen communities through health awareness campaigns, library initiatives, digital literacy workshops, and youth empowerment seminars that create lasting social impact.",
  },
];

const WhatWeDo = () => (
  <Layout>
    <PageHero title="What We Do" subtitle="Transforming lives through education, skills, and opportunity." image={hero3} />

    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          label="Our Focus Areas"
          title="Four Pillars of Empowerment"
          description="Each of our programs is designed to address a critical need in the communities we serve."
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
