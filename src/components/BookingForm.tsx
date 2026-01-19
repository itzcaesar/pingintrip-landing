'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

enum VehicleType {
    CAR = 'car',
    MOTOR = 'motor',
    VAN = 'van'
}

type BookingFormValues = {
    fullName: string;
    phoneNumber: string;
    vehicleType: string;
    pickupDate: Date;
    duration: string;
    pickupLocation: string;
    notes?: string;
};

export function BookingForm() {
    const { t } = useLanguage();

    const formSchema = z.object({
        fullName: z.string().min(2, {
            message: t('booking.form.requiredNote') as string, // Simplification for now, usually validation msgs also translated
        }),
        phoneNumber: z.string().regex(phoneRegex, 'Invalid phone number'),
        vehicleType: z.string().min(1, { message: 'Please select a vehicle type.' }),
        pickupDate: z.date(),
        duration: z.string().min(1, 'Duration is required'),
        pickupLocation: z.string().min(2, 'Pickup location is required'),
        notes: z.string().optional(),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: '',
            phoneNumber: '',
            vehicleType: '',
            duration: '',
            pickupLocation: '',
            notes: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast.success(t('booking.form.successTitle') as string, {
            description: t('booking.form.successDesc') as string,
        });
        // In a real app, this would POST to an API
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('booking.form.fullName')}</FormLabel>
                            <FormControl>
                                <Input placeholder={t('booking.form.fullNamePlaceholder') as string} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('booking.form.whatsapp')}</FormLabel>
                                <FormControl>
                                    <Input placeholder={t('booking.form.whatsappPlaceholder') as string} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="vehicleType"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('booking.form.vehicleType')}</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder={t('booking.form.selectVehicle')} />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="car">{t('booking.form.vehicles.car')}</SelectItem>
                                        <SelectItem value="motor">{t('booking.form.vehicles.motor')}</SelectItem>
                                        <SelectItem value="van">{t('booking.form.vehicles.van')}</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="pickupDate"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>{t('booking.form.pickupDate')}</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span>{t('booking.form.pickADate')}</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) =>
                                                date < new Date() || date < new Date("1900-01-01")
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="duration"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('booking.form.duration')}</FormLabel>
                                <FormControl>
                                    <Input type="number" min="1" placeholder="3" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="pickupLocation"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('booking.form.pickupLocation')}</FormLabel>
                            <FormControl>
                                <Input placeholder={t('booking.form.locationPlaceholder') as string} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('booking.form.notes')}</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder={t('booking.form.notesPlaceholder') as string}
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" size="lg" className="w-full text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">{t('booking.form.submit')}</Button>
            </form>
        </Form>
    );
}
