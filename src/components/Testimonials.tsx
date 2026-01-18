import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
    {
        name: 'Sarah Johnson',
        role: 'Australia',
        quote: "The car was in perfect condition and the driver was so helpful giving us tips on where to go. Highly recommended!",
    },
    {
        name: 'Budi Santoso',
        role: 'Jakarta',
        quote: "Sewa motor disini gampang banget, motornya baru dan bersih. Pelayanan ramah.",
    },
    {
        name: 'Michael Chen',
        role: 'Singapore',
        quote: "We booked a private tour for 3 days. It was the highlight of our Indonesia trip. Professional and friendly.",
    },
];

export function Testimonials() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t) => (
                        <Card key={t.name} className="border-none shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="pt-6">
                                <Quote className="h-8 w-8 text-secondary mb-4 opacity-50" />
                                <p className="text-gray-600 mb-6 italic">&quot;{t.quote}&quot;</p>
                                <div>
                                    <div className="font-semibold">{t.name}</div>
                                    <div className="text-sm text-gray-500">{t.role}</div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
