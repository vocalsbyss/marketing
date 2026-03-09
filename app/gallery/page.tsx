"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const galleryImages = [
    { url: "/gallery/invisible-grill-1.png", title: "Luxury Balcony Safety", type: "Invisible Grill" },
    { url: "/gallery/upvc-1.png", title: "Modern Patio Doors", type: "UPVC Windows" },
    { url: "/gallery/interior-1.png", title: "Minimalist Bedroom", type: "Interior Design" },
    { url: "/gallery/invisible-grill-2.png", title: "Invisible Window Grills", type: "Invisible Grill" },
    { url: "/gallery/upvc-2.png", title: "Premium Living Room Windows", type: "UPVC Windows" },
    { url: "/gallery/interior-2.png", title: "Grand Luxury Dining", type: "Interior Design" },
    { url: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=800", title: "Skyline Balcony", type: "Invisible Grill" },
    { url: "https://images.unsplash.com/photo-1600585154340-be6199f7e009?auto=format&fit=crop&q=80&w=800", title: "Modern Apartment", type: "Invisible Grill" },
    { url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800", title: "Window Installation", type: "UPVC Windows" },
];

export default function Gallery() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-20 bg-brand-light px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-brand-black mb-6">Our Work</h1>
                    <p className="text-xl text-brand-black/60 max-w-2xl mx-auto">
                        Real installations from our thousands of happy customers across the country.
                    </p>
                </div>
            </section>

            {/* Grid */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {galleryImages.map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="relative group rounded-3xl overflow-hidden cursor-pointer"
                            >
                                <img
                                    src={img.url}
                                    alt={img.title}
                                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                    <div>
                                        <h3 className="text-white font-bold text-xl">{img.title}</h3>
                                        <p className="text-white/60 text-sm">{img.type}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Badge */}
            <section className="py-24 px-6 bg-brand-black text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8">Ready to transform your home?</h2>
                    <p className="text-xl text-white/50 mb-10 leading-relaxed">
                        Join 5000+ happy customers who have secured their homes with VIKISHA.CO.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-brand-green text-white px-8 py-4 rounded-full font-bold hover:bg-brand-green-hover transition-all active:scale-95 shadow-lg shadow-brand-green/20" onClick={() => (window.location.href = "/contact")}>
                            Start Your Project
                        </button>
                        <button
                            className="border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all active:scale-95"
                            onClick={() => window.open('https://wa.me/918688367177', '_blank')}
                        >
                            WhatsApp Consult
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
