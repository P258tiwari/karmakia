import { ArrowUpRight, MapPin, MessageCircle, Phone } from 'lucide-react';
import { whatsappUrl } from '../utils/whatsapp';

export default function LocationTabs({ locations, selected, onSelect, onLead }) {
  const location = locations.find((item) => item.id === selected) || locations[0];
  return (
    <div className="location-widget">
      <div className="location-tabs" role="tablist" aria-label="Karma KIA locations">{locations.map((item, index) => <button role="tab" aria-selected={item.id === selected} className={item.id === selected ? 'is-active' : ''} onClick={() => onSelect(item.id)} key={item.id}><span>0{index + 1}</span>{item.city}</button>)}</div>
      <div className="location-panel" key={location.id} role="tabpanel">
        <div className="location-copy"><span className="section-eyebrow">Authorized KIA sales &amp; support</span><h3>{location.branchName}</h3><p><MapPin size={19} />{location.address}</p><a className="location-phone" href={`tel:${location.phone}`}><Phone size={20} />{location.phoneDisplay}</a><div className="location-actions"><a className="button button-dark" id="cta_location_call" href={`tel:${location.phone}`}><Phone size={17} />Call Showroom</a><a className="button button-outline" id="cta_location_whatsapp" href={whatsappUrl(`Hi Karma KIA ${location.city}, I would like to connect with your showroom.`)} target="_blank" rel="noreferrer"><MessageCircle size={17} />WhatsApp</a><button className="text-link" onClick={() => onLead('Book Test Drive', '', location.city)}>Book Test Drive <ArrowUpRight size={17} /></button></div></div>
      </div>
    </div>
  );
}
