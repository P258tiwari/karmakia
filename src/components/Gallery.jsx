import { useEffect } from 'react';
import { ArrowUpRight, Instagram } from 'lucide-react';
import { site } from '../config/site';
import SectionHeading from './SectionHeading';

export default function Gallery() {
  useEffect(() => {
    if (document.querySelector('script[data-elfsight-platform]')) return;

    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    script.dataset.elfsightPlatform = 'true';
    document.body.appendChild(script);
  }, []);

  return (
    <section className="section instagram-section" id="instagram">
      <div className="section-shell">
        <div className="instagram-heading">
          <SectionHeading eyebrow="Follow Karma KIA" title={<><span>See what&apos;s happening</span><span>on Instagram.</span></>} copy="New arrivals, customer moments and updates from Karma KIA." />
          <a className="button button-dark" href={site.social.instagram} target="_blank" rel="noreferrer"><Instagram size={18} />@karmakiaofficial <ArrowUpRight size={17} /></a>
        </div>
        <div className="instagram-widget-shell">
          <div className="elfsight-app-7439144b-66cd-4204-b9c2-2a0304550642" data-elfsight-app-lazy="" />
        </div>
      </div>
    </section>
  );
}
