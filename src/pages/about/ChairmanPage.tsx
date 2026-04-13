import Layout from "@/components/Layout";
import drTejeswara from "@/assets/dr-tejeswara.png";

const ChairmanPage = () => (
  <Layout>
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <img src={drTejeswara} alt="Dr. Tejeswara Vara Prasad Dhupam" className="rounded-xl shadow-lg w-full object-cover aspect-[3/4]" />
          </div>
          <div className="md:col-span-3">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Dr. Tejeswara Vara Prasad Dhupam</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {["MS", "FVRS (Canada)"].map(c => (
                <span key={c} className="text-xs border border-primary text-primary px-3 py-1 rounded-full font-semibold">{c}</span>
              ))}
            </div>
            <p className="text-primary font-semibold text-lg mb-1">Founder & Chairman</p>
            <p className="text-muted-foreground mb-6">Vitreo-Retinal & Phaco Surgeon</p>
            
            <div className="space-y-3 mb-8">
              {[
                "Formal Clinical Fellow, University of Alberta - Canada",
                "Ph.D Scholar, Maastricht University - Netherlands",
                "Founder — Anju International Eye Care Foundation",
                "Director — Anju Health Care Services India Pvt. Ltd",
              ].map(d => (
                <div key={d} className="flex gap-3 items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground">{d}</p>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Dr. Tejeswara Vara Prasad Dhupam is a renowned Vitreo-Retinal and Phaco surgeon with over 12 years of international fellowship and clinical experience. He founded Anju Eye Care in 2012 with the vision of providing world-class eye care to the people of Andhra Pradesh.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              His extensive training at the University of Alberta, Canada and ongoing research at Maastricht University, Netherlands ensures that patients at Anju Eye Care receive the most advanced treatments available globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ChairmanPage;
