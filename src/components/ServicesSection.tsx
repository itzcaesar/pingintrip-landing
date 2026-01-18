import { Car, Bike, Map } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';

const SERVICES = [
    {
        title: 'Car Rental',
        description: 'Clean, well-maintained cars with or without a driver. Perfect for family trips.',
        icon: Car,
    },
    {
        title: 'Motorbike Rental',
        description: 'Beat the traffic and explore hidden gems with our reliable scooters and motorbikes.',
        icon: Bike,
    },
    {
        title: 'Tour Packages',
        description: 'Custom tours to beaches, waterfalls, and cultural sites with experienced local guides.',
        icon: Map,
    },
];

export function ServicesSection() {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Our Services</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Everything you need for a perfect holiday in Lombok. We take care of the logistics so you can enjoy the view.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {SERVICES.map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
