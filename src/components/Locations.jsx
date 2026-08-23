import { useState } from 'react';
import { locations } from '../data/locations';
import LocationTabs from './LocationTabs';
import SectionHeading from './SectionHeading';

export default function Locations({ onLead }) {
  const [selected, setSelected] = useState('etah');
  return (
    <section className="section locations-section" id="locations"><div className="section-shell"><div className="locations-heading"><SectionHeading eyebrow="Karma KIA near you" title={<>Three locations.<br />One Karma KIA experience.</>} copy="Discover the latest Kia range and attentive dealership support, closer to home." /></div><LocationTabs locations={locations} selected={selected} onSelect={setSelected} onLead={onLead} /></div></section>
  );
}
