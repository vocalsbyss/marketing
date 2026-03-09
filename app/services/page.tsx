"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, ArrowRight, Building2, Wind, Layers } from "lucide-react";

const services = [
    {
        id: "balcony",
        title: "Balcony Invisible Grills",
        icon: Building2,
        description: "Our most popular service. Protect your high-rise balconies without losing the view you love. Perfect for families with young children or pets.",
        benefits: [
            "100% Unobstructed panoramic views",
            "Child & Pet safe design",
            "Rust-proof SS 316 grade cables",
            "Quick and clean installation",
        ],
        image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "window",
        title: "Window Invisible Grills",
        icon: Wind,
        description: "Replace traditional, heavy metal window grills with sleek, nearly-invisible safety wires. Ideal for both modern apartments and offices.",
        benefits: [
            "Nearly invisible from the outside",
            "Easy to clean and maintain",
            "Provides natural light and ventilation",
            "High-tensile strength for security",
        ],
        image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "staircase",
        title: "Staircase Protection",
        icon: Layers,
        description: "Ensure the safety of your internal staircases without compromising the interior design. Custom-fitted for any staircase shape.",
        benefits: [
            "Custom installation for any design",
            "Prevents kids from slipping through",
            "Elegant and modern aesthetic",
            "Extremely durable and long-lasting",
        ],
        image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80&w=800",
    },
];

export default function Services() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-brand-black text-white px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        Premium invisible safety solutions tailored for every corner of your home.
                    </p>
                </div>
            </section>

            {/* Service List */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
                    {services.map((service, index) => (
                        <div key={service.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="flex-1 space-y-8">
                                <div className="w-16 h-16 rounded-2xl bg-brand-green flex items-center justify-center shadow-lg shadow-brand-green/20">
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>
                                <h2 className="text-4xl font-bold text-brand-black">{service.title}</h2>
                                <p className="text-lg text-brand-black/60 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-4">
                                    {service.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="bg-brand-green/10 p-1 rounded-full">
                                                <ShieldCheck className="w-5 h-5 text-brand-green" />
                                            </div>
                                            <span className="font-medium text-brand-black/80">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button size="lg" className="group" onClick={() => (window.location.href = "/contact")}>
                                    Book Service <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                            <div className="flex-1 w-full">
                                <div className="rounded-[40px] overflow-hidden shadow-2xl aspect-[4/3]">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-brand-light">
                <div className="max-w-5xl mx-auto bg-brand-black rounded-[40px] p-12 md:p-20 text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">Need a Custom Solution?</h2>
                    <p className="text-xl text-white/60 mb-10 max-w-xl mx-auto">
                        Our engineering team can design invisible safety grills for unique architectural requirements.
                    </p>
                    <Button size="lg" className="bg-white text-brand-black hover:bg-white/90" onClick={() => (window.location.href = "/contact")}>
                        Consult Our Expert
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
