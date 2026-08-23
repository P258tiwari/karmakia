import { site } from '../config/site';

export default function TrustStrip() {
  return <section className="trust-strip" aria-label="Kia ownership trust indicators"><div className="section-shell"><div className="trust-label"><span>KIA OWNERSHIP</span><strong>Confidence,<br />built in.</strong></div>{site.statistics.map((item) => <div className="trust-stat" key={item.value}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div><p>*Subject to Kia India terms, conditions and applicable model/program eligibility.</p></section>;
}
