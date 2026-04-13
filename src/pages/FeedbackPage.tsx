import Layout from "@/components/Layout";
import { useState } from "react";
import { Star } from "lucide-react";

const FeedbackPage = () => {
  const [form, setForm] = useState({ name: "", rating: 5, feedback: "" });

  return (
    <Layout>
      <section className="bg-teal-deep py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">Patient Feedback</h1>
          <p className="text-primary-foreground/60 mt-2">Your feedback helps us improve.</p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-xl">
          <form className="bg-card rounded-xl p-8 shadow-sm space-y-6" onSubmit={e => e.preventDefault()}>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Your Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Rating</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(n => (
                  <button key={n} type="button" onClick={() => setForm({ ...form, rating: n })}>
                    <Star className={`h-8 w-8 ${n <= form.rating ? "fill-gold text-gold" : "text-border"}`} />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Your Feedback</label>
              <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none resize-none" value={form.feedback} onChange={e => setForm({ ...form, feedback: e.target.value })} />
            </div>
            <button type="submit" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-teal-mid transition-colors w-full">Submit Feedback</button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default FeedbackPage;
