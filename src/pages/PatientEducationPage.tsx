import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const conditions = [
  { title: "Age-Related Macular Degeneration (AMD)", content: "AMD is a leading cause of vision loss in people over 50. It affects the macula — the part of the retina responsible for sharp, central vision. There are two types: dry AMD (gradual) and wet AMD (more severe). Regular eye exams can help detect it early." },
  { title: "Cataract — Frequently Asked Questions", content: "A cataract is a clouding of the natural lens of the eye. It is the most common cause of vision loss in people over 40. Modern cataract surgery is painless, needle-free, and stitch-free, with recovery in just a few days." },
  { title: "Diabetic Retinopathy", content: "Diabetic retinopathy is a complication of diabetes that affects the blood vessels of the retina. It progresses through stages: mild, moderate, severe non-proliferative, and proliferative. Annual eye screening is essential for all diabetics." },
  { title: "Retinal Detachment", content: "Retinal detachment is a medical emergency where the retina pulls away from the back of the eye. Symptoms include sudden flashes, floaters, and a shadow across your vision. Immediate surgery is required to prevent permanent vision loss." },
  { title: "Retinopathy of Prematurity (ROP)", content: "ROP is an eye disease that affects premature babies. Abnormal blood vessels grow in the retina and can lead to blindness if untreated. Timely screening and laser treatment can save vision." },
  { title: "Glaucoma", content: "Glaucoma damages the optic nerve, usually due to high eye pressure. It often has no symptoms until significant vision loss occurs. Regular screening is the best defense against this 'silent thief of sight.'" },
  { title: "Epiretinal Membrane", content: "An epiretinal membrane is a thin layer of scar tissue that forms on the surface of the retina, causing blurred or distorted vision. Vitrectomy surgery can successfully remove the membrane and improve vision." },
  { title: "Macular Hole", content: "A macular hole is a small break in the macula that causes blurred and distorted central vision. Surgery (vitrectomy) is the standard treatment with high success rates." },
];

const PatientEducationPage = () => (
  <Layout>
    <section className="bg-teal-deep py-16">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">Patient Education</h1>
        <p className="text-primary-foreground/60 mt-2">Learn about common eye conditions and treatments.</p>
      </div>
    </section>
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {conditions.map((c, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-lg border border-border px-6">
              <AccordionTrigger className="font-display text-lg font-bold text-foreground hover:text-primary">
                {c.title}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {c.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </Layout>
);

export default PatientEducationPage;
