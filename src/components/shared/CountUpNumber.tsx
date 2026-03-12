import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CountUpNumberProps {
  end: number;
  suffix?: string;
  label: string;
}

const CountUpNumber = ({ end, suffix = "", label }: CountUpNumberProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold gradient-text font-heading">
        {count.toLocaleString()}{suffix}
      </div>
      <p className="mt-2 text-muted-foreground text-sm font-medium">{label}</p>
    </motion.div>
  );
};

export default CountUpNumber;
