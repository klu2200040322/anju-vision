import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import drTejeswara from "@/assets/dr-tejeswara.png";
import drDevi from "@/assets/dr-sk-devi.png";

const leaders = [
  {
    name: "Dr. Tejeswara Vara Prasad Dhupam",
    credentials: ["MS", "FVRS (Canada)"],
    title: "Founder & Chairman",
    subtitle: "Vitreo-Retinal & Phaco Surgeon",
    details: [
      "Clinical Fellow — University of Alberta, Canada",
      "PhD Scholar — Maastricht University, Netherlands",
      "Founder — Anju International Eye Care Foundation",
      "Director — Anju Health Care Services India Pvt. Ltd",
    ],
    image: drTejeswara,
    path: "/about/chairman",
  },
  {
    name: "Dr. S K Devi",
    credentials: ["BPT", "PGDHHM"],
    title: "Managing Director — Anju Eye Care",
    subtitle: "",
    details: [
      "Co-Founder — Anju International Eye Care Foundation",
      "Director — Anju Healthcare Services India Pvt Ltd",
    ],
    image: drDevi,
    path: "/about/managing-director",
  },
];

const LeadershipSection = () => {
  const { ref, visible } = useScrollAnimation();

  return (
    <section className="py-20 bg-teal-deep">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-3">Our Leadership</h2>
          <p className="text-primary-foreground/60">Internationally trained specialists committed to your vision.</p>
        </div>
        <div ref={ref} className={`grid md:grid-cols-2 gap-8 max-w-5xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {leaders.map(l => (
            <div key={l.name} className="bg-teal-dark rounded-xl border-l-[6px] border-primary overflow-hidden flex flex-col sm:flex-row">
              <div className="sm:w-48 h-56 sm:h-auto flex-shrink-0">
                <img src={l.image} alt={l.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="p-6 flex-1">
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-1">{l.name}</h3>
                <div className="flex flex-wrap gap-1 mb-2">
                  {l.credentials.map(c => (
                    <span key={c} className="text-xs border border-primary/40 text-teal-light px-2 py-0.5 rounded-full">{c}</span>
                  ))}
                </div>
                <p className="text-primary font-semibold text-sm mb-1">{l.title}</p>
                {l.subtitle && <p className="text-primary-foreground/60 text-sm mb-3">{l.subtitle}</p>}
                <ul className="space-y-1 mb-4">
                  {l.details.map(d => (
                    <li key={d} className="text-xs text-primary-foreground/50">• {d}</li>
                  ))}
                </ul>
                <Link to={l.path} className="text-primary text-sm font-semibold hover:underline">
                  View Full Profile →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
