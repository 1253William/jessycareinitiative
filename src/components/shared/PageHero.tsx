import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
}

const PageHero = ({ title, subtitle, image }: PageHeroProps) => (
  <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
    {image && (
      <>
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-foreground/70" />
      </>
    )}
    {!image && <div className="absolute inset-0 bg-primary opacity-90" />}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative z-10 text-center px-4 py-20"
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background">{title}</h1>
      {subtitle && <p className="mt-4 text-background/80 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  </section>
);

export default PageHero;
