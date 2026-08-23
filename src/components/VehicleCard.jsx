import { ArrowUpRight, CalendarCheck } from 'lucide-react';
import VehicleVisual from './VehicleVisual';

export default function VehicleCard({ vehicle, onExplore, onLead }) {
  return (
    <article className={`vehicle-card ${vehicle.comingSoon ? 'is-coming' : ''}`}>
      <div className="vehicle-card-top"><span className="vehicle-badge">{vehicle.badge}</span><span className="vehicle-category">{vehicle.category.join(' / ')}</span></div>
      <VehicleVisual vehicle={vehicle} />
      <div className="vehicle-card-copy">
        <p className="vehicle-tagline">{vehicle.tagline}</p><h3>{vehicle.name}</h3>
        <ul>{vehicle.keyFeatures.slice(0, 3).map((feature) => <li key={feature}>{feature}</li>)}</ul>
        <div className="vehicle-actions">
          <button className="text-link" onClick={() => onExplore(vehicle)} aria-label={`Explore ${vehicle.name}`}>Explore <ArrowUpRight size={17} /></button>
          <button className="button button-outline" id="cta_vehicle_testdrive" data-model={vehicle.id} onClick={() => onLead('Book Test Drive', vehicle.name)}><CalendarCheck size={16} />Test Drive</button>
        </div>
      </div>
    </article>
  );
}
