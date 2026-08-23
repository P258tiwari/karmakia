import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { site } from '../config/site';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer footer-compact">
      <div className="footer-compact-main">
        <a className="brand" href="/#home" aria-label="Karma KIA home"><Logo /></a>
        <p>Etah · Hathras · Kasganj</p>
        <div className="footer-contact-links">
          <a href={`tel:${site.phone}`}><Phone size={16} />{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}><Mail size={16} />Kia Care Email</a>
          <a href={site.kiaWebsite} target="_blank" rel="noreferrer">Kia India Website</a>
        </div>
        <div className="social-links" aria-label="Karma KIA social media">
          <a href={site.social.facebook} target="_blank" rel="noreferrer" aria-label="Karma KIA on Facebook"><Facebook /></a>
          <a href={site.social.instagram} target="_blank" rel="noreferrer" aria-label="Karma KIA on Instagram"><Instagram /></a>
        </div>
      </div>
      <div className="footer-compact-bottom">
        <span>{site.copyright}</span>
        <nav aria-label="Legal"><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Service</a></nav>
      </div>
    </footer>
  );
}
