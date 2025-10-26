import FeaturesSection from "@/components/sections/Feature";
import Hero from "../components/sections/Hero";
import HowItWorksSection from "@/components/sections/HowItWorks";
import SecuritySection from "@/components/sections/Security";
import PricingSection from "@/components/sections/Pricing";

export default function Home() {
  return (
   <div>
    <Hero />
    <FeaturesSection />
    <HowItWorksSection />
    <SecuritySection />
    <PricingSection />
   </div>
  );
}
