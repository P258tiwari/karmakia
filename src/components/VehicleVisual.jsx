import { useState } from 'react';

export default function VehicleVisual({ vehicle, priority = false, className = '' }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  return (
    <div className={`vehicle-visual ${className} tone-${vehicle.id}`}>
      {!loaded && <div className="vehicle-image-fallback" aria-hidden="true"><span>{vehicle.shortName}</span></div>}
      {!failed && (
        <img src={vehicle.image} alt={vehicle.name} loading={priority ? 'eager' : 'lazy'} decoding="async" fetchPriority={priority ? 'high' : 'auto'} onLoad={() => setLoaded(true)} onError={() => setFailed(true)} className={loaded ? 'is-loaded' : ''} />
      )}
      {!loaded && <span className="visual-model">{vehicle.shortName}</span>}
    </div>
  );
}
