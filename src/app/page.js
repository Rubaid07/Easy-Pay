import Features from "@/components/sections/Feature";
import Hero from "../components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Security from "@/components/sections/Security";
import Pricing from "@/components/sections/Pricing";
import Testimonial from "@/components/sections/Testimonial";
import Cta from "@/components/sections/Cta";
import Footer from "@/components/sections/Footer";
import AppOverview from "@/components/sections/AppOverview";

export default function Home() {
  return (
   <div className="overflow-hidden">
    <Hero />
    <Features />
    <AppOverview />
    <HowItWorks />
    <Security />
    <Pricing />
    <Testimonial />
    <Cta />
    <Footer />
   </div>
  );
}
