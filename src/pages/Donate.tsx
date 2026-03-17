import { motion } from "framer-motion";
import { Smartphone, Building2, Gift, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";

const methods = [
  {
    icon: Smartphone,
    title: "Mobile Money",
    fields: [
      { label: "Account Name", value: "JessyCare Impact Initiative" },
      { label: "Account Number", value: "024 XXX XXXX" },
    ],
  },
  {
    icon: Building2,
    title: "Bank Transfer",
    fields: [
      { label: "Bank Name", value: "Ghana Commercial Bank" },
      { label: "Account Number", value: "XXXXXXXXXXXXXXX" },
      { label: "SWIFT Code", value: "GHCBGHAC" },
      { label: "Branch", value: "Accra Main Branch" },
    ],
  },
  {
    icon: Gift,
    title: "Health Supplies & Essentials",
    items: ["Medical supplies", "Health education materials", "Hygiene kits & essentials"],
  },
];

const Donate = () => (
  <Layout>
    <PageHero title="Join Us in Building Healthier Futures" subtitle="Every contribution, big or small, creates lasting change in communities." />

    {/* Why Donate */}
    <section className="section-padding">
      <div className="container-narrow max-w-4xl">
        <SectionHeading label="Make a Difference" title="Why Your Donation Matters" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-lg leading-relaxed space-y-4"
        >
          <p>
            Your support helps us deliver essential health education, expand access to care, and empower
            communities with life-saving knowledge. Every contribution directly impacts lives and builds
            healthier futures for families across Ghana.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Donation Methods */}
    <section className="section-padding bg-muted">
      <div className="container-narrow">
        <SectionHeading label="How to Give" title="Donation Methods" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {methods.map((method, i) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 card-shadow"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                <method.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-4">{method.title}</h3>
              {method.fields && (
                <div className="space-y-3">
                  {method.fields.map((f) => (
                    <div key={f.label}>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{f.label}</p>
                      <p className="font-medium text-sm">{f.value}</p>
                    </div>
                  ))}
                </div>
              )}
              {method.items && (
                <ul className="space-y-2">
                  {method.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full gradient-bg flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Future Gateway */}
    <section className="section-padding">
      <div className="container-narrow max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-muted rounded-2xl p-8"
        >
          <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="font-heading font-semibold text-xl mb-2">Secure Payment Gateway Coming Soon</h3>
          <p className="text-muted-foreground text-sm">
            We are building a more robust payment system. Secure payment gateways will be integrated soon. Stay tuned.
          </p>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Donate;