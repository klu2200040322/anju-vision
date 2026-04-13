import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import drTejeswara from "@/assets/dr-tejeswara.png";
import drDevi from "@/assets/dr-sk-devi.png";

const doctors = [
  { name: "Dr. Tejeswara Vara Prasad Dhupam", role: "Founder & Chairman · Vitreo-Retinal & Phaco Surgeon", creds: ["MS", "FVRS (Canada)"], image: drTejeswara, path: "/about/chairman" },
  { name: "Dr. S K Devi", role: "Managing Director", creds: ["BPT", "PGDHHM"], image: drDevi, path: "/about/managing-director" },
  { name: "Dr. Yenduri Sudhaker", role: "Medical Superintendent · Comprehensive Ophthalmology", creds: ["MS"], image: null, path: null },
  { name: "Dr. Murali Krishna", role: "Ophthalmologist", creds: ["MS"], image: null, path: null },
  { name: "Dr. V Satya Srinivas", role: "Ophthalmologist", creds: ["MS"], image: null, path: null },
  { name: "Dr. Himaja Disha", role: "Cornea & Refractive Specialist", creds: ["MS"], image: null, path: null },
  { name: "Dr. Anjali", role: "Ophthalmologist", creds: [], image: null, path: null },
  { name: "Dr. Fathima Nasreen", role: "Medical Retina Specialist", creds: ["MS"], image: null, path: null },
];

const DoctorsPage = () => (
  <Layout>
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Our Doctors</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Our team of experienced ophthalmologists and specialists.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {doctors.map(d => (
            <div key={d.name} className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-shadow">
              <div className="h-56 bg-teal-pale flex items-center justify-center">
                {d.image ? (
                  <img src={d.image} alt={d.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display text-3xl font-bold">
                    {d.name.split(" ").slice(0, 2).map(n => n[0]).join("")}
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-foreground mb-1">{d.name}</h3>
                {d.creds.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-2">
                    {d.creds.map(c => <span key={c} className="text-xs border border-primary/40 text-primary px-2 py-0.5 rounded-full">{c}</span>)}
                  </div>
                )}
                <p className="text-sm text-muted-foreground">{d.role}</p>
                {d.path && (
                  <Link to={d.path} className="text-primary text-sm font-semibold mt-3 inline-block hover:underline">View Profile →</Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default DoctorsPage;
