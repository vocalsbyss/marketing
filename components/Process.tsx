"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Ruler as RulerIcon, Settings } from "lucide-react";

const steps = [
    {
        icon: Calendar,
        title: "Book Consultation",
        description: "Schedule a free on-site visit. Our experts will understand your needs and provide a customized quote.",
    },
    {
        icon: RulerIcon,
        title: "Site Inspection",
        description: "Detailed measurements are taken to ensure a perfect fit. We analyze the structure for maximum safety.",
    },
    {
        icon: Settings,
        title: "Installation",
        description: "Quick and clean installation by our certified technicians within hours, leaving your home safe and tidy.",
    },
];

const Process = () => {
    return (
        <section className="py-24 bg-brand-black text-white px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-brand-green font-bold tracking-wider uppercase text-sm mb-4">Our Method</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-2">
                            Transforming Your Space in 3 Easy Steps
                        </h3>
                    </div>
                    <p className="text-white/50 max-w-sm">
                        We've streamlined our process to ensure transparency, quality, and speed from start to finish.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-[100px] right-[100px] h-[2px] bg-gradient-to-r from-brand-green/50 via-brand-green/10 to-transparent z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative z-10"
                        >
                            <div className="w-20 h-20 rounded-full bg-brand-green flex items-center justify-center mb-8 shadow-lg shadow-brand-green/20">
                                <step.icon className="w-8 h-8 text-white" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-brand-black font-bold flex items-center justify-center text-sm">
                                    {index + 1}
                                </div>
                            </div>
                            <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                            <p className="text-white/60 leading-relaxed text-lg">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
