'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, Instagram } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/#vehicles', label: 'Vehicles' },
    { href: '/#services', label: 'Services' },
    { href: '/#contact', label: 'Contact' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const isBookingPage = pathname === '/book';

    return (
        <motion.nav
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-8 left-1/2 z-[999] w-[95%] max-w-5xl rounded-full bg-white/80 backdrop-blur-xl border border-white/30 px-4 py-2 sm:px-6 transition-shadow duration-300 shadow-[0_8px_32px_rgba(0,186,232,0.25),0_0_0_1px_rgba(255,255,255,0.3)] hover:shadow-[0_8px_40px_rgba(0,186,232,0.4),0_0_0_1px_rgba(255,255,255,0.4)]"
        >
            <div className="flex items-center justify-between h-12 sm:h-14">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 shrink-0">
                    <div className="relative h-8 w-8 sm:h-10 sm:w-10 overflow-hidden rounded-full border border-gray-100 shadow-sm">
                        {/* We can use the icon from the logo if available, or just crop the logo image */}
                        <Image
                            src="/logo.png"
                            alt="Pingintrip Logo"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <span className="font-bold text-lg tracking-tight hidden sm:block text-gray-800">Pingintrip</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1 bg-gray-100/50 p-1 rounded-full border border-gray-200/50 px-2 mx-4">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-gray-600 hover:text-primary px-4 py-1.5 rounded-full hover:bg-white transition-all duration-200"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                    <Button variant="ghost" size="icon" asChild className="rounded-full h-9 w-9 text-gray-600 hover:text-primary hover:bg-primary/5 hidden sm:flex">
                        <Link href="https://www.instagram.com/pingintrip/" target="_blank">
                            <Instagram className="h-4 w-4" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                    </Button>

                    {/* Only hide "Book Now" if we are already on the booking page */}
                    {!isBookingPage && (
                        <Button asChild size="sm" className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all text-white h-9 px-4 sm:px-6">
                            <Link href="/book">Book Now</Link>
                        </Button>
                    )}

                    {/* Mobile Menu Trigger */}
                    <div className="md:hidden ml-1">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="top" className="rounded-b-[2rem] pt-16">
                                <div className="flex flex-col gap-6 items-center">
                                    {NAV_LINKS.map((link) => (
                                        <Link
                                            key={link.label}
                                            href={link.href}
                                            className="text-lg font-semibold text-center hover:text-primary transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                    <div className="flex flex-col gap-3 w-full max-w-xs mt-2">
                                        <Button asChild variant="outline" className="w-full rounded-full justify-center">
                                            <Link href="https://wa.me/6281234567890" target="_blank" onClick={() => setIsOpen(false)}>
                                                <Phone className="mr-2 h-4 w-4" />
                                                Chat WhatsApp
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
