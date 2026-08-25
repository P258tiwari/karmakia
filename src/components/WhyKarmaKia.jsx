import { ArrowUpRight, CarFront, Gauge, Landmark, MapPinned, ShieldCheck } from 'lucide-react';
import SectionHeading from './SectionHeading';

const benefits = [[CarFront, 'Latest KIA Range', 'Explore KIA SUVs, family cars and EVs.'], [Gauge, 'Test Drive', 'Experience your preferred KIA before deciding.'], [Landmark, 'Finance & Exchange', 'Assistance with finance, insurance and vehicle exchange.'], [ShieldCheck, 'KIA Service', 'Authorized service support and genuine KIA care.'], [MapPinned, 'Three Locations', 'Etah · Hathras · Kasganj']];

export default function WhyKarmaKia({ onLead }) {
  return <section className="section why-section" id="about"><div className="section-shell"><div className="why-top"><SectionHeading eyebrow="The Karma KIA experience" title="More than a showroom." copy="A complete KIA journey, from first look to every kilometre after." /><button className="button button-dark" onClick={() => onLead('Sales Enquiry')}>Start your journey <ArrowUpRight size={17} /></button></div><div className="why-grid">{benefits.map(([Icon, title, copy], index) => <article key={title}><span>0{index + 1}</span><Icon /><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>;
}
