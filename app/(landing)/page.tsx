import { LandingNavbar } from "@/components/ui/landing-navbar";
import { LandingHero } from "@/components/ui/landing-hero";
import { LandingContent } from "@/components/ui/landing-content";

const LandingPage = () => {
  return ( 
    <div className="h-full ">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
   );
}
 
export default LandingPage;
