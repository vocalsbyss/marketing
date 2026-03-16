import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Shield, Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-brand-black text-white pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
                {/* Brand Column */}
                <div className="space-y-6">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative h-12 w-40">
                            <Image
                                src="/logo.jpeg"
                                alt="VIKISHA.CO Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </Link>
                    <p className="text-white/60 leading-relaxed max-w-xs">
                        Premium invisible safety solutions for modern homes. Protecting your loved ones without compromising your view.
                    </p>

                </div>

                {/* Links Column */}
                <div>
                    <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
                    <ul className="space-y-4">
                        <li><Link href="/services" className="text-white/60 hover:text-brand-green transition-colors">Services</Link></li>
                        <li><Link href="/gallery" className="text-white/60 hover:text-brand-green transition-colors">Gallery</Link></li>
                        <li><Link href="/about" className="text-white/60 hover:text-brand-green transition-colors">About Us</Link></li>
                        <li><Link href="/faq" className="text-white/60 hover:text-brand-green transition-colors">FAQs</Link></li>
                        <li><Link href="/blog" className="text-white/60 hover:text-brand-green transition-colors">Blog</Link></li>
                    </ul>
                </div>

                {/* Services Column */}
                <div>
                    <h4 className="font-bold mb-6 text-lg">Our Services</h4>
                    <ul className="space-y-4">
                        <li><Link href="/services" className="text-white/60 hover:text-brand-green transition-colors">Balcony Grills</Link></li>
                        <li><Link href="/services" className="text-white/60 hover:text-brand-green transition-colors">Window Grills</Link></li>
                        <li><Link href="/services/upvc-windows" className="text-white/60 hover:text-brand-green transition-colors">UPVC Windows</Link></li>
                        <li><Link href="/services" className="text-white/60 hover:text-brand-green transition-colors">Staircase Protection</Link></li>
                        <li><Link href="/services/aluminium-windows" className="text-white/60 hover:text-brand-green transition-colors">Aluminium Windows & Doors</Link></li>
                    </ul>
                </div>

                {/* Contact Column */}
                <div>
                    <h4 className="font-bold mb-6 text-lg">Contact Us</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <Phone className="w-5 h-5 text-brand-green shrink-0" />
                            <span className="text-white/60">+91 8688367177</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Mail className="w-5 h-5 text-brand-green shrink-0" />
                            <span className="text-white/60">sidsuresh7264@gmail.com</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-brand-green shrink-0" />
                            <span className="text-white/60">27-6D, F. No.302, DJs Enclave, Ayodya Nagar, Kommadi, Visakhapatnam - 530048. AP. India</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
                <p>© 2026 VIKISHA.CO. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
