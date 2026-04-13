import Layout from "@/components/Layout";
import { useParams, Link } from "react-router-dom";
import { Eye, Microscope, Scan, Activity, Shield, Baby, MonitorSmartphone, Stethoscope } from "lucide-react";

const servicesData: Record<string, { icon: any; title: string; description: string; symptoms: string[]; treatment: string }> = {
  general: { icon: Stethoscope, title: "General Ophthalmology", description: "Comprehensive eye examinations and treatment of common eye conditions. Our general ophthalmology department provides routine eye check-ups, prescription of glasses and contact lenses, and management of common eye diseases.", symptoms: ["Blurry vision", "Eye strain", "Headaches", "Dry eyes", "Red eyes"], treatment: "Our specialists use advanced diagnostic equipment to identify and treat a wide range of eye conditions. From refractive errors to infections, we provide personalized treatment plans." },
  "vitreo-retinal": { icon: Eye, title: "Vitreo-Retinal Surgery", description: "Advanced surgical treatment of retinal diseases including diabetic retinopathy, retinal detachment, macular holes, and epiretinal membranes. Our chairman, Dr. Tejeswara, is an internationally trained vitreo-retinal surgeon.", symptoms: ["Floaters and flashes", "Sudden vision loss", "Distorted vision", "Shadow in peripheral vision"], treatment: "Using the Alcon Constellation Vision System — the first in the region — we perform micro-incision vitreoretinal surgeries with excellent outcomes." },
  cornea: { icon: Scan, title: "Cornea & Refractive Surgery", description: "Treatment of corneal diseases and refractive errors through advanced surgical techniques including LASIK with the SCHWIND AMARIS laser platform.", symptoms: ["Corneal infections", "Keratoconus", "Refractive errors", "Corneal scarring"], treatment: "Our ARC — Robotic & Laser Eye Centrum offers German-engineered SCHWIND AMARIS laser for precise, painless vision correction procedures." },
  cataract: { icon: Microscope, title: "Cataract & IOL Surgery", description: "Painless, needle-free, stitch-free phacoemulsification cataract surgery with premium intraocular lens (IOL) options.", symptoms: ["Cloudy or blurry vision", "Difficulty with night driving", "Faded colours", "Sensitivity to glare"], treatment: "We offer the latest phaco techniques with premium IOL options including multifocal, toric, and extended depth of focus lenses." },
  glaucoma: { icon: Activity, title: "Glaucoma Management", description: "Early detection and comprehensive management of glaucoma — the 'silent thief of sight'. Regular screening is essential for early intervention.", symptoms: ["Gradual peripheral vision loss", "Tunnel vision", "Eye pain", "Halos around lights"], treatment: "Our glaucoma management includes medical therapy, laser treatment, and advanced surgical options when needed." },
  paediatric: { icon: Baby, title: "Paediatric Eye Care", description: "Specialized eye care for children including screening for amblyopia, strabismus, and other childhood eye conditions.", symptoms: ["Squinting", "Eye turning", "Difficulty reading", "Frequent eye rubbing"], treatment: "Our paediatric specialists provide gentle, child-friendly care with age-appropriate assessment techniques." },
  rop: { icon: Shield, title: "ROP Screening", description: "Retinopathy of Prematurity (ROP) screening for premature infants. Early detection and treatment can prevent blindness in newborns.", symptoms: ["Premature birth (< 34 weeks)", "Low birth weight", "Oxygen therapy at birth"], treatment: "We provide comprehensive ROP screening using RetCam and offer laser treatment when required." },
  "tele-ophthalmology": { icon: MonitorSmartphone, title: "Tele-Ophthalmology", description: "Remote eye care consultations bringing specialist eye care to patients in rural and underserved areas.", symptoms: ["Limited access to eye care", "Follow-up consultations", "Second opinions"], treatment: "Our tele-ophthalmology program connects patients with our specialists through secure video consultations and remote diagnostic tools." },
};

const ServicePage = () => {
  const { slug } = useParams();
  const service = servicesData[slug || "general"] || servicesData.general;
  const Icon = service.icon;

  return (
    <Layout>
      <section className="bg-teal-deep py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-primary-foreground/50 text-sm mb-4">
            <Link to="/" className="hover:text-primary-foreground">Home</Link> / <Link to="/services/general" className="hover:text-primary-foreground">Services</Link> / <span className="text-primary-foreground">{service.title}</span>
          </div>
          <div className="flex items-center gap-4">
            <Icon className="h-12 w-12 text-primary" />
            <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">{service.title}</h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-10">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">About This Service</h2>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>

            <div className="bg-teal-pale rounded-xl p-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Symptoms & Indications</h2>
              <ul className="space-y-2">
                {service.symptoms.map(s => (
                  <li key={s} className="flex gap-3 items-center text-foreground">
                    <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Treatment at Anju Eye Care</h2>
              <p className="text-muted-foreground leading-relaxed">{service.treatment}</p>
            </div>

            <div className="bg-gradient-to-r from-primary to-teal-dark rounded-xl p-8 text-center">
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-3">Book a Consultation</h3>
              <p className="text-primary-foreground/70 mb-6">Speak with our specialist about your eye care needs.</p>
              <Link to="/appointment" className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicePage;
