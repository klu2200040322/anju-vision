import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import anjuLogo from "@/assets/anju-logo.png";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About", path: "/about", children: [
      { label: "Chairman", path: "/about/chairman" },
      { label: "Managing Director", path: "/about/managing-director" },
      { label: "Hospital", path: "/about/hospital" },
      { label: "Mission & Vision", path: "/about/mission-vision" },
    ]
  },
  {
    label: "Services", path: "/services", children: [
      { label: "General Ophthalmology", path: "/services/general" },
      { label: "Vitreo-Retinal Surgery", path: "/services/vitreo-retinal" },
      { label: "Cornea & Refractive", path: "/services/cornea" },
      { label: "Cataract & IOL", path: "/services/cataract" },
      { label: "Glaucoma", path: "/services/glaucoma" },
      { label: "Paediatric Eye Care", path: "/services/paediatric" },
      { label: "ROP Screening", path: "/services/rop" },
      { label: "Tele-Ophthalmology", path: "/services/tele-ophthalmology" },
    ]
  },
  { label: "Doctors", path: "/doctors" },
  { label: "Gallery", path: "/gallery" },
  { label: "Education", path: "/education-training" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-teal-deep/95 backdrop-blur-md shadow-lg" : "bg-teal-deep/80 backdrop-blur-sm"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={anjuLogo} alt="Anju Eye Care" className="h-12 w-12 rounded-full" />
          <span className="font-display text-xl font-bold text-primary-foreground hidden sm:block">Anju Eye Care</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map(item => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.path}
                className={`px-3 py-2 text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors relative ${location.pathname === item.path ? "after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-primary-foreground" : ""}`}
              >
                {item.label}
                {item.children && <span className="ml-1">▾</span>}
              </Link>
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 bg-card rounded-md shadow-xl py-2 min-w-[220px] border border-border">
                  {item.children.map(child => (
                    <Link key={child.path} to={child.path} className="block px-4 py-2 text-sm text-foreground hover:bg-teal-pale hover:text-primary transition-colors">
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:08842344255" className="flex items-center gap-2 text-primary-foreground/90 text-sm">
            <Phone className="h-4 w-4" /> 0884 234 4255
          </a>
          <Link to="/appointment" className="bg-primary-foreground text-primary px-5 py-2 rounded-md text-sm font-semibold hover:bg-primary-foreground/90 transition-colors">
            Book Appointment
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-primary-foreground p-2">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-teal-deep/98 backdrop-blur-md border-t border-primary-foreground/10">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map(item => (
              <div key={item.label}>
                <Link to={item.path} className="block px-4 py-3 text-primary-foreground/90 hover:text-primary-foreground font-medium">
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-6 space-y-1">
                    {item.children.map(child => (
                      <Link key={child.path} to={child.path} className="block px-4 py-2 text-sm text-primary-foreground/70 hover:text-primary-foreground">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-primary-foreground/10 space-y-3">
              <a href="tel:08842344255" className="flex items-center gap-2 text-primary-foreground px-4 py-2">
                <Phone className="h-4 w-4" /> 0884 234 4255
              </a>
              <Link to="/appointment" className="block mx-4 text-center bg-primary-foreground text-primary px-5 py-3 rounded-md font-semibold">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
