import FeaturesSection from "@/components/sections/Feature";
import Hero from "../components/sections/Hero";
import HowItWorksSection from "@/components/sections/HowItWorks";
import SecuritySection from "@/components/sections/Security";

export default function Home() {
  return (
   <div>
    <Hero />
    <FeaturesSection />
    <HowItWorksSection />
    <SecuritySection />
   </div>
  );
}
