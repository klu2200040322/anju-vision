import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ChairmanPage from "./pages/about/ChairmanPage.tsx";
import ManagingDirectorPage from "./pages/about/ManagingDirectorPage.tsx";
import HospitalPage from "./pages/about/HospitalPage.tsx";
import MissionVisionPage from "./pages/about/MissionVisionPage.tsx";
import DoctorsPage from "./pages/DoctorsPage.tsx";
import ServicePage from "./pages/ServicePage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import GalleryPage from "./pages/GalleryPage.tsx";
import EducationTrainingPage from "./pages/EducationTrainingPage.tsx";
import FeedbackPage from "./pages/FeedbackPage.tsx";
import AppointmentPage from "./pages/AppointmentPage.tsx";
import PatientEducationPage from "./pages/PatientEducationPage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about/chairman" element={<ChairmanPage />} />
          <Route path="/about/managing-director" element={<ManagingDirectorPage />} />
          <Route path="/about/hospital" element={<HospitalPage />} />
          <Route path="/about/mission-vision" element={<MissionVisionPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/education-training" element={<EducationTrainingPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/patient-education" element={<PatientEducationPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
