import { Building2, HomeIcon, Factory, Ruler, HardHat, Wrench } from 'lucide-react';

const services = [
  {
    title: 'Commercial Construction',
    description: 'Full-service commercial construction for retail, office, and industrial spaces.',
    icon: Building2
  },
  {
    title: 'Residential Projects',
    description: 'Custom home building and major residential renovations.',
    icon: HomeIcon
  },
  {
    title: 'Industrial Construction',
    description: 'Specialized construction for manufacturing and industrial facilities.',
    icon: Factory
  },
  {
    title: 'Project Planning',
    description: 'Comprehensive project planning and management services.',
    icon: Ruler
  },
  {
    title: 'Renovations',
    description: 'Expert renovation and remodeling for existing structures.',
    icon: Wrench
  },
  {
    title: 'Safety Consulting',
    description: 'Construction safety consulting and implementation.',
    icon: HardHat
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive construction solutions for every project
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <service.icon className="h-12 w-12 text-orange-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}