import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TaxiCheckerDivider } from './components/TaxiGraphics';
import { ClaimsDenialDefense } from './components/ClaimsDenialDefense';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { HindustanCabsCaseStudy } from './components/HindustanCabsCaseStudy';
import { FleetEstimatorAndAudit } from './components/FleetEstimatorAndAudit';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToAudit = () => {
    const el = document.getElementById('audit-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F6] text-[#111317]">
      <Navbar onAuditClick={scrollToAudit} />
      <main>
        <HeroSection onAuditClick={scrollToAudit} />
        <TaxiCheckerDivider />
        <ClaimsDenialDefense />
        <TaxiCheckerDivider />
        <CapabilitiesSection />
        <TaxiCheckerDivider dark />
        <HindustanCabsCaseStudy />
        <TaxiCheckerDivider />
        <FleetEstimatorAndAudit />
      </main>
      <Footer />
    </div>
  );
}
