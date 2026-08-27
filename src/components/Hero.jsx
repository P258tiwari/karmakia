import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';

export default function Hero({ onLead }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy reveal">
        <div className="eyebrow"><span /> KARMA KIA &middot; AUTHORISED DEALERSHIP</div>
        <h1 id="hero-title">Your KIA.<br /><em>Now closer</em> to you.</h1>
        <p className="hero-lede">Experience the latest KIA cars and EVs across Etah, Hathras &amp; Kasganj.</p>
        <div className="hero-buttons">
          <button className="button button-red" id="cta_hero_test_drive" data-cta="hero-test-drive" onClick={() => onLead('Book Test Drive')}>Book a Test Drive <ArrowUpRight size={18} /></button>
          <a className="button button-ghost" id="cta_hero_explore" data-cta="hero-explore" href="#cars">Explore KIA Cars <ArrowDown size={17} /></a>
        </div>
        <div className="hero-trust"><span>Sales</span><i /><span>Service</span><i /><span>Genuine KIA Care</span></div>
      </div>
      <div className="hero-visual reveal">
        <figure className="hero-showroom">
          <img src="/assets/showroom/karma-kia-showroom-hero-v2.png" alt="Complete exterior view of the Karma Kia showroom" width="1448" height="1086" fetchPriority="high" />
          <figcaption>
            <span>Karma Kia Showroom</span>
            <strong>Everything Kia, under one roof.</strong>
          </figcaption>
        </figure>
      </div>
      <a href="#locations" className="hero-locations"><MapPin size={16} /> Etah <span>/</span> Hathras <span>/</span> Kasganj</a>
    </section>
  );
}
