'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PACKAGES = [
    {
        title: 'Full Day Lombok Tour',
        description: 'Experience the best of Lombok in one day. Visit traditional villages, waterfalls, and stunning beaches.',
        price: 'IDR 750k',
        duration: '10 Hours',
        image: '/packages/tour.png',
        features: ['Private Car & Driver', 'Entrance Fees Included', 'Mineral Water', 'Hotel Pickup & Drop-off'],
        popular: true,
    },
    {
        title: 'Airport Transfer',
        description: 'Hassle-free transfer from Lombok International Airport to your hotel in Senggigi or Kuta areas.',
        price: 'IDR 250k',
        duration: '1-2 Hours',
        image: '/packages/transfer.png',
        features: ['One-way Transfer', 'Private AC Vehicle', 'English Speaking Driver', 'Luggage Assistance'],
        popular: false,
    },
    {
        title: 'Honeymoon Special',
        description: 'Romantic getaway package designed for couples. Sunset dinners, private beach tours, and more.',
        price: 'IDR 1.5M',
        duration: '2 Days',
        image: '/packages/honeymoon.png',
        features: ['Romantic Dinner', 'Private Boat Tour', 'Couple Spa Treatment', 'Professional Photographer'],
        popular: false,
    },
];

export function TravelPackages() {
    return (
        <section id="packages" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Popular Travel Packages</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Curated experiences to make your trip unforgettable. All packages include a professional driver and vehicle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PACKAGES.map((pkg, index) => (
                        <motion.div
                            key={pkg.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className={`h-full flex flex-col hover:shadow-xl hover:ring-2 hover:ring-primary transition-all duration-300 border-none overflow-hidden pt-0 ${pkg.popular ? 'shadow-2xl ring-2 ring-primary/20 relative' : 'shadow-lg'}`}>
                                {pkg.popular && (
                                    <div className="absolute top-4 right-4 z-10 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                                        Best Value
                                    </div>
                                )}
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={pkg.image}
                                        alt={pkg.title}
                                        fill
                                        className="object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold">{pkg.title}</CardTitle>
                                    <CardDescription>{pkg.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="mb-6">
                                        <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                                        <span className="text-gray-500 text-sm ml-2">/ {pkg.duration}</span>
                                    </div>
                                    <ul className="space-y-3">
                                        {pkg.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                                                <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild className={`w-full rounded-full text-white ${pkg.popular ? '' : 'variant-outline'}`}>
                                        <Link href="/book">
                                            Book This Package
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
