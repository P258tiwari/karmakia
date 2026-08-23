import { ArrowUpRight, Instagram } from 'lucide-react';
import { site } from '../config/site';
import SectionHeading from './SectionHeading';

const instagramCards = [
  { image: '/assets/cars/seltos-2026.png', label: 'New Kia arrivals', className: 'is-cutout' },
  { image: '/assets/cars/carens-clavis.png', label: 'Family journeys' },
  { image: '/assets/cars/ev6.png', label: 'Electric inspiration' },
];

export default function Gallery() {
  return (
    <section className="section instagram-section" id="instagram">
      <div className="section-shell">
        <div className="instagram-heading">
          <SectionHeading eyebrow="Follow Karma KIA" title="See what’s happening on Instagram." copy="New arrivals, customer moments and updates from Karma KIA." />
          <a className="button button-dark" href={site.social.instagram} target="_blank" rel="noreferrer"><Instagram size={18} />@karmakiaofficial <ArrowUpRight size={17} /></a>
        </div>
        <div className="instagram-grid">
          {instagramCards.map((card) => (
            <a className={`instagram-card ${card.className || ''}`} href={site.social.instagram} target="_blank" rel="noreferrer" key={card.label}>
              <img src={card.image} alt="" loading="lazy" />
              <span><Instagram size={18} />{card.label}<ArrowUpRight size={17} /></span>
            </a>
          ))}
        </div>
        <p className="instagram-note">Visit Instagram to view the latest posts from Karma KIA.</p>
      </div>
    </section>
  );
}
