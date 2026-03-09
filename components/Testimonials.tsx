"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Apartment Owner",
        content: "The installation was super clean and the grills are almost invisible. My kids can play safely on the balcony now without me worrying every second.",
        rating: 5,
    },
    {
        name: "Priya Patel",
        role: "Pet Owner",
        content: "I was looking for a solution for my cats. VIKISHA.CO provided the perfect invisible barrier that doesn't block my sunset views.",
        rating: 5,
    },
    {
        name: "Amit Verma",
        role: "Interior Designer",
        content: "As an architect, I always recommend these to my clients. They maintain the building's facade while providing top-notch safety.",
        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-white px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h3 className="text-4xl font-bold text-brand-black mb-4">What Our Clients Say</h3>
                    <p className="text-brand-black/60 max-w-2xl mx-auto">
                        Trusted by thousands of families across the country for premium home safety solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testi, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-brand-light p-8 rounded-3xl border border-black/5 flex flex-col h-full relative"
                        >
                            <Quote className="absolute top-6 right-8 w-10 h-10 text-brand-green/10" />
                            <div className="flex gap-1 mb-6">
                                {[...Array(testi.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-brand-green text-brand-green" />
                                ))}
                            </div>
                            <p className="text-lg text-brand-black/80 italic mb-8 flex-grow">
                                "{testi.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center font-bold text-brand-green">
                                    {testi.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-black">{testi.name}</h4>
                                    <p className="text-sm text-brand-black/40">{testi.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
