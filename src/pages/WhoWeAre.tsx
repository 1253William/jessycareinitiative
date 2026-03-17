import { motion } from "framer-motion";
import { Heart, Shield, Scale, Target, Handshake } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import hero2 from "@/assets/hero-2.jpg";

const values = [
  { icon: Heart, title: "Compassion", desc: "We serve with empathy, kindness, and a genuine commitment to improving lives." },
  { icon: Shield, title: "Integrity", desc: "We uphold honesty, transparency, and accountability in all our actions." },
  { icon: Scale, title: "Equity", desc: "We believe everyone deserves equal access to quality health information and care, regardless of background." },
  { icon: Target, title: "Impact", desc: "We are driven by results and committed to creating meaningful, lasting change in communities." },
  { icon: Handshake, title: "Collaboration", desc: "We believe in partnerships and teamwork to maximize impact." },
];

const WhoWeAre = () => (
  <Layout>
    <PageHero title="Who We Are" subtitle="Learn about our story, mission, and the values that drive us." image={hero2} />

    {/* Story */}
    <section className="section-padding">
      <div className="container-narrow max-w-4xl">
        <SectionHeading label="Our Story" title="A Purpose-Driven Initiative" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none text-muted-foreground space-y-4"
        >
          <p>
            JessyCare Impact Initiative is a purpose-driven organization focused on improving health outcomes
            through education, awareness, and community-driven programs. We were founded with the belief that
            no one should be limited by lack of access to health knowledge or care.
          </p>
          <p>
            Our journey began in communities where we witnessed firsthand the devastating effects of health
            misinformation and limited access to care. Today, we operate across multiple regions in Ghana,
            reaching hundreds of families through comprehensive health education and outreach programs.
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
              At JessyCare Impact Initiative, we strive to bridge the health gap both in underserved cities and
              villages. We work to reach communities with life-changing health education, empowering practical
              awareness, and sustainable initiatives that uplift individuals and families — ensuring no one is left behind.
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
              To create a world where no one is limited by lack of access to health knowledge or care,
              and every individual has the chance to live a healthy, dignified life.
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