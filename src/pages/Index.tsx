import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { ProductIncludes } from "@/components/ProductIncludes";
import { WhoIsItFor } from "@/components/WhoIsItFor";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Guarantee } from "@/components/Guarantee";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <Benefits />
      <HowItWorks />
      <ProductIncludes />
      <WhoIsItFor />
      <Testimonials />
      <FAQ />
      <Guarantee />
      <FinalCTA />
      <Footer />
    
    </div>
  );
};

export default Index;
