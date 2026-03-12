import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  GraduationCap, Lightbulb, Wrench, Users, Heart, Award, Star, ChevronRight,
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
  { image: hero1, headline: "Support Our Mission", sub: "Your contribution helps us empower 100,000 young people in Ghana." },
  { image: hero2, headline: "Educate. Empower. Transform.", sub: "Providing quality education and scholarships to underserved communities." },
  { image: hero3, headline: "Building Skills, Building Futures", sub: "Vocational training that creates sustainable livelihoods." },
];

const metrics = [
  { end: 500, suffix: "+", label: "Empowered Young People" },
  { end: 30, suffix: "+", label: "Scholarships Awarded" },
  { end: 100, suffix: "+", label: "Funded Educational Projects" },
  { end: 50, suffix: "+", label: "Supported Entrepreneurial Ventures" },
];

const missionCards = [
  { icon: GraduationCap, title: "Education", desc: "Providing scholarships and educational resources to students in need." },
  { icon: Lightbulb, title: "Entrepreneurship", desc: "Mentoring young entrepreneurs to launch sustainable businesses." },
  { icon: Wrench, title: "Vocational Skills", desc: "Hands-on training in practical trades for economic independence." },
  { icon: Users, title: "Community Support", desc: "Strengthening communities through outreach and development." },
];

const programmes = [
  { title: "Vocational Training Initiative", summary: "Equipping youth with practical skills in carpentry, tailoring, and welding.", location: "Accra, Kumasi, Tamale", impact: "2,000+ trained" },
  { title: "Entrepreneurship & Mentorship Workshop", summary: "Business training and mentorship for aspiring entrepreneurs.", location: "Greater Accra Region", impact: "100+ startups launched" },
  { title: "Community Education Outreach", summary: "Bringing quality education to underserved communities.", location: "Northern Ghana", impact: "500+ students supported" },
];

const testimonials = [
  { quote: "Jessy Care Foundation changed my life. Thanks to their scholarship I am now a university graduate.", author: "Kwame Mensah" },
  { quote: "The vocational training center gave me the skills I needed to start my business.", author: "Abena Owusu" },
];

const faqs = [
  { q: "What is Jessy Care Foundation?", a: "Jessy Care Foundation is a non-governmental organization dedicated to empowering young people in Ghana through education, vocational training, entrepreneurship, and community development initiatives." },
  { q: "How can I volunteer?", a: "You can volunteer by clicking the 'Volunteer With Us' button on our website and filling out the volunteer application form. We welcome volunteers from all backgrounds." },
  { q: "How can I donate?", a: "Visit our Donate page where you can contribute via Mobile Money, bank transfer, or donate food and gift items directly." },
  { q: "Where do donations go?", a: "100% of donations go directly to our programs — scholarships, vocational training, community education, and entrepreneurship initiatives." },
  { q: "How can I track my donation?", a: "We provide regular impact reports and updates through our newsletter and social media channels so donors can see exactly how their contributions are making a difference." },
  { q: "What impact has the foundation made?", a: "We have empowered over 500 young people, awarded 30+ scholarships, funded 100+ educational projects, and supported 50+ entrepreneurial ventures across Ghana." },
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
            title="Together, We Can Empower Generations"
            description="Jessy Care Foundation is committed to empowering young people through education, vocational training, entrepreneurship, and community development initiatives."
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
            title="We Believe We Can Empower 100,000 Young Leaders by 2030"
            description="Through targeted programs in education, skills training, and community development, we're building a generation of empowered African leaders."
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
            title="Making an Impact Across Ghana"
            description="Our programs are designed to create lasting change through education and skills development."
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
                "Make a Tangible Impact",
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
