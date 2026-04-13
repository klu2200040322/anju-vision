import { Star } from "lucide-react";

const testimonials = [
  { text: "Excellent care from Dr. Tejeswara. My cataract surgery was completely painless.", name: "Ramesh K.", location: "Kakinada", service: "Cataract Surgery", year: "2024" },
  { text: "Best eye hospital in the region. The staff is very caring and professional.", name: "Lakshmi S.", location: "Rajahmundry", service: "Retinal Surgery", year: "2024" },
  { text: "Very modern equipment and clean facilities. Highly recommend Anju Eye Care.", name: "Suresh M.", location: "Amalapuram", service: "General Checkup", year: "2023" },
  { text: "My child's ROP screening was handled with utmost care. Grateful to the team.", name: "Priya D.", location: "Kakinada", service: "ROP Screening", year: "2024" },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Patient Testimonials</h2>
        <p className="text-muted-foreground">What our patients say about their experience.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card rounded-lg p-6 shadow-sm">
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-gold text-gold" />)}
            </div>
            <p className="text-foreground text-sm mb-4 italic">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                {t.name[0]}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.service} · {t.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
