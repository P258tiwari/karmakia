import { site } from '../config/site';

export const whatsappUrl = (message = 'Hi Karma KIA, I would like to connect.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
