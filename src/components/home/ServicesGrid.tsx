import { Link } from "react-router-dom";
import { Eye, Microscope, Scan, Activity, Shield, Baby, MonitorSmartphone, Stethoscope } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const services = [
  { icon: Stethoscope, title: "General Ophthalmology", desc: "Comprehensive eye exams and treatments", path: "/services/general" },
  { icon: Eye, title: "Vitreo-Retinal Surgery", desc: "Advanced retinal surgical procedures", path: "/services/vitreo-retinal" },
  { icon: Scan, title: "Cornea & Refractive", desc: "LASIK, corneal transplants & more", path: "/services/cornea" },
  { icon: Microscope, title: "Cataract & IOL", desc: "Painless, stitch-free cataract surgery", path: "/services/cataract" },
  { icon: Activity, title: "Glaucoma", desc: "Early detection and management", path: "/services/glaucoma" },
  { icon: Baby, title: "Paediatric Eye Care", desc: "Specialized care for children's eyes", path: "/services/paediatric" },
  { icon: Shield, title: "ROP Screening", desc: "Retinopathy of prematurity screening", path: "/services/rop" },
  { icon: MonitorSmartphone, title: "Tele-Ophthalmology", desc: "Remote eye care consultations", path: "/services/tele-ophthalmology" },
];

const ServicesGrid = () => {
  const { ref, visible } = useScrollAnimation();

  return (
    <section className="py-20 bg-teal-pale">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive eye care services with cutting-edge technology and experienced specialists.</p>
        </div>
        <div ref={ref} className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {services.map((s, i) => (
            <Link
              key={s.title}
              to={s.path}
              className="bg-card rounded-lg p-6 border-l-[3px] border-primary/40 hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <s.icon className="h-8 w-8 text-primary mb-4 group-hover:rotate-6 transition-transform" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
              <span className="text-primary text-sm font-semibold">Learn More →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
