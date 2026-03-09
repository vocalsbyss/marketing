"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const Comparison = () => {
    return (
        <section className="py-24 bg-brand-light px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-brand-green font-bold tracking-wider uppercase text-sm mb-4">The Better Choice</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">Traditional vs. Invisible Grills</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Traditional Grills */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-12 rounded-[40px] border border-black/5 shadow-sm"
                    >
                        <h4 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
                                <XCircle className="w-6 h-6" />
                            </span>
                            Traditional Metal Grills
                        </h4>
                        <ul className="space-y-6">
                            {[
                                "Obstructs panoramic views",
                                "Prone to rust and maintenance",
                                "Bulky and outdated appearance",
                                "Hard to escape during emergencies",
                                "Attracts dust and grime",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 text-brand-black/40">
                                    <div className="w-6 h-6 rounded-full border border-red-100 flex items-center justify-center shrink-0 mt-0.5">
                                        <div className="w-2 h-2 rounded-full bg-red-300" />
                                    </div>
                                    <span className="text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Invisible Grills */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-brand-black p-8 md:p-12 rounded-[40px] shadow-2xl shadow-brand-green/10 border border-brand-green/20 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-6">
                            <div className="bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                Recommended
                            </div>
                        </div>

                        <h4 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                            <span className="w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center">
                                <CheckCircle2 className="w-6 h-6" />
                            </span>
                            VIKISHA.CO Invisible Grills
                        </h4>
                        <ul className="space-y-6">
                            {[
                                "100% Unobstructed views",
                                "Maintenance-free & Rust-proof",
                                "Modern, premium aesthetic",
                                "Easy to cut during fire emergencies",
                                "Nano-coating stays clean longer",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 text-white/80">
                                    <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center shrink-0 mt-0.5">
                                        <CheckCircle2 className="w-4 h-4 text-brand-green" />
                                    </div>
                                    <span className="text-lg font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
