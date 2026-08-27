import { site } from '../config/site';
import { faqs } from '../data/faqs';
import { locations } from '../data/locations';

export default function StructuredData() {
  const baseUrl = 'https://www.karmakia.in';
  const organizationId = `${baseUrl}/#organization`;
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: site.name,
        legalName: site.company,
        url: `${baseUrl}/`,
        logo: `${baseUrl}/assets/logos/karma-kia-logo.png`,
        image: `${baseUrl}/og-showroom.png`,
        email: site.email,
        telephone: site.phone,
        sameAs: [site.social.facebook, site.social.instagram],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: site.phone,
          email: site.email,
          contactType: 'customer service',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: `${baseUrl}/`,
        name: site.name,
        publisher: { '@id': organizationId },
        inLanguage: 'en-IN',
      },
      ...locations.map((location) => {
        const postalCode = location.address.match(/\b\d{6}\b/)?.[0];
        return {
          '@type': 'AutoDealer',
          '@id': `${baseUrl}/#${location.id}`,
          name: location.branchName,
          url: `${baseUrl}/#locations`,
          image: `${baseUrl}/og-showroom.png`,
          parentOrganization: { '@id': organizationId },
          address: {
            '@type': 'PostalAddress',
            streetAddress: location.address,
            addressLocality: location.city,
            addressRegion: 'Uttar Pradesh',
            ...(postalCode ? { postalCode } : {}),
            addressCountry: 'IN',
          },
          telephone: location.phone,
          email: site.email,
          areaServed: location.city,
          priceRange: '₹₹',
        };
      }),
      {
        '@type': 'FAQPage',
        '@id': `${baseUrl}/#faq`,
        mainEntity: faqs.map(([question, answer]) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  };
  return <script type="application/ld+json">{JSON.stringify(data)}</script>;
}
