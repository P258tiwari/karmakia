import BrandText from './BrandText';

export default function SectionHeading({ eyebrow, title, copy, light = false, align = 'left' }) {
  return (
    <div className={`section-heading ${light ? 'is-light' : ''} ${align === 'center' ? 'is-center' : ''}`}>
      {eyebrow && <span className="section-eyebrow"><BrandText>{eyebrow}</BrandText></span>}
      <h2><BrandText>{title}</BrandText></h2>
      {copy && <p><BrandText>{copy}</BrandText></p>}
    </div>
  );
}
