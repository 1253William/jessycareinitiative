import { motion } from "framer-motion";
import { Heart, Eye, Star, Shield, Target, Globe } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import hero2 from "@/assets/hero-2.jpg";

const values = [
  { icon: Heart, title: "Compassion", desc: "We serve with empathy and genuine care for every individual." },
  { icon: Star, title: "Excellence", desc: "We strive for the highest standards in everything we do." },
  { icon: Shield, title: "Integrity", desc: "We operate with transparency and accountability." },
  { icon: Target, title: "Impact", desc: "We measure success by the lives we transform." },
  { icon: Globe, title: "Inclusivity", desc: "We embrace diversity and serve all communities equally." },
  { icon: Eye, title: "Innovation", desc: "We seek creative solutions to complex social challenges." },
];

const WhoWeAre = () => (
  <Layout>
    <PageHero title="Who We Are" subtitle="Learn about our story, mission, and the values that drive us." image={hero2} />

    {/* Story */}
    <section className="section-padding">
      <div className="container-narrow max-w-4xl">
        <SectionHeading label="Our Story" title="A Foundation Built on Hope" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none text-muted-foreground space-y-4"
        >
          <p>
            Jessy Care Foundation was born out of a deep desire to address the challenges facing young people in Ghana.
            Founded with the belief that every young person deserves access to quality education, skills training, and
            opportunities for growth, we have been working tirelessly to create pathways for success.
          </p>
          <p>
            Our journey began in a small community where we witnessed firsthand the potential of young people held back
            by limited resources. Today, we operate across multiple regions in Ghana, reaching hundreds of beneficiaries
            through our comprehensive programs.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-muted">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 card-shadow"
          >
            <h3 className="font-heading text-2xl font-bold mb-4 gradient-text">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower young people through education, vocational training, entrepreneurship,
              and community development initiatives that create sustainable change.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 card-shadow"
          >
            <h3 className="font-heading text-2xl font-bold mb-4 gradient-text">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower 100,000 young leaders in Africa by 2030, creating a generation of
              self-sufficient, skilled, and empowered individuals who drive positive change.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Core Values */}
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading label="Our Values" title="What Guides Us" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 p-5 rounded-xl border border-border hover:card-shadow transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                <v.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-heading font-semibold mb-1">{v.title}</h4>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default WhoWeAre;
