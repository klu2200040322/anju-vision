import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import anjuLogo from "@/assets/anju-logo.png";

const Footer = () => (
  <footer className="bg-teal-deep text-primary-foreground/80">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={anjuLogo} alt="Anju Eye Care" className="h-12 w-12 rounded-full" />
            <span className="font-display text-xl font-bold text-primary-foreground">Anju Eye Care</span>
          </div>
          <p className="text-sm leading-relaxed mb-3">
            Kakinada's first NABH-accredited tertiary eye care centre, offering world-class ophthalmic services since 2012.
          </p>
          <span className="inline-block bg-red-badge text-primary-foreground text-xs px-3 py-1 rounded font-semibold">Since 2012</span>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-lg font-bold text-primary-foreground mb-4">Quick Links</h4>
          <div className="space-y-2 text-sm">
            {[
              { label: "About Us", path: "/about/hospital" },
              { label: "Our Services", path: "/services/general" },
              { label: "Our Doctors", path: "/doctors" },
              { label: "Patient Education", path: "/patient-education" },
              { label: "Gallery", path: "/gallery" },
              { label: "Education & Training", path: "/education-training" },
            ].map(link => (
              <Link key={link.path} to={link.path} className="block hover:text-primary-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-lg font-bold text-primary-foreground mb-4">Services</h4>
          <div className="space-y-2 text-sm">
            {["Vitreo-Retinal Surgery", "Cataract & IOL", "Cornea & Refractive", "Glaucoma", "Paediatric Eye Care", "ROP Screening"].map(s => (
              <p key={s}>{s}</p>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-lg font-bold text-primary-foreground mb-4">Contact Us</h4>
          <div className="space-y-3 text-sm">
            <div className="flex gap-3"><MapPin className="h-4 w-4 mt-1 flex-shrink-0" /><span>Alberta International Eye Hospital, #69-18-2/1, Gaigolupadu Junction, Kakinada – 533005</span></div>
            <div className="flex gap-3"><Phone className="h-4 w-4 flex-shrink-0" /><a href="tel:08842344255">0884 234 4255 / 236 6255</a></div>
            <div className="flex gap-3"><Mail className="h-4 w-4 flex-shrink-0" /><a href="mailto:yvhskkd@gmail.com">yvhskkd@gmail.com</a></div>
            <div className="flex gap-3"><Clock className="h-4 w-4 flex-shrink-0" /><span>Mon – Sat: 8:00 AM – 8:00 PM</span></div>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between text-xs">
        <p>© 2024 Anju Eye Care. A Unit of Yashvedh Healthcare Services.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <Link to="/privacy-policy" className="hover:text-primary-foreground">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary-foreground">Terms</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
