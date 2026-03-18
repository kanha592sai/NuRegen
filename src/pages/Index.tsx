import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import WhySustainability from "@/components/sections/WhySustainability";
import CompanyOverview from "@/components/sections/CompanyOverview";
import CoreFocusAreas from "@/components/sections/CoreFocusAreas";
import ImplementationStrength from "@/components/sections/ImplementationStrength";
import TechnicalExpertise from "@/components/sections/TechnicalExpertise";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import JoinMovement from "@/components/sections/JoinMovement";
import Footer from "@/components/sections/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <WhySustainability />
    <CompanyOverview />
    <CoreFocusAreas />
    <TechnicalExpertise />
    <Services />
    <Process />
    <JoinMovement />
    <Footer />
  </div>
);

export default Index;
