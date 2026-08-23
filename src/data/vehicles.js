export const vehicles = [
  {
    id: 'seltos-2026', name: 'All-New Kia Seltos', shortName: 'Seltos', category: ['SUV'], tagline: 'Badass. Forever.', image: '/assets/cars/seltos-2026.png', fuelTypes: ['Petrol', 'Turbo Petrol', 'Diesel'], transmission: 'Manual / Automatic', seating: '5 seats', engine: 'Three powertrain choices', keyFeatures: ['ADAS Level 2', '21 autonomous safety features', 'Panoramic display', 'Dual-pane panoramic sunroof', '360° camera', 'Three powertrain choices'], description: 'A bold new-generation SUV pairing commanding design with intelligent safety and connected cabin technology.', badge: 'All-New', featured: true,
  },
  {
    id: 'sonet', name: 'Kia Sonet', shortName: 'Sonet', category: ['SUV'], tagline: 'The Wild. Reborn.', image: '/assets/cars/sonet.png', fuelTypes: ['Petrol', 'Turbo Petrol', 'Diesel'], transmission: 'Manual / Automatic', seating: '5 seats', engine: 'Petrol / Diesel', keyFeatures: ['6 airbags', 'ADAS Level 1', '360° camera', 'Compact SUV', 'Three fuel choices'], description: 'A city-ready compact SUV with an assertive stance, useful technology and versatile powertrain choices.', badge: 'Compact SUV',
  },
  {
    id: 'syros', name: 'Kia Syros', shortName: 'Syros', category: ['SUV'], tagline: 'Made for your world. And everyone in it.', image: '/assets/cars/syros.jpg', fuelTypes: ['Petrol', 'Diesel'], transmission: 'Manual / Automatic', seating: '5 seats', engine: 'Turbo Petrol / Diesel', keyFeatures: ['30-inch Trinity Panoramic Display', 'Rear ventilated seats', 'Panoramic sunroof', 'Spacious second row', 'Premium tall-boy design'], description: 'Progressive design outside, lounge-like comfort inside, and a second row created to feel genuinely generous.', badge: 'New-Age SUV',
  },
  {
    id: 'carens-clavis', name: 'Kia Carens Clavis', shortName: 'Carens Clavis', category: ['Family'], tagline: 'For Epic Journeys', image: '/assets/cars/carens-clavis.png', fuelTypes: ['Petrol', 'Turbo Petrol', 'Diesel'], transmission: 'Manual / Automatic', seating: '6 / 7 seats', engine: 'Three powertrain choices', keyFeatures: ['6 / 7 seat configuration', 'ADAS Level 2', '20 autonomous features', 'Ventilated seats', 'Dual-pane panoramic sunroof'], description: 'A premium family vehicle designed around long journeys, flexible seating and intelligent comfort.', badge: 'Premium Family',
  },
  {
    id: 'carens', name: 'Kia Carens', shortName: 'Carens', category: ['Family'], tagline: 'From a Different World', image: '/assets/cars/carens.png', fuelTypes: ['Petrol', 'Diesel'], transmission: 'Manual / Automatic', seating: '6 / 7 seats', engine: 'Petrol / Diesel', keyFeatures: ['3-row seating', '6 / 7 seat configuration', '6 airbags', 'Rear AC', 'Flexible family seating'], description: 'Comfortable three-row mobility with thoughtful flexibility for modern Indian families.', badge: 'Family',
  },
  {
    id: 'carnival', name: 'Kia Carnival', shortName: 'Carnival', category: ['Family'], tagline: 'Your Own Luxury Liner', image: '/assets/cars/carnival.png', fuelTypes: ['Diesel'], transmission: 'Automatic', seating: '7 seats', engine: 'Diesel', keyFeatures: ['Powered relaxation seats', 'Dual sunroof', 'Powered sliding doors', '8 airbags', 'ADAS Level 2'], description: 'An indulgent luxury MPV experience with lounge seating, effortless access and thoughtful assistance systems.', badge: 'Luxury MPV',
  },
  {
    id: 'syros-ev', name: 'Kia Syros EV', shortName: 'Syros EV', category: ['Electric', 'SUV'], tagline: 'Superior Beyond Belief', image: '/assets/cars/syros-ev.png', fuelTypes: ['Electric'], transmission: 'Automatic', seating: '5 seats', range: '526 KM', battery: 'High-voltage EV battery', engine: 'Up to 171 PS', keyFeatures: ['526 km ARAI-certified range', 'Up to 171 PS', '10–80% in approximately 39 minutes', '30-inch display', 'Lifetime high-voltage battery warranty*'], description: 'Intelligent electric performance, distinctive architecture and long-range confidence for everyday mobility.', badge: 'Electric',
  },
  {
    id: 'carens-clavis-ev', name: 'Kia Carens Clavis EV', shortName: 'Clavis EV', category: ['Electric', 'Family'], tagline: "It's an E.We.", image: '/assets/cars/carens-clavis-ev.png', fuelTypes: ['Electric'], transmission: 'Automatic', seating: 'Up to 7 seats', range: 'Up to 490 KM', battery: '42 kWh / 51.4 kWh', engine: 'Electric', keyFeatures: ['Up to 490 km range', 'Up to 7 seats', 'ADAS Level 2', 'V2L & V2V', '20 ADAS features'], description: 'A versatile electric family vehicle with genuine seven-seat flexibility and useful energy-sharing technology.', badge: 'Electric Family',
  },
  {
    id: 'ev6', name: 'Kia EV6', shortName: 'EV6', category: ['Electric'], tagline: 'The Electric Superstar', image: '/assets/cars/ev6.png', fuelTypes: ['Electric'], transmission: 'Automatic', seating: '5 seats', range: '650+ KM', battery: '84 kWh', engine: 'AWD', keyFeatures: ['650+ km range', 'AWD', '10–80% in approximately 18 minutes*', 'V2L & V2V', 'ADAS Level 2'], description: 'A dramatic electric crossover bringing ultra-fast charging, dynamic performance and bold design together.', badge: 'Performance EV',
  },
  {
    id: 'ev9', name: 'Kia EV9', shortName: 'EV9', category: ['Electric', 'SUV'], tagline: "World's Most Inspiring Electric. Ever.", image: '/assets/cars/ev9.png', fuelTypes: ['Electric'], transmission: 'Automatic', seating: '6 seats', range: '561 KM', battery: '99.8 kWh', engine: 'AWD', keyFeatures: ['561 km range', '6 seats', 'AWD', '10 airbags', 'Second-row relaxation seats'], description: 'A flagship electric SUV with commanding proportions, restorative space and advanced assistance technology.', badge: 'Flagship EV',
  },
];

export const evVehicles = vehicles.filter((vehicle) => vehicle.category.includes('Electric'));
export const seltos = vehicles[0];
