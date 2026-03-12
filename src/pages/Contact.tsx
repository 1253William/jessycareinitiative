import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import VolunteerModal from "@/components/shared/VolunteerModal";

const Contact = () => {
  const [volOpen, setVolOpen] = useState(false);
  const [partnerOpen, setPartnerOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <Layout>
      <PageHero title="Contact Us" subtitle="We'd love to hear from you. Get in touch today." />

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="+233 XX XXX XXXX" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." rows={5} required />
                </div>
                <Button type="submit" variant="gradient" className="w-full">Send Message</Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-heading text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <p className="text-muted-foreground text-sm">info@jessycarefoundation.org</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Phone</p>
                      <p className="text-muted-foreground text-sm">+233 XX XXX XXXX</p>
                      <p className="text-muted-foreground text-sm">+233 XX XXX XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Address</p>
                      <p className="text-muted-foreground text-sm">Accra, Ghana</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick actions */}
              <div className="space-y-3">
                <h3 className="font-heading font-semibold text-lg">Get Involved</h3>
                <Button variant="gradient" className="w-full" onClick={() => setVolOpen(true)}>
                  Volunteer Application
                </Button>
                <Button variant="gradient-outline" className="w-full" onClick={() => setPartnerOpen(true)}>
                  Partnership Inquiry
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <VolunteerModal open={volOpen} onOpenChange={setVolOpen} title="Volunteer Application" />
      <VolunteerModal open={partnerOpen} onOpenChange={setPartnerOpen} title="Partnership Inquiry" />
    </Layout>
  );
};

export default Contact;
