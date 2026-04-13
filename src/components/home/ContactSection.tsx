import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-lg h-80 md:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.123!2d82.23!3d16.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDU4JzEyLjAiTiA4MsKwMTMnNDguMCJF!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "320px" }}
            allowFullScreen
            loading="lazy"
            title="Anju Eye Care Location"
          />
        </div>
        {/* Info */}
        <div>
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">Visit Us</h2>
          <div className="space-y-5">
            <div className="flex gap-4">
              <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Alberta International Eye Hospital</p>
                <p className="text-muted-foreground text-sm">#69-18-2/1, Beside Lalitha Nagar Park, Gaigolupadu Junction, Near Sarpavaram Jn, Kakinada – 533005</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <a href="tel:08842344255" className="text-foreground hover:text-primary transition-colors">0884 234 4255</a>
                <span className="text-muted-foreground"> / </span>
                <a href="tel:08842366255" className="text-foreground hover:text-primary transition-colors">0884 236 6255</a>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <a href="mailto:yvhskkd@gmail.com" className="text-foreground hover:text-primary transition-colors">yvhskkd@gmail.com</a><br />
                <a href="mailto:tejeswaradhupam@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">tejeswaradhupam@gmail.com</a>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="h-5 w-5 text-primary flex-shrink-0" />
              <p className="text-foreground">Monday – Saturday: 8:00 AM – 8:00 PM</p>
            </div>
          </div>
          <div className="flex gap-3 mt-8">
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-teal-mid transition-colors text-sm">
              Get Directions
            </a>
            <a href="https://wa.me/918842344255" target="_blank" rel="noreferrer" className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-teal-pale transition-colors text-sm">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
