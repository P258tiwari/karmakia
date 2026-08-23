export default function SectionHeading({ eyebrow, title, copy, light = false, align = 'left' }) {
  return (
    <div className={`section-heading ${light ? 'is-light' : ''} ${align === 'center' ? 'is-center' : ''}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}
