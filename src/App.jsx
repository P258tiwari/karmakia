import { useCallback, useEffect, useState } from 'react';
import EVSection from './components/EVSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Hero from './components/Hero';
import LeadForm from './components/LeadForm';
import Locations from './components/Locations';
import LegalPage from './components/LegalPage';
import MobileCTA from './components/MobileCTA';
import QuickActions from './components/QuickActions';
import SeltosFeature from './components/SeltosFeature';
import ServiceSection from './components/ServiceSection';
import StructuredData from './components/StructuredData';
import TrustStrip from './components/TrustStrip';
import VehicleModal from './components/VehicleModal';
import VehicleRange from './components/VehicleRange';
import WhyKarmaKia from './components/WhyKarmaKia';

export default function App() {
  const legalPage = window.location.pathname.replace(/\/+$/, '') || '/';
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [leadRequest, setLeadRequest] = useState(null);

  const handleLead = useCallback((enquiryType = 'Sales Enquiry', model = '', location = '') => {
    setLeadRequest({ enquiryType, model, location, key: Date.now() });
    window.setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 30);
  }, []);

  useEffect(() => {
    if (legalPage === '/privacy' || legalPage === '/terms') return undefined;
    const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.08 });
    document.querySelectorAll('.section, .trust-strip, .lead-section').forEach((node) => reveal.observe(node));
    return () => reveal.disconnect();
  }, [legalPage]);

  if (legalPage === '/privacy' || legalPage === '/terms') {
    return <LegalPage type={legalPage === '/privacy' ? 'privacy' : 'terms'} />;
  }

  return (
    <main id="home">
      <StructuredData />
      <Header onLead={handleLead} />
      <Hero onLead={handleLead} />
      <QuickActions onLead={handleLead} />
      <VehicleRange onExplore={setSelectedVehicle} onLead={handleLead} />
      <SeltosFeature onExplore={setSelectedVehicle} onLead={handleLead} />
      <EVSection onExplore={setSelectedVehicle} onLead={handleLead} />
      <Locations onLead={handleLead} />
      <WhyKarmaKia onLead={handleLead} />
      <TrustStrip />
      <ServiceSection onLead={handleLead} />
      <Gallery />
      <LeadForm request={leadRequest} />
      <FAQ />
      <Footer />
      <MobileCTA onLead={handleLead} />
      <VehicleModal vehicle={selectedVehicle} onClose={() => setSelectedVehicle(null)} onLead={handleLead} />
    </main>
  );
}
