import { useState } from 'react';

export default function Logo({ light = true }) {
  const [karmaReady, setKarmaReady] = useState(true);
  const [kiaReady, setKiaReady] = useState(true);
  return (
    <span className={`brand-lockup ${light ? 'is-light' : ''}`}>
      <span className="logo-slot logo-karma">
        {karmaReady && <img src="/assets/logos/karma-kia-logo.png" alt="Karma KIA" onError={() => setKarmaReady(false)} />}
        {!karmaReady && <span className="brand-primary">KARMA</span>}
      </span>
      <span className="logo-divider" />
      <span className="logo-slot logo-kia">
        {kiaReady && <img src="/assets/logos/kia-logo.png" alt="Kia" onError={() => setKiaReady(false)} />}
        {!kiaReady && <span className="brand-kia">KIA</span>}
      </span>
    </span>
  );
}
