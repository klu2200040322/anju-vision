import Layout from "@/components/Layout";
import { useState } from "react";
import { Calendar, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  "General Consultation", "Cataract / IOL", "LASIK / Refractive (ARC)",
  "Vitreo-Retinal", "Cornea", "Glaucoma", "Paediatric", "ROP Screening"
];

const doctors = [
  "Dr. Tejeswara (Retina Specialist)", "Dr. Yenduri Sudhaker (Comprehensive)",
  "Dr. Himaja Disha (Cornea)", "Dr. Murali Krishna", "Dr. V Satya Srinivas",
  "Dr. Anjali", "Dr. Fathima Nasreen (Medical Retina)"
];

const timeSlots = ["8:00 AM – 12:00 PM", "12:00 PM – 4:00 PM", "4:00 PM – 8:00 PM"];

const AppointmentPage = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "", age: "", city: "", complaint: "" });

  return (
    <Layout>
      <section className="bg-teal-deep py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">Book Appointment</h1>
          <div className="flex gap-2 mt-6">
            {[1, 2, 3, 4, 5].map(s => (
              <div key={s} className={`h-2 flex-1 rounded-full ${s <= step ? "bg-primary" : "bg-primary-foreground/20"}`} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          {step === 1 && (
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Select Service</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map(s => (
                  <button key={s} onClick={() => setSelectedService(s)} className={`p-4 rounded-lg border text-left transition-colors ${selectedService === s ? "border-primary bg-teal-pale text-foreground" : "border-border bg-card text-muted-foreground hover:border-primary/50"}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}
          {step === 2 && (
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Choose Doctor</h2>
              <div className="space-y-3">
                {doctors.map(d => (
                  <button key={d} onClick={() => setSelectedDoctor(d)} className={`w-full p-4 rounded-lg border text-left transition-colors ${selectedDoctor === d ? "border-primary bg-teal-pale text-foreground" : "border-border bg-card text-muted-foreground hover:border-primary/50"}`}>
                    {d}
                  </button>
                ))}
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Pick Time Slot</h2>
              <div className="space-y-3">
                {timeSlots.map(t => (
                  <button key={t} onClick={() => setSelectedTime(t)} className={`w-full p-4 rounded-lg border text-left transition-colors ${selectedTime === t ? "border-primary bg-teal-pale text-foreground" : "border-border bg-card text-muted-foreground hover:border-primary/50"}`}>
                    <Calendar className="h-4 w-4 inline mr-2" />{t}
                  </button>
                ))}
              </div>
            </div>
          )}
          {step === 4 && (
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Patient Details</h2>
              <div className="space-y-4">
                <input type="text" placeholder="Full Name *" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary focus:outline-none" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                <input type="tel" placeholder="Phone Number *" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary focus:outline-none" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary focus:outline-none" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Age" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary focus:outline-none" value={form.age} onChange={e => setForm({ ...form, age: e.target.value })} />
                  <input type="text" placeholder="City / District" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary focus:outline-none" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} />
                </div>
                <textarea placeholder="Brief complaint" rows={3} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary focus:outline-none resize-none" value={form.complaint} onChange={e => setForm({ ...form, complaint: e.target.value })} />
              </div>
            </div>
          )}
          {step === 5 && (
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                <Check className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Booking Confirmed!</h2>
              <div className="bg-teal-pale rounded-xl p-6 text-left space-y-2 mb-6">
                <p className="text-foreground"><strong>Service:</strong> {selectedService}</p>
                <p className="text-foreground"><strong>Doctor:</strong> {selectedDoctor}</p>
                <p className="text-foreground"><strong>Time:</strong> {selectedTime}</p>
                <p className="text-foreground"><strong>Patient:</strong> {form.name}</p>
                <p className="text-foreground"><strong>Phone:</strong> {form.phone}</p>
              </div>
              <p className="text-muted-foreground text-sm mb-6">SMS & email confirmation will be sent shortly.</p>
              <Link to="/" className="text-primary font-semibold hover:underline">Back to Home</Link>
            </div>
          )}

          {step < 5 && (
            <div className="flex justify-between mt-8">
              <button onClick={() => setStep(Math.max(1, step - 1))} disabled={step === 1} className="flex items-center gap-2 text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors">
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
              <button onClick={() => setStep(step + 1)} className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-teal-mid transition-colors">
                {step === 4 ? "Confirm Booking" : "Next"} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default AppointmentPage;
