'use client';

import { BookingForm } from '@/components/BookingForm';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BookPage() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-secondary/10 pt-42 pb-16 relative overflow-hidden">
            {/* Animated Background Shapes */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/40 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -30, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/50 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-300/30 rounded-full blur-[80px]"
                />
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Left Column - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/3 lg:sticky lg:top-32"
                    >
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-gray-900">
                            {t('booking.title')} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                                {t('booking.titlehighlight')}
                            </span>
                        </h1>
                        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                            {t('booking.subtitle')}
                        </p>

                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg"
                            >
                                <div className="p-3 bg-primary/10 rounded-xl">
                                    <Phone className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">{t('booking.features.instant.title')}</h3>
                                    <p className="text-sm text-gray-500">{t('booking.features.instant.description')}</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg"
                            >
                                <div className="p-3 bg-secondary/20 rounded-xl">
                                    <MapPin className="h-5 w-5 text-yellow-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">{t('booking.features.freePickup.title')}</h3>
                                    <p className="text-sm text-gray-500">{t('booking.features.freePickup.description')}</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg"
                            >
                                <div className="p-3 bg-green-100 rounded-xl">
                                    <Clock className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">{t('booking.features.support.title')}</h3>
                                    <p className="text-sm text-gray-500">{t('booking.features.support.description')}</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Column - Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-2/3 w-full"
                    >
                        <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-primary/10 border border-white/50 relative overflow-hidden">
                            {/* Subtle glow effect */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/30 rounded-full blur-3xl" />

                            <div className="relative z-10">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('booking.form.title')}</h2>
                                <p className="text-gray-500 mb-8">{t('booking.form.requiredNote')}</p>
                                <BookingForm />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
