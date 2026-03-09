"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        q: "What are invisible grills?",
        a: "Invisible grills are modern safety systems made of high-tensile 316 stainless steel cables, often coated with nano-nylon. They provide a transparent, aesthetically pleasing alternative to traditional iron or aluminum grills, ensuring safety without blocking your view.",
    },
    {
        q: "Are they safe for children and pets?",
        a: "Yes, they are specifically designed for child and pet safety. Each cable is spaced 2 to 4 inches apart (depending on requirements) and can withstand over 400kg of tension, making them virtually impossible for children or pets to pass through or break.",
    },
    {
        q: "Are they rust-proof?",
        a: "Absolutely. We use SS 316 grade stainless steel, which is marine-grade and highly resistant to corrosion and rust, even in coastal or humid environments.",
    },
    {
        q: "Do they block the view?",
        a: "No, that's their main advantage. With a cable thickness of only 2.1mm to 2.5mm, they are nearly invisible from a distance and do not obstruct your panoramic balcony or window views.",
    },
    {
        q: "How long does installation take?",
        a: "A typical balcony installation takes about 4–6 hours. Most residential window projects are completed within a single day. Our team ensures a clean installation with minimal disruption.",
    },
    {
        q: "How much do they cost?",
        a: "Pricing is usually calculated per square foot. It varies based on the total area, the type of cables used, and the mounting structure. We offer free on-site measurements and detailed quotes.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-20 bg-brand-black text-white px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">Frequently Asked</h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        Everything you need to know about our invisible safety grills.
                    </p>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-3xl transition-all duration-300 ${openIndex === index ? 'border-brand-green/30 bg-brand-light shadow-xl shadow-brand-green/5' : 'border-black/5 bg-white'}`}
                        >
                            <button
                                className="w-full text-left p-8 flex items-center justify-between group"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <h3 className={`text-xl font-bold transition-colors ${openIndex === index ? 'text-brand-green' : 'text-brand-black'}`}>
                                    {faq.q}
                                </h3>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === index ? 'bg-brand-green text-white rotate-180' : 'bg-brand-light text-brand-black hover:bg-black/5'}`}>
                                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="p-8 pt-0 text-lg text-brand-black/60 leading-relaxed border-t border-black/5 mt-2">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Quick Contact */}
            <section className="py-24 px-6 bg-brand-light">
                <div className="max-w-5xl mx-auto text-center bg-white rounded-[40px] p-12 md:p-20 shadow-sm border border-black/5">
                    <h2 className="text-3xl font-bold text-brand-black mb-6 italic">Still have questions?</h2>
                    <p className="text-lg text-brand-black/50 mb-10 max-w-xl mx-auto">
                        Our safety experts are ready to help you with any specific requirements or technical details.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-brand-black text-white px-8 py-4 rounded-full font-bold hover:bg-black/90 transition-all shadow-xl shadow-black/10" onClick={() => (window.location.href = "/contact")}>
                            Ask a Question
                        </button>
                        <button className="border-2 border-brand-green text-brand-green px-8 py-4 rounded-full font-bold hover:bg-brand-green hover:text-white transition-all shadow-lg shadow-brand-green/10" onClick={() => (window.location.href = "/contact")}>
                            Talk to Expert
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
