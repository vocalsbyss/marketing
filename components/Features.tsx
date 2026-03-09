"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Baby, Bird, Ruler, PenTool, Sparkles } from "lucide-react";

const features = [
    {
        icon: Baby,
        title: "Child Safety",
        description: "Nano-strong nylon coated wires that prevent accidental falls, providing peace of mind for parents.",
    },
    {
        icon: Bird,
        title: "Bird Protection",
        description: "Keeps pigeons and other birds away without compromising the aesthetics of your balcony.",
    },
    {
        icon: Shield,
        title: "Rust Proof",
        description: "316 grade stainless steel cores ensures your grills never rust, even in coastal humid areas.",
    },
    {
        icon: Ruler,
        title: "Strong Materials",
        description: "Each cable can support up to 400kg of tension, making them incredibly difficult to break.",
    },
    {
        icon: Sparkles,
        title: "Minimal Design",
        description: "Wires are only 2.1mm thick, preserving your panoramic view while ensuring maximum safety.",
    },
    {
        icon: PenTool,
        title: "Expert Fitting",
        description: "Professional installation by certified technicians with years of specialized experience.",
    },
];

const Features = () => {
    return (
        <section className="py-24 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-brand-green font-bold tracking-wider uppercase text-sm mb-4">Core Benefits</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
                        Why Choose Our Invisible Grills?
                    </h3>
                    <p className="text-lg text-brand-black/60">
                        We combine high-tensile strength materials with expert craftsmanship to deliver the ultimate safety solution.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-3xl bg-brand-light border border-black/5 hover:border-brand-green/20 hover:shadow-xl hover:shadow-brand-green/5 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm border border-black/5 group-hover:bg-brand-green transition-colors duration-300">
                                <feature.icon className="w-7 h-7 text-brand-green group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h4 className="text-xl font-bold text-brand-black mb-3">{feature.title}</h4>
                            <p className="text-brand-black/60 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
