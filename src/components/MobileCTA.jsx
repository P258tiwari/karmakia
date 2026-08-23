import { CalendarCheck, MessageCircle, Phone } from 'lucide-react';
import { site } from '../config/site';
import { whatsappUrl } from '../utils/whatsapp';

export default function MobileCTA({ onLead }) {
  return <nav className="mobile-cta" aria-label="Quick contact"><a href={`tel:${site.phone}`}><Phone /><span>Call</span></a><a href={whatsappUrl('Hi Karma KIA, I would like to connect.')} target="_blank" rel="noreferrer"><MessageCircle /><span>WhatsApp</span></a><button onClick={() => onLead('Book Test Drive')}><CalendarCheck /><span>Test Drive</span></button></nav>;
}
