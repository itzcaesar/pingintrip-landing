import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const REASONS = [
    'Local Lombok experts with 10+ years experience',
    'All vehicles are less than 3 years old',
    'Transparent pricing - no hidden fees',
    '24/7 Roadside assistance included',
    'Easy booking via WhatsApp or Website',
    'Fluently English-speaking drivers available',
];

export function WhyChoose() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold tracking-tight mb-6">Why Choose Pingintrip?</h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            We are a local team passionate about showing you the best of Lombok.
                            We don&apos;t just rent cars; we help you create memories.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {REASONS.map((reason) => (
                                <li key={reason} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{reason}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 w-full relative h-[400px] rounded-3xl overflow-hidden glass-card p-2 md:order-last">
                        <div className="relative w-full h-full rounded-2xl overflow-hidden">
                            <Image
                                src="/why-choose.png"
                                alt="Why Choose Pingintrip"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
