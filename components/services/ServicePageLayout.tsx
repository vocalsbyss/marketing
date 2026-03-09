"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";

interface ServicePageLayoutProps {
    title: string;
    description: string;
    images: { url: string; title: string }[];
    icon: React.ElementType;
}

const ServicePageLayout = ({ title, description, images, icon: Icon }: ServicePageLayoutProps) => {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Page Header */}
            <section className="pt-40 pb-20 bg-brand-black text-white px-6 border-b border-white/5">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-brand-green/20 mb-8 border border-brand-green/30"
                    >
                        <Icon className="w-10 h-10 text-brand-green" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl font-serif mb-8"
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed"
                    >
                        {description}
                    </motion.p>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {images.map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative aspect-[4/5] rounded-[40px] overflow-hidden bg-brand-light border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-500"
                            >
                                <img
                                    src={img.url}
                                    alt={img.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-10">
                                    <div>
                                        <p className="text-white/60 text-sm font-bold uppercase tracking-widest mb-2">Project Showcase</p>
                                        <h3 className="text-2xl font-bold text-white uppercase">{img.title}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-brand-light">
                <div className="max-w-5xl mx-auto bg-brand-black rounded-[50px] p-12 md:p-20 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                    <h2 className="text-4xl md:text-6xl font-serif mb-8 text-white italic">Transform Your Home Today</h2>
                    <p className="text-xl text-white/50 mb-10 max-w-xl mx-auto">
                        Ready to elevate your living space with VIKISHA.CO's premium {title.toLowerCase()} services?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-brand-green hover:bg-brand-green-hover text-white transition-all transform hover:scale-105"
                            onClick={() => window.open(`https://wa.me/918688367177?text=Hi VIKISHA.CO, I am interested in ${title} and would like to schedule a free site inspection.`, '_blank')}
                        >
                            Schedule Inspection
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-white hover:bg-white/10"
                            onClick={() => window.open('https://wa.me/918688367177', '_blank')}
                        >
                            WhatsApp Inquiry
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ServicePageLayout;
