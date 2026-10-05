import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Stethoscope, BookOpen, HeartHandshake, Users, Heart, ChevronRight,
  ChevronLeft, Plus, Minus, ArrowRight, Calendar
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import CountUpNumber from "@/components/shared/CountUpNumber";
import VolunteerModal from "@/components/shared/VolunteerModal";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";

//Images from cloudinary to replace recent events images
const cloudinaryEvent1 = "https://res.cloudinary.com/dfmsaarli/image/upload/v1791194966/PHOTO-2025-11-18-19-49-14_rkmmqq.jpg";
const cloudinaryEvent2 = "https://res.cloudinary.com/dfmsaarli/image/upload/v1791194965/PHOTO-2025-11-18-19-55-16_scczyh.jpg";
const cloudinaryEvent3 = "https://res.cloudinary.com/dfmsaarli/image/upload/v1791194965/PHOTO-2025-11-18-19-58-43_qw0ntg.jpg";

const recentEvents = [
  {
    title: "Community Health Education Program",
    date: "November 18, 2025",
    desc: "Bringing essential health knowledge to underserved villages — covering disease prevention, nutrition, and hygiene.",
    image: cloudinaryEvent1,
  },
  {
    title: "Maternal & Child Health Open Day",
    date: "November 18, 2025",
    desc: "An open day showcasing maternal and child health programs with free screenings and educational workshops.",
    image: cloudinaryEvent2,
  },
  {
    title: "Community Health Awareness Summit",
    date: "November 18, 2025",
    desc: "A full-day summit bringing together health professionals and community leaders to discuss health strategies.",
    image: cloudinaryEvent3,
  },
];

const heroSlides = [
  { image: hero1, headline: "Support Our Mission", sub: "Help us bridge the health gap in underserved communities through education, awareness, and access to care." },
  { image: hero2, headline: "Educate. Empower. Heal.", sub: "Delivering life-changing health education and empowering communities with knowledge." },
  { image: hero3, headline: "Healthier Communities, Brighter Futures", sub: "Sustainable health initiatives that uplift individuals and families — ensuring no one is left behind." },
];

const metrics = [
  { end: 100, prefix: "~", label: "Community members at 2025 outreach" },
  { end: 30, suffix: "+", label: "Health Programs Delivered" },
  { end: 100, suffix: "+", label: "Outreach Campaigns" },
  { end: 5, suffix: "+", label: "Partner Organizations" },
];

const missionCards = [
  { icon: Stethoscope, title: "Health Education", desc: "Delivering accessible health knowledge to underserved communities." },
  { icon: BookOpen, title: "Awareness Campaigns", desc: "Raising awareness on critical health issues through outreach programs." },
  { icon: HeartHandshake, title: "Community Outreach", desc: "Reaching communities with life-changing health support and resources." },
  { icon: Users, title: "Strategic Partnerships", desc: "Collaborating with organizations to maximize health impact." },
];

const programme = {
  title: "Community Health Education & Awareness Outreach",
  summary: "One connected initiative bringing practical health education and community outreach together.",
  focusAreas: [
    {
      title: "Community Health Education Program",
      summary: "Accessible, practical health education to help individuals and families make informed decisions about prevention and wellbeing.",
    },
    {
      title: "Health Awareness & Outreach Campaign",
      summary: "Community-centered outreach that shares important health information and helps people connect with appropriate care.",
    },
  ],
};

const testimonials = [
  { quote: "The Jessicare Initiative taught me how to care for my newborn properly. The maternal health program gave me confidence as a first-time mother.", author: "Adwoa Serwaa" },
  { quote: "The community health program brought awareness to our village. We learned about disease prevention and proper nutrition for our children.", author: "Abena Owusu" },
  { quote: "Thanks to The Jessicare Initiative, our mothers now understand the importance of prenatal care. The maternal health initiative has been a blessing to our community.", author: "Nana Ama Mensah" },
  { quote: "The health screening outreach caught my condition early. I received treatment just in time. The Jessicare Initiative truly saves lives.", author: "Fatima Ibrahim" },
  { quote: "Our school now has a health education curriculum because of The Jessicare Initiative. The children are learning hygiene and nutrition habits that will last a lifetime.", author: "Grace Tetteh" },
  { quote: "As a community health volunteer, I have seen lives transformed. The Jessicare Initiative's dedication to reaching underserved families is truly inspiring.", author: "Ama Konadu" },
];

const faqs = [
  { q: "What is The Jessicare Initiative?", a: "The Jessicare Initiative is a purpose-driven organization working to bridge gaps in health education and accessibility through impactful programs, community outreach, and strategic partnerships, creating lasting change and healthier futures for all." },
  { q: "How can I volunteer?", a: "You can volunteer by clicking the 'Volunteer With Us' button on our website and filling out the volunteer application form. We welcome volunteers from all backgrounds — especially those passionate about health and community service." },
  // { q: "How can I donate?", a: "Visit our Donate page where you can contribute via Mobile Money, bank transfer, or donate health supplies and essential items directly." },
  // Donation FAQs stay hidden while the donation page is unavailable.
  // { q: "Where do donations go?", a: "100% of donations go directly to our programs — health education campaigns, community outreach, maternal care initiatives, and awareness programs." },
  // { q: "How can I track my donation?", a: "We provide regular impact reports and updates through our newsletter and social media channels so donors can see exactly how their contributions are making a difference." },
  { q: "What impact has the initiative made?", a: "The 2025 Health Awareness & Free Health Outreach welcomed approximately 100 community members. The initiative also reports delivering 30+ health programs, conducting 100+ outreach campaigns, and working with 5+ partner organizations." },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [volModalOpen, setVolModalOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [testIdx, setTestIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestIdx((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative flex min-h-[min(760px,85vh)] items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].headline}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/60" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 w-full">
          <div className="container-narrow px-4 md:px-8">
            <motion.div
              key={`text-${currentSlide}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mx-auto max-w-4xl text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight">
                {heroSlides[currentSlide].headline}
              </h1>
              <p className="mt-4 text-lg md:text-xl text-background/80 leading-relaxed">
                {heroSlides[currentSlide].sub}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button variant="gradient" size="lg" className="text-base px-8" onClick={() => setPartnerModalOpen(true)}>
                  Partner with Us
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-background bg-background px-8 text-base text-primary hover:bg-background/90 hover:text-primary"
                  onClick={() => setVolModalOpen(true)}
                >
                  Volunteer With Us
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                i === currentSlide ? "bg-primary w-8" : "bg-background/50"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <SectionHeading
            label="Our Purpose"
            title="Together, We Can Build Healthier Communities"
            description="We are committed to transforming lives by improving access to health education and empowering communities with knowledge and sustainable support systems."
          />
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <SectionHeading
            label="Our Mission"
            title="Bridging the Health Gap in Underserved Communities"
            description="Through targeted programs in health education, community outreach, and strategic partnerships, we're building healthier, more informed communities across Ghana."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <card.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes Preview */}
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading
            label="Our Programme"
            title="Community Health Education & Awareness Outreach"
            description="One connected initiative bringing practical health education and community outreach together."
          />
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-9"
          >
            <h3 className="font-heading text-xl font-semibold md:text-2xl">{programme.title}</h3>
            <p className="mt-3 text-muted-foreground">{programme.summary}</p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {programme.focusAreas.map((area) => (
                <div key={area.title} className="rounded-xl bg-muted p-5">
                  <h4 className="font-heading font-semibold">{area.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.summary}</p>
                </div>
              ))}
            </div>
          </motion.article>
          <div className="text-center mt-10">
            <Link to="/projects">
              <Button variant="gradient" size="lg">
                View Projects <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 gradient-hero-bg">
        <div className="container-narrow px-4 md:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Our Impact</p>
            <h2 className="mt-2 text-2xl font-bold text-primary-foreground md:text-3xl">A snapshot of our reach and work</h2>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
              Community attendance is approximate for the 2025 outreach. Other totals are initiative-reported.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-9 md:grid-cols-4 md:gap-8">
            {metrics.map((metric) => (
              <CountUpNumber
                key={metric.label}
                end={metric.end}
                prefix={metric.prefix}
                suffix={metric.suffix}
                label={metric.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="section-padding gradient-hero-bg">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Volunteer With Us Today
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10 text-left">
              {[
                "Make a Tangible Health Impact",
                "Develop New Skills",
                "Gain a Sense of Fulfillment",
                "Support a Worthy Cause",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 text-primary-foreground/90">
                  <Heart className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 text-base px-8"
              onClick={() => setVolModalOpen(true)}
            >
              Volunteer Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Recent Events */}
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading
            label="Recent Events"
            title="Our Latest Outreach Activities"
            description="See highlights from our most recent health outreach events and community programs."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentEvents.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:card-shadow-hover transition-shadow duration-300 group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="w-3.5 h-3.5 text-primary" /> {event.date}
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{event.title}</h3>
                  <p className="text-muted-foreground text-sm">{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/events">
              <Button variant="gradient" size="lg">
                See More Events <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <SectionHeading label="Testimonials" title="Stories of Impact" />
          <div className="relative max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={testIdx}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-2xl p-8 md:p-10 card-shadow text-center"
              >
                <p className="text-lg italic text-foreground leading-relaxed mb-6">
                  "{testimonials[testIdx].quote}"
                </p>
                <p className="font-heading font-semibold gradient-text">
                  — {testimonials[testIdx].author}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={() => setTestIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setTestIdx((prev) => (prev + 1) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <SectionHeading label="FAQ" title="Frequently Asked Questions" />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-medium cursor-pointer hover:bg-muted/50 transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === i ? <Minus className="w-5 h-5 text-primary flex-shrink-0" /> : <Plus className="w-5 h-5 text-muted-foreground flex-shrink-0" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <VolunteerModal open={volModalOpen} onOpenChange={setVolModalOpen} />
      <VolunteerModal open={partnerModalOpen} onOpenChange={setPartnerModalOpen} title="Partnership Inquiry" />
    </Layout>
  );
};

export default Index;