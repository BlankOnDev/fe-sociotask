import FaqSection from "@/components/LandingPage/FaqSection";
import HeroSection from "@/components/LandingPage/HeroSection";
import HowToSection from "@/components/LandingPage/HowToSection";
import OngoingTaskSection from "@/components/LandingPage/OngoingTaskSection";

export default function Home() {
   return (
      <>
         <HeroSection />
         <HowToSection />
         <OngoingTaskSection/>
         <FaqSection />
      </>
   );
}
