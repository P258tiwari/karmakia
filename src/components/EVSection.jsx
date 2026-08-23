import { ArrowUpRight, BatteryCharging, Cable, Leaf, Radio, Route } from 'lucide-react';
import { evVehicles } from '../data/vehicles';
import SectionHeading from './SectionHeading';
import VehicleVisual from './VehicleVisual';

export default function EVSection({ onExplore, onLead }) {
  return (
    <section className="section ev-section" id="electric">
      <div className="ev-glow" /><div className="section-shell">
        <div className="ev-intro"><SectionHeading eyebrow="Kia electric" title="Go electric with Karma KIA." copy="Experience intelligent electric mobility with Kia." light /><div className="ev-intro-actions"><a className="button button-light" href="#ev-models">Explore Kia EVs <ArrowUpRight size={17} /></a><button className="button button-ghost" onClick={() => onLead('EV Enquiry')}>Talk to an EV Expert</button></div></div>
        <div className="ev-grid" id="ev-models">{evVehicles.map((vehicle, index) => <article className={`ev-card ev-card-${index + 1}`} key={vehicle.id} onClick={() => onExplore(vehicle)}><div className="ev-card-copy"><span>0{index + 1} / ELECTRIC</span><h3>{vehicle.shortName}</h3><strong>{vehicle.range}</strong><small>claimed driving range*</small></div><VehicleVisual vehicle={vehicle} /><button aria-label={`Explore ${vehicle.name}`}><ArrowUpRight /></button></article>)}</div>
        <div className="ev-benefits"><div><Leaf /><span><strong>Kia EV Benefits</strong><small>Smarter electric ownership</small></span></div>{[[Cable, 'Fast charging'], [Radio, 'Connected technology'], [BatteryCharging, 'Kia EV ecosystem'], [Route, 'Long-range options']].map(([Icon, label]) => <span key={label}><Icon size={20} />{label}</span>)}</div>
        <p className="ev-disclaimer">*Range and charging times are certified or claimed figures and may vary with driving, weather, charger and battery conditions. Warranty subject to Kia terms.</p>
      </div>
    </section>
  );
}
