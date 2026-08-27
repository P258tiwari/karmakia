import { Children, cloneElement, isValidElement } from 'react';

function highlightBrand(value) {
  if (typeof value === 'string') {
    return value.split(/(Karma KIA)/gi).map((part, index) => (
      /^Karma KIA$/i.test(part)
        ? <strong className="brand-highlight" key={`brand-${index}`}>Karma KIA</strong>
        : part
    ));
  }

  if (Array.isArray(value)) return Children.map(value, highlightBrand);

  if (isValidElement(value) && value.props.children !== undefined) {
    return cloneElement(value, undefined, highlightBrand(value.props.children));
  }

  return value;
}

export default function BrandText({ children }) {
  return highlightBrand(children);
}
