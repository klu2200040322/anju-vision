import { Link } from "react-router-dom";
import { Phone, Calendar } from "lucide-react";

const AppointmentCTA = () => (
  <section className="py-16 bg-gradient-to-r from-primary to-teal-dark">
    <div className="container mx-auto px-4 text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-3">Ready to See Clearly?</h2>
      <p className="text-primary-foreground/70 mb-2">Book your consultation with our specialist doctors.</p>
      <p className="text-primary-foreground/50 text-sm mb-8">Mon – Sat · 8:00 AM – 8:00 PM</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="tel:08842344255" className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors">
          <Phone className="h-5 w-5" /> Call: 0884 234 4255
        </a>
        <Link to="/appointment" className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
          <Calendar className="h-5 w-5" /> Book Online
        </Link>
      </div>
    </div>
  </section>
);

export default AppointmentCTA;
