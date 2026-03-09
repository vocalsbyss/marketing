"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, MapPin, MessageSquare, Clock, ShieldCheck, Instagram, Facebook, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
    const [submitted, setSubmitted] = React.useState(false);

    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-20 bg-brand-black text-white px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">Let's Connect</h1>
                    <p className="text-xl text-white/60 max-w-2xl">
                        Ready to secure your home? Get in touch for a free site inspection and customized quote.
                    </p>
                </div>
            </section>

            {/* Contact Grid */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Form */}
                    <div className="bg-brand-light p-8 md:p-12 rounded-[40px] border border-black/5">
                        <h2 className="text-3xl font-bold text-brand-black mb-10 flex items-center gap-3 italic">
                            <MessageSquare className="w-8 h-8 text-brand-green" />
                            Send Message
                        </h2>
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-20"
                            >
                                <div className="w-20 h-20 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-green">
                                    <ShieldCheck className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-black mb-4 uppercase">Request Received!</h3>
                                <p className="text-brand-black/60 mb-8">We are redirecting you to WhatsApp to complete your consultation booking.</p>
                                <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
                            </motion.div>
                        ) : (
                            <form
                                className="space-y-6"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const formData = new FormData(e.currentTarget);
                                    const name = formData.get('name');
                                    const phone = formData.get('phone');
                                    const service = formData.get('service');
                                    const message = formData.get('message');

                                    setSubmitted(true);

                                    const text = `Hi VIKISHA.CO,%0A%0AI'd like to request a free consultation.%0A%0A*Lead Details:*%0AName: ${name}%0APhone: ${phone}%0AService: ${service}%0AMessage: ${message}%0A%0A_Sent via website_`;
                                    setTimeout(() => {
                                        window.open(`https://wa.me/918688367177?text=${text}`, '_blank');
                                    }, 1500);
                                }}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-brand-black/60 uppercase ml-2">Your Name</label>
                                        <input
                                            name="name"
                                            required
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-white border border-black/5 rounded-2xl p-4 focus:ring-2 focus:ring-brand-green outline-none transition-all shadow-sm"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-brand-black/60 uppercase ml-2">Phone Number</label>
                                        <input
                                            name="phone"
                                            required
                                            type="tel"
                                            placeholder="+91 8688367177"
                                            className="w-full bg-white border border-black/5 rounded-2xl p-4 focus:ring-2 focus:ring-brand-green outline-none transition-all shadow-sm"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-brand-black/60 uppercase ml-2">Email Address</label>
                                    <input
                                        name="email"
                                        required
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-white border border-black/5 rounded-2xl p-4 focus:ring-2 focus:ring-brand-green outline-none transition-all shadow-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-brand-black/60 uppercase ml-2">Service Needed</label>
                                    <select name="service" className="w-full bg-white border border-black/5 rounded-2xl p-4 focus:ring-2 focus:ring-brand-green outline-none transition-all shadow-sm appearance-none">
                                        <option>Balcony Invisible Grills</option>
                                        <option>Window Invisible Grills</option>
                                        <option>Staircase Protection</option>
                                        <option>UPVC Windows & Doors</option>
                                        <option>Interior Design</option>
                                        <option>Full Apartment Safety</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-brand-black/60 uppercase ml-2">Message</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        placeholder="Tell us about your requirements..."
                                        className="w-full bg-white border border-black/5 rounded-2xl p-4 focus:ring-2 focus:ring-brand-green outline-none transition-all shadow-sm resize-none"
                                    />
                                </div>
                                <Button type="submit" size="lg" className="w-full py-5 text-lg font-bold">
                                    Get Free Consultation
                                </Button>
                            </form>
                        )}
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col justify-between py-6">
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-bold text-brand-black mb-8 italic">Contact Information</h3>
                                <div className="space-y-8">
                                    <div className="flex items-start gap-6 group">
                                        <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center shrink-0 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                                            <Phone className="w-6 h-6 text-brand-green group-hover:text-white" />
                                        </div>
                                        <div>
                                            <p className="text-brand-black/40 font-bold text-sm uppercase mb-1">Call Us</p>
                                            <p className="text-2xl font-bold text-brand-black">+91 8688367177</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-6 group">
                                        <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center shrink-0 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                                            <Mail className="w-6 h-6 text-brand-green group-hover:text-white" />
                                        </div>
                                        <div>
                                            <p className="text-brand-black/40 font-bold text-sm uppercase mb-1">Email Us</p>
                                            <p className="text-2xl font-bold text-brand-black">sidsuresh7264@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-6 group">
                                        <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center shrink-0 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                                            <MapPin className="w-6 h-6 text-brand-green group-hover:text-white" />
                                        </div>
                                        <div>
                                            <p className="text-brand-black/40 font-bold text-sm uppercase mb-1">Visit Office</p>
                                            <p className="text-2xl font-bold text-brand-black">27-6D, F. No.302, DJs Enclave, Ayodya Nagar, Kommadi, Visakhapatnam - 530048</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-brand-black mb-6 italic">Support Hours</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-brand-green" />
                                        <span className="text-brand-black/60">Mon - Sat: 9am - 7pm</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck className="w-5 h-5 text-brand-green" />
                                        <span className="text-brand-black/60">24/7 Site Support</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-12 border-t border-black/5">
                            <p className="font-bold text-brand-black mb-6">Follow Our Work</p>
                            <div className="flex gap-4">
                                {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-brand-black hover:bg-brand-green hover:text-white transition-all cursor-pointer shadow-sm">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                ))}
                            </div>
                            <div className="mt-10">
                                <Button
                                    variant="outline"
                                    className="w-full flex items-center justify-center gap-3 py-6 rounded-3xl border-brand-green text-brand-green hover:bg-brand-green/5 text-lg"
                                    onClick={() => window.open('https://wa.me/918688367177', '_blank')}
                                >
                                    <MessageCircle className="w-6 h-6" />
                                    Chat on WhatsApp
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Embed Placeholder */}
            <section className="h-[400px] w-full bg-brand-light relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <div className="text-center">
                        <MapPin className="w-12 h-12 text-brand-black/20 mx-auto mb-4" />
                        <p className="text-brand-black/40 font-medium italic">Google Map Embed Location</p>
                    </div>
                </div>
                {/* Real embed would go here */}
            </section>

            <Footer />
        </main>
    );
}
