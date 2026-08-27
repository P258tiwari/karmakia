import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { faqs } from '../data/faqs';
import BrandText from './BrandText';
import SectionHeading from './SectionHeading';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return <section className="section faq-section"><div className="section-shell"><div className="faq-intro"><SectionHeading eyebrow="Good to know" title="Questions, answered." copy="Everything you need before starting your KIA journey with Karma KIA." /></div><div className="faq-list">{faqs.map(([question, answer], index) => { const isOpen = open === index; return <article className={isOpen ? 'is-open' : ''} key={question}><h3><button aria-expanded={isOpen} aria-controls={`faq-${index}`} onClick={() => setOpen(isOpen ? -1 : index)}><span>0{index + 1}</span><span><BrandText>{question}</BrandText></span>{isOpen ? <Minus /> : <Plus />}</button></h3><div id={`faq-${index}`} className="faq-answer" hidden={!isOpen}><p><BrandText>{answer}</BrandText></p></div></article>; })}</div></div></section>;
}
