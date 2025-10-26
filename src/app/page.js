import FeaturesSection from "@/components/sections/Feature";
import Hero from "../components/sections/Hero";
import HowItWorksSection from "@/components/sections/HowItWorks";
import SecuritySection from "@/components/sections/Security";
import PricingSection from "@/components/sections/Pricing";
import TestimonialSection from "@/components/sections/Testimonial";

export default function Home() {
  return (
   <div className="overflow-hidden">
    <Hero />
    <FeaturesSection />
    <HowItWorksSection />
    <SecuritySection />
    <PricingSection />
    <TestimonialSection />
   </div>
  );
}
