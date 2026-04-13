import Layout from "@/components/Layout";
import { Target, Eye, Heart } from "lucide-react";

const MissionVisionPage = () => (
  <Layout>
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Mission & Vision</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-teal-pale rounded-xl p-8 border-l-4 border-primary">
            <Target className="h-10 w-10 text-primary mb-4" />
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To provide affordable, accessible, and world-class eye care services to all sections of society, utilizing cutting-edge technology and internationally trained specialists.
            </p>
          </div>
          <div className="bg-teal-pale rounded-xl p-8 border-l-4 border-primary">
            <Eye className="h-10 w-10 text-primary mb-4" />
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To be the leading centre of excellence for eye care in Andhra Pradesh, setting new benchmarks in patient outcomes, clinical research, and ophthalmic education.
            </p>
          </div>
        </div>
        
        <div className="text-center bg-card rounded-xl p-8 shadow-sm">
          <Heart className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Values</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {["Patient-First Care", "Clinical Excellence", "Integrity & Ethics", "Continuous Learning", "Compassion", "Accessibility"].map(v => (
              <div key={v} className="bg-teal-pale rounded-lg py-3 px-4 text-sm font-semibold text-foreground">{v}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default MissionVisionPage;
