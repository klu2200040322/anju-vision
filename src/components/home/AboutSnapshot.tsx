import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AboutSnapshot = () => {
  const { ref, visible } = useScrollAnimation();

  return (
    <section className="py-20 bg-background">
      <div ref={ref} className={`container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="border-l-4 border-primary pl-8">
          <p className="font-display text-2xl md:text-3xl italic text-foreground/80 leading-relaxed">
            "Started in March 2012 with a vision to bring affordable & quality eye care to all the needy people of East and West Godavari."
          </p>
        </div>
        <div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Anju Eye Care was the first hospital in the region to acquire state-of-the-art retinal surgical equipment including the Alcon Constellation Vision System. With NABH accreditation, we maintain the highest standards of patient care and safety.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our team of specialist doctors brings international expertise, with our Chairman having trained at the University of Alberta, Canada and currently pursuing research at Maastricht University, Netherlands.
          </p>
          <Link to="/about/hospital" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            Learn Our Story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
