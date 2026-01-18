import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
}

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
    return (
        <Card className="group hover:shadow-2xl transition-all duration-300 border-none shadow-lg bg-white/50 backdrop-blur-sm border-white/20 hover:-translate-y-2 hover:ring-2 hover:ring-primary">
            <CardHeader className="flex flex-col items-center pb-4">
                <div className="h-16 w-16 rounded-2xl bg-linear-to-br from-primary/10 to-primary/30 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-center text-gray-800">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600 text-sm leading-relaxed px-6 pb-8">
                {description}
            </CardContent>
        </Card>
    );
}
