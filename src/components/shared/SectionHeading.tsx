import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  center?: boolean;
  gradient?: boolean;
}

const SectionHeading = ({ label, title, description, className, center = true, gradient = false }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
    className={cn("mb-12 md:mb-16", center && "text-center", className)}
  >
    {label && (
      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent text-accent-foreground mb-4">
        {label}
      </span>
    )}
    <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-bold leading-tight", gradient && "gradient-text")}>
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">{description}</p>
    )}
  </motion.div>
);

export default SectionHeading;
