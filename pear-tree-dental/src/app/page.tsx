import Hero from "@/components/Hero";
import PracticeShowcase from "@/components/PracticeShowcase";
import ServicesOverview from "@/components/ServicesOverview";
import TreatmentJourney from "@/components/TreatmentJourney";
import MembershipHighlight from "@/components/MembershipHighlight";
import FAQSection from "@/components/FAQSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PracticeShowcase />
      <ServicesOverview />
      <TreatmentJourney />
      <MembershipHighlight />
      <FAQSection />
    </>
  );
}
