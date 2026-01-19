'use client';

import { Car, Bike, Map } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { useLanguage } from '@/contexts/LanguageContext';

export function ServicesSection() {
    const { t } = useLanguage();

    const SERVICES = [
        {
            title: t('services.carRental.title') as string,
            description: t('services.carRental.description') as string,
            icon: Car,
        },
        {
            title: t('services.motorbikeRental.title') as string,
            description: t('services.motorbikeRental.description') as string,
            icon: Bike,
        },
        {
            title: t('services.tourPackages.title') as string,
            description: t('services.tourPackages.description') as string,
            icon: Map,
        },
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">{t('services.title')}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {t('services.description')}
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
