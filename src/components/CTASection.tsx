'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-primary z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-1/2 -left-1/2 w-full h-full bg-linear-to-br from-secondary/30 to-transparent rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        rotate: [0, -45, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-linear-to-tl from-secondary/20 to-transparent rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto backdrop-blur-sm bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight"
                    >
                        Ready to Experience Lombok?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-blue-50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Book your vehicle or tour package today. Use code <span className="font-bold text-secondary">PINGIN10</span> for 10% off your first booking!
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-5 justify-center items-center"
                    >
                        <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full bg-secondary text-primary hover:bg-white hover:text-primary font-bold shadow-lg shadow-secondary/20 transition-all duration-300 transform hover:scale-105">
                            <Link href="/book">
                                Book Your Trip <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-white hover:text-white bg-transparent backdrop-blur-md transition-all duration-300">
                            <Link href="https://wa.me/6281234567890" target="_blank">
                                Contact Support
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
