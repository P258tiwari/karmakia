import { MessageCircle, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';
import { site } from '../config/site';
import { whatsappUrl } from '../utils/whatsapp';
import Logo from './Logo';

export default function Header({ onLead }) {
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const update = () => setCompact(window.scrollY > 24);
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <header className={`site-header ${compact ? 'is-compact' : ''}`}>
      <a className="brand" href="#home" aria-label="Karma KIA home"><Logo /></a>
      <div className="header-actions">
        <a className="phone-link" href={`tel:${site.phone}`}><Phone size={17} />{site.phoneDisplay}</a>
        <a className="icon-button" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="WhatsApp Karma KIA"><MessageCircle size={20} /></a>
        <button className="button button-red header-cta" onClick={() => onLead('Book Test Drive')}>Book a Test Drive</button>
      </div>
    </header>
  );
}
