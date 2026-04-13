import { Shield, Globe, Zap, Heart, Users, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  { icon: Shield, title: "NABH Accredited", desc: "India's gold standard for hospital quality" },
  { icon: Globe, title: "International Training", desc: "Chairman trained in Canada & Netherlands" },
  { icon: Zap, title: "Robotic Precision", desc: "First ARC centre in East Godavari region" },
  { icon: Heart, title: "Painless Surgery", desc: "Needle-free, stitch-free procedures" },
  { icon: Users, title: "Affordable Care", desc: "Quality eye care for all income groups" },
  { icon: Clock, title: "12+ Years", desc: "Trusted since 2012, East & West Godavari" },
];

const WhyChooseUs = () => {
  const { ref, visible } = useScrollAnimation();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Why Choose Us</h2>
          <p className="text-muted-foreground">Trust signals that set us apart.</p>
        </div>
        <div ref={ref} className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {features.map(f => (
            <div key={f.title} className="flex gap-4 items-start">
              <div className="h-12 w-12 rounded-lg bg-teal-pale flex items-center justify-center flex-shrink-0">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
