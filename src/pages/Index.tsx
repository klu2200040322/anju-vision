import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import AboutSnapshot from "@/components/home/AboutSnapshot";
import ServicesGrid from "@/components/home/ServicesGrid";
import LeadershipSection from "@/components/home/LeadershipSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AppointmentCTA from "@/components/home/AppointmentCTA";
import ContactSection from "@/components/home/ContactSection";

const Index = () => (
  <Layout>
    <HeroSection />
    <StatsSection />
    <AboutSnapshot />
    <ServicesGrid />
    <LeadershipSection />
    <TestimonialsSection />
    <WhyChooseUs />
    <AppointmentCTA />
    <ContactSection />
  </Layout>
);

export default Index;
