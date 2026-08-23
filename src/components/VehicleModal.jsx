import { CalendarCheck, Check, Phone, X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { site } from '../config/site';
import { whatsappUrl } from '../utils/whatsapp';
import VehicleVisual from './VehicleVisual';

export default function VehicleModal({ vehicle, onClose, onLead }) {
  const closeRef = useRef(null);
  useEffect(() => {
    if (!vehicle) return undefined;
    const previous = document.activeElement;
    document.body.classList.add('modal-open');
    const keydown = (event) => { if (event.key === 'Escape') onClose(); };
    document.addEventListener('keydown', keydown);
    setTimeout(() => closeRef.current?.focus(), 20);
    return () => { document.body.classList.remove('modal-open'); document.removeEventListener('keydown', keydown); previous?.focus?.(); };
  }, [vehicle, onClose]);
  if (!vehicle) return null;
  return (
    <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="vehicle-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button ref={closeRef} className="modal-close" onClick={onClose} aria-label="Close vehicle details"><X /></button>
        <div className="modal-visual"><span className="vehicle-badge">{vehicle.badge}</span><VehicleVisual vehicle={vehicle} /></div>
        <div className="modal-copy">
          <span className="section-eyebrow">{vehicle.category.join(' / ')}</span><h2 id="modal-title">{vehicle.name}</h2><p className="modal-tagline">{vehicle.tagline}</p><p className="modal-description">{vehicle.description}</p>
          <div className="modal-specs">
            <div><small>Powertrain</small><strong>{vehicle.fuelTypes.join(' / ')}</strong></div><div><small>Transmission</small><strong>{vehicle.transmission}</strong></div><div><small>Seating</small><strong>{vehicle.seating}</strong></div>{vehicle.range && <div><small>Range</small><strong>{vehicle.range}</strong></div>}{vehicle.battery && <div><small>Battery</small><strong>{vehicle.battery}</strong></div>}
          </div>
          <h3>What stands out</h3><ul className="feature-list">{vehicle.keyFeatures.map((feature) => <li key={feature}><Check size={16} />{feature}</li>)}</ul>
          <div className="modal-actions"><button className="button button-red" onClick={() => { onClose(); onLead('Book Test Drive', vehicle.name); }}><CalendarCheck size={17} />Book Test Drive</button><button id="cta_vehicle_enquiry" className="button button-outline" onClick={() => { onClose(); onLead('Model Enquiry', vehicle.name); }}>Enquire About This Kia</button><a className="button button-plain" href={`tel:${site.phone}`}><Phone size={17} />Call Karma KIA</a></div>
          <a className="modal-whatsapp" href={whatsappUrl(`Hi Karma KIA, I would like to know more about the ${vehicle.name}.`)} target="_blank" rel="noreferrer">Chat about this model on WhatsApp</a>
        </div>
      </section>
    </div>
  );
}
