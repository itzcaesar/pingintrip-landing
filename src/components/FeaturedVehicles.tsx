import { VehicleCard } from '@/components/VehicleCard';

// Mock data
const VEHICLES = [
    {
        name: 'Toyota Avanza',
        image: '/vehicles/avanza.png',
        capacity: 7,
        transmission: 'Automatic',
        price: 'IDR 350k',
        type: 'Car',
    },
    {
        name: 'Honda Vario',
        image: '/vehicles/vario.png',
        capacity: 2,
        transmission: 'Automatic',
        price: 'IDR 80k',
        type: 'Motorbike',
    },
    {
        name: 'Toyota Hiace',
        image: '/vehicles/hiace.png',
        capacity: 15,
        transmission: 'Manual',
        price: 'IDR 1.2M',
        type: 'Van',
    },
];

export function FeaturedVehicles() {
    return (
        <section id="vehicles" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Popular Vehicles</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Choose from our customer favorites. All vehicles are regularly serviced and sanitized.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {VEHICLES.map((vehicle) => (
                        <VehicleCard key={vehicle.name} {...vehicle} />
                    ))}
                </div>
            </div>
        </section>
    );
}
