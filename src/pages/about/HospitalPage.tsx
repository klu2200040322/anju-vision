import Layout from "@/components/Layout";

const HospitalPage = () => (
  <Layout>
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">Our Hospital</h1>
        
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>Founded in March 2012, Anju Eye Care has grown to become Kakinada's premier NABH-accredited tertiary eye care centre. Located at the Alberta International Eye Hospital, we serve patients from across East and West Godavari districts.</p>
          
          <div className="bg-teal-pale rounded-xl p-8 border-l-4 border-primary">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Milestones</h2>
            <div className="space-y-3">
              {[
                { year: "2012", text: "Founded by Dr. Tejeswara Vara Prasad Dhupam" },
                { year: "2014", text: "First to acquire Alcon Constellation Vision System in the region" },
                { year: "2016", text: "NABH Accreditation achieved" },
                { year: "2020", text: "Launched Tele-Ophthalmology services" },
                { year: "2023", text: "Introduced SCHWIND AMARIS laser technology" },
                { year: "2024", text: "ARC — Robotic & Laser Eye Centrum launched" },
              ].map(m => (
                <div key={m.year} className="flex gap-4">
                  <span className="font-mono font-bold text-primary min-w-[4rem]">{m.year}</span>
                  <span className="text-foreground">{m.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <p>With 7+ specialist doctors across 8 departments, we offer comprehensive eye care — from routine eye exams to complex vitreo-retinal surgeries — all under one roof.</p>
          <p>Our commitment to affordable, quality eye care for all continues to drive everything we do.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default HospitalPage;
