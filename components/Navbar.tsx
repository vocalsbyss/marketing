"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Shield, ChevronDown } from "lucide-react";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const services = [
        { name: "Invisible Grills", href: "/services/invisible-grills" },
        { name: "UPVC Windows & Doors", href: "/services/upvc-windows" },
        { name: "Interior Designs", href: "/services/interior-design" },
    ];

    const navLinks = [
        { name: "About", href: "/about" },
        { name: "Gallery", href: "/gallery" },
        { name: "FAQ", href: "/faq" },
        { name: "Blog", href: "/blog" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
                scrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative h-12 w-40">
                        <Image
                            src="/logo.jpeg"
                            alt="VIKISHA.CO Logo"
                            fill
                            className="object-contain transition-all duration-300"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="relative group">
                        <button className={cn(
                            "flex items-center gap-1 text-sm font-medium transition-colors",
                            scrolled ? "text-brand-black/70 hover:text-brand-green" : "text-white/70 hover:text-white"
                        )}>
                            Services <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                        </button>
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-2xl rounded-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                            {services.map((service) => (
                                <Link
                                    key={service.name}
                                    href={service.href}
                                    className="block px-6 py-4 text-sm text-brand-black hover:bg-brand-light hover:text-brand-green transition-colors"
                                >
                                    {service.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors",
                                scrolled ? "text-brand-black/70 hover:text-brand-green" : "text-white/70 hover:text-white"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button
                        size="sm"
                        variant={scrolled ? "primary" : "outline"}
                        className={!scrolled ? "border-white text-white hover:bg-white/10" : ""}
                        onClick={() => window.open('https://wa.me/918688367177?text=Hi VIKISHA.CO, I would like to book a free consultation.', '_blank')}
                    >
                        Free Consultation
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={cn(
                        "md:hidden p-2 transition-colors",
                        scrolled ? "text-brand-black" : "text-white"
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div
                className={cn(
                    "fixed inset-0 top-[72px] bg-white z-40 transition-transform duration-500 md:hidden flex flex-col p-8 gap-6 shadow-xl",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <p className="text-xs font-bold text-brand-black/40 uppercase tracking-widest">Our Services</p>
                {services.map((service) => (
                    <Link
                        key={service.name}
                        href={service.href}
                        className="text-xl font-bold text-brand-black border-b border-brand-light pb-2"
                        onClick={() => setIsOpen(false)}
                    >
                        {service.name}
                    </Link>
                ))}
                <p className="text-xs font-bold text-brand-black/40 uppercase tracking-widest mt-4">Menu</p>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-xl font-bold text-brand-black border-b border-brand-light pb-2"
                        onClick={() => setIsOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
                <Button size="lg" className="mt-4" onClick={() => (window.location.href = "/contact")}>
                    Get Consultation
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;
