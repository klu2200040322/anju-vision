import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import hospitalMain from "@/assets/hospital-main.jpg";
import hospitalArc from "@/assets/hospital-arc.jpg";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-teal-deep via-teal-dark to-teal-deep overflow-hidden">
    {/* Background hospital image */}
    <div className="absolute inset-0">
      <img src={hospitalMain} alt="Anju Eye Care Hospital" className="w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-teal-deep via-teal-deep/90 to-teal-deep/70" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block bg-primary/20 text-teal-light text-xs font-semibold px-4 py-1.5 rounded-full border border-primary/30 tracking-widest uppercase">
            Eyecare Redefined
          </span>
          <span className="inline-block bg-red-badge text-primary-foreground text-xs font-semibold px-3 py-1 rounded">
            Since 2012
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-reveal-left">
          We Give Light to Those Who Need Sight
        </h1>

        <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mb-4 leading-relaxed">
          Kakinada's First NABH-Accredited Tertiary Eye Care Centre with International Robotic & Laser Technology
        </p>

        <div className="flex items-center gap-2 mb-8">
          <span className="bg-primary/20 border border-primary/30 text-teal-light text-xs px-3 py-1 rounded-full">NABH Accredited</span>
          <span className="bg-primary/20 border border-primary/30 text-teal-light text-xs px-3 py-1 rounded-full">International Standards</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/appointment"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-mid transition-colors shadow-lg"
          >
            <Calendar className="h-5 w-5" /> Book Appointment
          </Link>
          <Link
            to="/services/general"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/10 transition-colors"
          >
            Explore Services <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Hospital images - right side */}
      <div className="hidden lg:flex flex-col gap-4">
        <div className="rounded-xl overflow-hidden shadow-2xl border border-primary/20">
          <img src={hospitalMain} alt="Anju Eye Care Main Hospital Building" className="w-full h-64 object-cover" />
        </div>
        <div className="rounded-xl overflow-hidden shadow-2xl border border-primary/20">
          <img src={hospitalArc} alt="ARC - Robotic & Laser Eye Centrum" className="w-full h-48 object-cover" />
        </div>
      </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
