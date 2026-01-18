import Link from 'next/link';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-slate-50 border-t pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-xl font-bold text-primary mb-4">Pingintrip</h3>
                        <p className="text-gray-600 text-sm mb-6">
                            Your trusted partner for exploring Lombok. Car rental, motor rental, and tour guides.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://www.instagram.com/pingintrip/" target="_blank" className="text-gray-400 hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/" className="hover:text-primary">About Us</Link></li>
                            <li><Link href="#vehicles" className="hover:text-primary">Vehicles</Link></li>
                            <li><Link href="#services" className="hover:text-primary">Services</Link></li>
                            <li><Link href="/book" className="hover:text-primary">Book Now</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="col-span-1">
                        <h4 className="font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>Car Rental</li>
                            <li>Motorbike Rental</li>
                            <li>Airport Transfer</li>
                            <li>Private Tours</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-1">
                        <h4 className="font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-primary shrink-0" />
                                <span>Jalan Raya Senggigi, Lombok, Indonesia</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-4 w-4 text-primary shrink-0" />
                                <span>+62 812 3456 7890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-4 w-4 text-primary shrink-0" />
                                <span>hello@pingintrip.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Pingintrip. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
