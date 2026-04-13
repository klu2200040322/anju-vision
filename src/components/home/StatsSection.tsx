import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 7, suffix: "+", label: "Specialist Doctors" },
  { value: 8, suffix: "", label: "Departments" },
  { value: 13, suffix: "+", label: "Years of Excellence" },
  { value: 12, suffix: "+", label: "Yrs Chairman Fellowship" },
];

const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = () => {
      start += 1;
      setCount(start);
      if (start < end) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-mono text-4xl md:text-5xl font-bold text-primary-foreground">{count}{suffix}</div>
      <div className="text-primary-foreground/60 text-sm mt-2 font-body">{stats.find(s => s.value === end)?.label}</div>
    </div>
  );
};

const StatsSection = () => (
  <section className="bg-teal-dark py-12 border-y border-primary/20">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map(s => (
          <Counter key={s.label} end={s.value} suffix={s.suffix} />
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
