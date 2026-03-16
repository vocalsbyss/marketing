"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Shield, AppWindow as WindowIcon, Paintbrush, ChevronRight, Grid2x2 } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-brand-black">
            {/* Background with Gradient Overlay */}
            <div className="absolute inset-0 z-0 text-center">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-black/80 to-brand-black z-10" />
                <img
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000"
                    alt="Premium Home Interior"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-20 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-12 flex flex-col items-center"
                >
                    <div className="relative h-48 w-80 md:h-64 md:w-[500px] mb-4">
                        <Image
                            src="/logo.jpeg"
                            alt="VIKISHA.CO Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <p className="text-xl md:text-2xl text-brand-green font-light tracking-[0.5em] uppercase mt-4">
                        Premium Home Solutions
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-xl text-white/60 mb-16 max-w-2xl mx-auto leading-relaxed"
                >
                    Excellence in safety, durability, and aesthetics. Transform your living space with our specialized premium services.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-5xl mx-auto"
                >
                    {/* Row 1 */}
                    <Button
                        size="lg"
                        className="group py-8 rounded-2xl bg-white text-brand-black hover:bg-brand-green hover:text-white border-none shadow-2xl md:col-span-2"
                        onClick={() => (window.location.href = "/services/invisible-grills")}
                    >
                        <Shield className="w-6 h-6 mr-3" />
                        Invisible Grills
                        <ChevronRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <Button
                        size="lg"
                        className="group py-8 rounded-2xl bg-white text-brand-black hover:bg-brand-green hover:text-white border-none shadow-2xl md:col-span-2"
                        onClick={() => (window.location.href = "/services/upvc-windows")}
                    >
                        <WindowIcon className="w-6 h-6 mr-3" />
                        UPVC Windows & Doors
                        <ChevronRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <Button
                        size="lg"
                        className="group py-8 rounded-2xl bg-white text-brand-black hover:bg-brand-green hover:text-white border-none shadow-2xl md:col-span-2"
                        onClick={() => (window.location.href = "/services/interior-design")}
                    >
                        <Paintbrush className="w-6 h-6 mr-3" />
                        Interior Designs
                        <ChevronRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
                    </Button>

                    {/* Row 2 - Perfectly aligned between upper columns */}
                    <Button
                        size="lg"
                        className="group py-8 rounded-2xl bg-white text-brand-black hover:bg-brand-green hover:text-white border-none shadow-2xl md:col-span-2 md:col-start-2"
                        onClick={() => (window.location.href = "/services/aluminium-windows")}
                    >
                        <Grid2x2 className="w-6 h-6 mr-3" />
                        Aluminium Windows
                        <ChevronRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <Button
                        size="lg"
                        className="group py-8 rounded-2xl bg-brand-green text-white hover:bg-brand-green-hover border-none shadow-2xl md:col-span-2 md:col-start-4"
                        onClick={() => window.open('https://wa.me/918688367177?text=Hi VIKISHA.CO, I saw your website and I am interested in a free consultation for home safety solutions.', '_blank')}
                    >
                        <Shield className="w-6 h-6 mr-3" />
                        Get Free Consultation
                        <ChevronRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
