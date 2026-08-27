import { ArrowLeft, Mail, Phone } from 'lucide-react';
import { useEffect } from 'react';
import { site } from '../config/site';
import BrandText from './BrandText';
import Footer from './Footer';
import Logo from './Logo';

const privacySections = [
  ['Information we collect', 'When you send an enquiry, we may collect your name, mobile number, email address, preferred KIA model, preferred dealership location, preferred date and any message you provide. We may also receive basic campaign parameters attached to the page URL.'],
  ['How we use information', 'We use the information you submit to respond to your request, arrange a test drive or service conversation, provide model and dealership information, and improve how enquiries are handled.'],
  ['Sharing and service providers', 'Information may be shared with the relevant Karma KIA dealership team, KIA India, and service providers supporting enquiry management or customer communication, only where needed to handle your request or meet legal obligations.'],
  ['Retention and security', 'We retain enquiry information only for as long as reasonably required for customer service, operational and legal purposes. We use reasonable safeguards, but no internet transmission or electronic storage method can be guaranteed completely secure.'],
  ['Your choices', 'You may ask us to correct or delete information you submitted, or request that promotional contact stops. These requests may be subject to applicable legal and record-keeping requirements.'],
  ['External services', 'This website links to third-party services including WhatsApp, Facebook, Instagram and KIA India. Their own privacy terms apply when you use those services.'],
];

const termsSections = [
  ['Website purpose', 'This website provides general information about Karma KIA dealerships, KIA vehicles and dealership services. It is intended for users in India.'],
  ['Vehicle information', 'Vehicle images, features, variants, specifications, colours and availability may change. Information shown here is general and should be confirmed with Karma KIA or KIA India before making a decision.'],
  ['Enquiries and test drives', 'Submitting a form or contacting the dealership does not create a purchase, reservation or service contract. Test drives, appointments and vehicle availability are subject to confirmation by the dealership.'],
  ['Intellectual property', 'KIA names, vehicle names, logos and related material belong to KIA or their respective owners. Karma KIA website content may not be copied or republished without permission, except where allowed by law.'],
  ['Third-party links', 'Links to KIA India, social media and messaging services are provided for convenience. Karma KIA is not responsible for the availability, content or practices of third-party websites.'],
  ['Limitation and changes', 'We aim to keep this website accurate and available, but do not guarantee uninterrupted access or error-free content. These terms may be updated when the website, services or legal requirements change.'],
];

export default function LegalPage({ type }) {
  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms of Service';
  const sections = isPrivacy ? privacySections : termsSections;
  const description = isPrivacy
    ? 'Read how Karma KIA handles information submitted through its dealership website and enquiry forms.'
    : 'Read the terms that apply when using the Karma KIA dealership website.';

  useEffect(() => {
    document.title = `${title} | Karma KIA`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `https://www.karmakia.in/${type}`);
  }, [description, title, type]);

  return (
    <main className="legal-page">
      <header className="legal-nav"><a className="brand" href="/" aria-label="Karma KIA home"><Logo /></a><a href="/"><ArrowLeft size={17} />Back to website</a></header>
      <article className="legal-content">
        <span className="section-eyebrow"><BrandText>Karma KIA</BrandText></span>
        <h1>{title}</h1>
        <p className="legal-updated">Last updated: 23 August 2026</p>
        <p className="legal-intro"><BrandText>This {isPrivacy ? 'policy explains how information is handled when you use the Karma KIA website or contact our dealership team' : 'page sets out the terms that apply when you use the Karma KIA website'}.</BrandText></p>
        {sections.map(([heading, copy]) => <section key={heading}><h2>{heading}</h2><p><BrandText>{copy}</BrandText></p></section>)}
        <section><h2>Contact</h2><p>For questions about this page, call <a href={`tel:${site.phone}`}><Phone size={15} />{site.phoneDisplay}</a> or email <a href={`mailto:${site.email}`}><Mail size={15} />{site.email}</a>.</p></section>
      </article>
      <Footer />
    </main>
  );
}
