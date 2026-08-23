import { ArrowUpRight, CalendarCheck, CarFront, MapPin, Wrench } from 'lucide-react';

export default function QuickActions({ onLead }) {
  const actions = [
    [CalendarCheck, 'Book Test Drive', 'Choose your Kia and a convenient time', () => onLead('Book Test Drive')],
    [CarFront, 'Model Enquiry', 'Ask about the Kia that suits you', () => onLead('Model Enquiry')],
    [Wrench, 'Book Service', 'Expert care from Kia trained teams', () => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })],
    [MapPin, 'Find a Showroom', 'Etah, Hathras or Kasganj', () => document.querySelector('#locations')?.scrollIntoView({ behavior: 'smooth' })],
  ];
  return (
    <section className="quick-actions" aria-label="Quick actions">
      {actions.map(([Icon, title, copy, action], index) => <button className="quick-card" onClick={action} key={title}><span className="quick-number">0{index + 1}</span><Icon size={24} /><span><strong>{title}</strong><small>{copy}</small></span><ArrowUpRight className="quick-arrow" size={20} /></button>)}
    </section>
  );
}
