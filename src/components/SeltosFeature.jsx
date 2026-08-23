import { Aperture, ArrowUpRight, Camera, Gauge, PanelsTopLeft, ShieldCheck, Sun } from 'lucide-react';
import { seltos } from '../data/vehicles';
import VehicleVisual from './VehicleVisual';

const features = [[ShieldCheck, 'ADAS Level 2'], [Gauge, '21 Autonomous Features'], [PanelsTopLeft, 'Panoramic Display'], [Sun, 'Dual-Pane Sunroof'], [Camera, '360° Camera'], [Aperture, '3 Powertrain Choices']];

export default function SeltosFeature({ onExplore, onLead }) {
  return (
    <section className="seltos-feature">
      <div className="seltos-stage"><div className="seltos-copy"><span className="section-eyebrow">The icon, reborn</span><h2>The All-New<br />Kia Seltos.</h2><p>Everything&apos;s new. Except the attitude.</p><div className="seltos-actions"><button className="button button-light" onClick={() => onExplore(seltos)}>Explore Seltos <ArrowUpRight size={17} /></button><button className="button button-ghost" onClick={() => onLead('Book Test Drive', seltos.name)}>Book Test Drive</button></div></div><VehicleVisual vehicle={seltos} className="seltos-car" /><div className="seltos-word">SELTOS</div></div>
      <div className="seltos-features">{features.map(([Icon, label], index) => <div key={label}><span>0{index + 1}</span><Icon size={24} /><strong>{label}</strong></div>)}</div>
    </section>
  );
}
