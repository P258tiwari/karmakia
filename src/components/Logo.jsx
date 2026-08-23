import { useState } from 'react';

export default function Logo({ light = true }) {
  const [logoReady, setLogoReady] = useState(true);
  return (
    <span className={`brand-lockup ${light ? 'is-light' : ''}`}>
      {logoReady && <img className="karma-kia-logo" src="/assets/logos/karma-kia-logo.png" alt="Karma KIA — Sales, Service and Spares" onError={() => setLogoReady(false)} />}
      {!logoReady && <span className="brand-primary">KARMA KIA</span>}
    </span>
  );
}
