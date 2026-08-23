import { ArrowUpRight, Headphones, PackageCheck, Phone, ShieldCheck, Smartphone, UserRoundCheck, Wrench } from 'lucide-react';
import { site } from '../config/site';
import SectionHeading from './SectionHeading';

const services = [[Wrench, 'Schedule Service', 'Plan routine maintenance at a convenient time.'], [PackageCheck, 'Genuine Kia Parts', 'Parts designed to fit and perform as intended.'], [UserRoundCheck, 'Kia Trained Technicians', 'Specialist attention for your Kia.'], [ShieldCheck, 'Warranty Support', 'Guidance for applicable Kia warranty programs.'], [Headphones, 'Roadside Assistance', 'Support when your journey needs it.'], [Smartphone, 'MyKia Support', 'Help with Kia connected ownership tools.']];

export default function ServiceSection({ onLead }) {
  return <section className="section service-section" id="services"><div className="service-backdrop"><span>CARE</span></div><div className="section-shell"><div className="service-intro"><SectionHeading eyebrow="Authorized service support" title={<>Kia care.<br />Closer to home.</>} copy="Thoughtful maintenance, genuine parts and support from teams trained around your Kia." light /><div><button id="cta_service" className="button button-red" onClick={() => onLead('Service Enquiry')}>Book a Service <ArrowUpRight size={17} /></button><a className="button button-ghost" href={`tel:${site.phone}`}><Phone size={17} />Call Service Team</a></div></div><div className="service-grid">{services.map(([Icon, title, copy], index) => <article key={title}><span>0{index + 1}</span><Icon /><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>;
}
