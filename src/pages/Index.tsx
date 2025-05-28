
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TutorialsSection from '@/components/Tutorials';
import Footer from '@/components/Footer';
import SmartJackpots from '@/components/Smartjackport';
import PopularCoursesSection from '@/components/PopularCourse';
import HowItWorksSection from '@/components/Howitwork'
import PricingPlan from '@/components/PricingPlan';
import FreeTutorialSection from '@/components/FreeTutorial'
import FAQSection from '@/components/FAQSection';
import CallToAction from '@/components/CallSection';
const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
<TutorialsSection/>
<SmartJackpots/>
<HowItWorksSection/>
<PricingPlan/>
<FreeTutorialSection/>
<FAQSection/>
     
      <CallToAction/>
      <Footer />
    </div>
  );
};

export default Index;
