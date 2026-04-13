import Layout from "@/components/Layout";
import drDevi from "@/assets/dr-sk-devi.png";

const ManagingDirectorPage = () => (
  <Layout>
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <img src={drDevi} alt="Dr. S K Devi" className="rounded-xl shadow-lg w-full object-cover aspect-[3/4]" />
          </div>
          <div className="md:col-span-3">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Dr. S K Devi</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {["BPT", "PGDHHM"].map(c => (
                <span key={c} className="text-xs border border-primary text-primary px-3 py-1 rounded-full font-semibold">{c}</span>
              ))}
            </div>
            <p className="text-primary font-semibold text-lg mb-6">Managing Director — Anju Eye Care</p>
            
            <div className="space-y-3 mb-8">
              {[
                "Co-Founder — Anju International Eye Care Foundation",
                "Director — Anju Healthcare Services India Pvt Ltd",
              ].map(d => (
                <div key={d} className="flex gap-3 items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground">{d}</p>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Dr. S K Devi is the Managing Director and Co-Founder of Anju Eye Care. With her background in physiotherapy and healthcare management, she has been instrumental in building Anju Eye Care into a leading eye care institution in the East Godavari region.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ManagingDirectorPage;
