"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "h", label: "Average Response Time" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      {display}
      {suffix}
    </span>
  );
};

export const Stats = () => (
  <section className="py-16 border-y border-border bg-card/20">
    <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="flex flex-col items-center gap-2"
        >
          <Counter value={s.value} suffix={s.suffix} />
          <p className="text-muted">{s.label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);
