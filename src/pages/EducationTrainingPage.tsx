import Layout from "@/components/Layout";
import { GraduationCap } from "lucide-react";

const programs = [
  { title: "Diploma in Ophthalmic Assistant", duration: "2 Years", desc: "A comprehensive program training students in ophthalmic diagnostic procedures, patient care, and clinical assistance." },
  { title: "Diploma in Optometry (DO)", duration: "4 Years", desc: "An in-depth program covering refraction, contact lens fitting, and comprehensive eye examination techniques." },
  { title: "NBE Accredited Programs", duration: "Various", desc: "National Board of Examinations accredited fellowship and diploma programs in ophthalmology subspecialties." },
];

const EducationTrainingPage = () => (
  <Layout>
    <section className="bg-teal-deep py-16">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">Education & Training</h1>
        <p className="text-primary-foreground/60 mt-2">Building the next generation of eye care professionals.</p>
      </div>
    </section>
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-6">
          {programs.map(p => (
            <div key={p.title} className="bg-card rounded-xl p-8 border-l-4 border-primary shadow-sm">
              <div className="flex items-start gap-4">
                <GraduationCap className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground mb-1">{p.title}</h2>
                  <span className="text-sm text-primary font-semibold">Duration: {p.duration}</span>
                  <p className="text-muted-foreground mt-3">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default EducationTrainingPage;
