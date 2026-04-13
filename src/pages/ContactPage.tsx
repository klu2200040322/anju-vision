import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  return (
    <Layout>
      <section className="bg-teal-deep py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">Contact Us</h1>
          <p className="text-primary-foreground/60 mt-2">We'd love to hear from you.</p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary focus:outline-none" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary focus:outline-none" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary focus:outline-none" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary focus:outline-none resize-none" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                <button type="submit" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-teal-mid transition-colors">Send Message</button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4"><MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><p className="font-semibold text-foreground">Alberta International Eye Hospital</p><p className="text-sm text-muted-foreground">#69-18-2/1, Gaigolupadu Junction, Kakinada – 533005</p></div></div>
              <div className="flex gap-4"><Phone className="h-5 w-5 text-primary flex-shrink-0" /><a href="tel:08842344255" className="text-foreground">0884 234 4255 / 236 6255</a></div>
              <div className="flex gap-4"><Mail className="h-5 w-5 text-primary flex-shrink-0" /><a href="mailto:yvhskkd@gmail.com" className="text-foreground">yvhskkd@gmail.com</a></div>
              <div className="flex gap-4"><Clock className="h-5 w-5 text-primary flex-shrink-0" /><p className="text-foreground">Mon – Sat: 8:00 AM – 8:00 PM</p></div>
              <div className="rounded-xl overflow-hidden h-64 mt-4">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.123!2d82.23!3d16.97" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Location" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
