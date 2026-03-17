import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Stethoscope, BookOpen, HeartHandshake, Users, Heart, Award, Star, ChevronRight,
  ChevronLeft, Plus, Minus, MapPin, ArrowRight
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import CountUpNumber from "@/components/shared/CountUpNumber";
import VolunteerModal from "@/components/shared/VolunteerModal";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const heroSlides = [
  { image: hero1, headline: "Support Our Mission", sub: "Help us bridge the health gap in underserved communities through education, awareness, and access to care." },
  { image: hero2, headline: "Educate. Empower. Heal.", sub: "Delivering life-changing health education and empowering communities with knowledge." },
  { image: hero3, headline: "Healthier Communities, Brighter Futures", sub: "Sustainable health initiatives that uplift individuals and families — ensuring no one is left behind." },
];

const metrics = [
  { end: 500, suffix: "+", label: "Communities Reached" },
  { end: 30, suffix: "+", label: "Health Programs Delivered" },
  { end: 100, suffix: "+", label: "Outreach Campaigns" },
  { end: 50, suffix: "+", label: "Partner Organizations" },
];

const missionCards = [
  { icon: Stethoscope, title: "Health Education", desc: "Delivering accessible health knowledge to underserved communities." },
  { icon: BookOpen, title: "Awareness Campaigns", desc: "Raising awareness on critical health issues through outreach programs." },
  { icon: HeartHandshake, title: "Community Outreach", desc: "Reaching communities with life-changing health support and resources." },
  { icon: Users, title: "Strategic Partnerships", desc: "Collaborating with organizations to maximize health impact." },
];

const programmes = [
  { title: "Community Health Education Program", summary: "Bringing essential health knowledge to underserved cities and villages.", location: "Accra, Kumasi, Tamale", impact: "2,000+ educated" },
  { title: "Health Awareness & Outreach Campaign", summary: "Empowering communities with practical health awareness and preventive care.", location: "Greater Accra Region", impact: "500+ families reached" },
  { title: "Maternal & Child Health Initiative", summary: "Improving maternal and child health outcomes through education and support.", location: "Northern Ghana", impact: "300+ mothers supported" },
];

const testimonials = [
  { quote: "JessyCare Impact Initiative opened my eyes to health practices that changed my family's life. We now have access to knowledge we never had before.", author: "Kwame Mensah" },
  { quote: "The community health program brought awareness to our village. We learned about disease prevention and proper nutrition for our children.", author: "Abena Owusu" },
];

const faqs = [
  { q: "What is JessyCare Impact Initiative?", a: "JessyCare Impact Initiative is a purpose-driven organization working to bridge gaps in health education and accessibility through impactful programs, community outreach, and strategic partnerships, creating lasting change and healthier futures for all." },
  { q: "How can I volunteer?", a: "You can volunteer by clicking the 'Volunteer With Us' button on our website and filling out the volunteer application form. We welcome volunteers from all backgrounds — especially those passionate about health and community service." },
  { q: "How can I donate?", a: "Visit our Donate page where you can contribute via Mobile Money, bank transfer, or donate health supplies and essential items directly." },
  { q: "Where do donations go?", a: "100% of donations go directly to our programs — health education campaigns, community outreach, maternal care initiatives, and awareness programs." },
  { q: "How can I track my donation?", a: "We provide regular impact reports and updates through our newsletter and social media channels so donors can see exactly how their contributions are making a difference." },
  { q: "What impact has the initiative made?", a: "We have reached over 500 communities, delivered 30+ health programs, run 100+ outreach campaigns, and partnered with 50+ organizations to improve health outcomes across Ghana." },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [volModalOpen, setVolModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [testIdx, setTestIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
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

        <div className="relative z-10 h-full flex items-center">
          <div className="container-narrow px-4 md:px-8">
            <motion.div
              key={`text-${currentSlide}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight">
                {heroSlides[currentSlide].headline}
              </h1>
              <p className="mt-4 text-lg md:text-xl text-background/80 leading-relaxed">
                {heroSlides[currentSlide].sub}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/donate">
                  <Button variant="gradient" size="lg" className="text-base px-8">
                    Donate To Us
                  </Button>
                </Link>
                <Button
                  variant="gradient-outline"
                  size="lg"
                  className="text-base px-8 border-background text-background hover:bg-background hover:text-foreground"
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

      {/* Impact Metrics */}
      <section className="py-16 gradient-hero-bg">
        <div className="container-narrow px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <CountUpNumber end={m.end} suffix={m.suffix} label={m.label} />
              </div>
            ))}
          </div>
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
            label="Our Programmes"
            title="Making a Health Impact Across Ghana"
            description="Our programs are designed to create lasting change through health education, awareness, and community empowerment."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programmes.map((prog, i) => (
              <motion.div
                key={prog.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:card-shadow-hover transition-all duration-300 group"
              >
                <h3 className="font-heading font-semibold text-lg mb-3">{prog.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{prog.summary}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <MapPin className="w-3.5 h-3.5" /> {prog.location}
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                  <Star className="w-3.5 h-3.5" /> {prog.impact}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/projects">
              <Button variant="gradient" size="lg">
                View Projects <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
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
    </Layout>
  );
};

export default Index;