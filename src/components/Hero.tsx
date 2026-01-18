'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-white pt-32 md:pt-20">
            {/* Animated Background Shapes */}
            <div className="absolute inset-0 z-0 pointer-events-none">
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

            <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left"
                >
                    <div className="inline-block px-4 py-2 bg-secondary/20 text-yellow-700 rounded-full text-sm font-semibold mb-6">
                        ✨ #1 Car & Motor Rental in Lombok
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                        Explore Lombok, <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-600">
                            Your Way.
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                        Experience the freedom of travel with our premium fleet.
                        Transparent pricing, 24/7 support, and unforgettable memories.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full shadow-xl shadow-primary/30 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                            <Link href="/book">
                                Book Your Ride <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-2 hover:bg-gray-50 hover:text-primary transition-all duration-300">
                            <Link href="https://wa.me/6281234567890" target="_blank">
                                <MessageCircle className="mr-2 h-5 w-5 text-green-500" />
                                WhatsApp Us
                            </Link>
                        </Button>
                    </div>
                </motion.div>

                {/* Hero Visual / Composition */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-[400px] md:h-[600px] w-full"
                >
                    {/* Main Image Container with Glassmorphism */}
                    <div className="relative z-10 w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                        <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-secondary/20 mix-blend-overlay z-10" />
                        {/* We use a composition of our vehicles here, or a nice lifestyle shot. 
                    For now using a high quality vehicle image placeholder */}
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: "url('/vehicles/avanza.png')" }}
                        />
                    </div>

                    {/* Floating Cards */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-10 -left-10 z-20 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 hidden md:block"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">✓</div>
                            <div>
                                <div className="text-xs text-gray-500 font-medium">Trusted by</div>
                                <div className="text-sm font-bold text-gray-800">500+ Travelers</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-20 -right-5 z-20 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 hidden md:block"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold">★</div>
                            <div>
                                <div className="text-xs text-gray-500 font-medium">Rating</div>
                                <div className="text-sm font-bold text-gray-800">4.9 / 5.0</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
