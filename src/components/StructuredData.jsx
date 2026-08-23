import { site } from '../config/site';
import { locations } from '../data/locations';

export default function StructuredData() {
  const data = { '@context': 'https://schema.org', '@graph': locations.map((location) => ({ '@type': ['AutoDealer', 'LocalBusiness'], name: location.branchName, parentOrganization: { '@type': 'Organization', name: site.company }, address: { '@type': 'PostalAddress', streetAddress: location.address, addressCountry: 'IN' }, telephone: site.phone, url: window.location.origin, areaServed: location.city })) };
  return <script type="application/ld+json">{JSON.stringify(data)}</script>;
}
