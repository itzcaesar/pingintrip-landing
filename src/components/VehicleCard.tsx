'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Settings, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface VehicleCardProps {
    name: string;
    image: string;
    capacity: number;
    transmission: string; // 'Manual' | 'Automatic'
    price: string;
    type: string;
}

export function VehicleCard({ name, image, capacity, transmission, price, type }: VehicleCardProps) {
    const { t } = useLanguage();

    return (
        <Card className="group overflow-hidden hover:shadow-2xl hover:ring-2 hover:ring-primary transition-all duration-300 flex flex-col h-full border-none shadow-lg bg-white rounded-3xl pt-0">
            <div className="relative aspect-video w-full bg-gray-100 overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-gray-800 shadow-sm">
                    {type}
                </div>
            </div>
            <CardHeader className="pb-2 pt-6 px-6">
                <CardTitle className="flex justify-between items-start">
                    <span className="text-xl font-bold text-gray-900">{name}</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 px-6">
                <div className="flex gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-md">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="font-medium">{capacity} {t('vehicles.seats')}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-md">
                        <Settings className="h-4 w-4 text-primary" />
                        <span className="font-medium">{transmission}</span>
                    </div>
                </div>
                <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-primary">{price}</span>
                    <span className="text-sm font-medium text-gray-400">{t('vehicles.perDay')}</span>
                </div>
            </CardContent>
            <CardFooter className="px-6 pb-6">
                <Button asChild className="w-full rounded-xl h-12 text-base font-semibold group-hover:bg-primary/90 transition-colors shadow-md shadow-primary/20 text-white">
                    <Link href="/book">
                        {t('vehicles.bookNow')} <ArrowRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
