import { useState } from 'react';
import { vehicles } from '../data/vehicles';
import SectionHeading from './SectionHeading';
import VehicleCard from './VehicleCard';

const filters = [['All', 'All'], ['SUVs', 'SUV'], ['Family', 'Family'], ['Electric', 'Electric']];

export default function VehicleRange({ onExplore, onLead }) {
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? vehicles : vehicles.filter((vehicle) => vehicle.category.includes(filter));
  return (
    <section className="section vehicle-range" id="cars">
      <div className="section-shell">
        <div className="range-intro"><SectionHeading eyebrow="Explore the range" title="Find your Kia." copy="From bold SUVs to intelligent electric mobility, discover the Kia made for you." /><div className="filter-tabs" role="tablist" aria-label="Vehicle categories">{filters.map(([label, value]) => <button key={value} role="tab" aria-selected={filter === value} className={filter === value ? 'is-active' : ''} onClick={() => setFilter(value)}>{label}</button>)}</div></div>
        <div className="vehicle-grid" key={filter}>{shown.map((vehicle) => <VehicleCard key={vehicle.id} vehicle={vehicle} onExplore={onExplore} onLead={onLead} />)}</div>
      </div>
    </section>
  );
}
