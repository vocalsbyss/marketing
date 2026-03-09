"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { Shield, Target, Users, Award } from "lucide-react";

export default function About() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Header Section */}
            <section className="pt-32 pb-20 bg-brand-black text-white px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-bold mb-8">
                            Securing Homes, <br />
                            <span className="text-brand-green">Preserving Views.</span>
                        </h1>
                        <p className="text-xl text-white/60 leading-relaxed">
                            VIKISHA.CO was founded with a simple mission: to provide the highest level of home safety without compromising the aesthetic beauty of modern living spaces.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="rounded-[40px] overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6199f7e009?auto=format&fit=crop&q=80&w=1200"
                            alt="Our work"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-sm font-bold">
                            OUR STORY
                        </div>
                        <h2 className="text-4xl font-bold text-brand-black">How We Started</h2>
                        <p className="text-lg text-brand-black/60 leading-relaxed">
                            Starting as a small team of safety enthusiasts, we noticed a gap in the market for balcony safety. Traditional metal grills were bulky, rusted quickly, and blocked the beautiful city views people paid a premium for.
                        </p>
                        <p className="text-lg text-brand-black/60 leading-relaxed">
                            We spent years researching the best materials—high-tensile stainless steel, nano-coatings, and specialized mounting systems—to create what is now known as the "Invisible Grille."
                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-4">
                            <div>
                                <div className="text-4xl font-bold text-brand-green mb-1">10+</div>
                                <div className="text-brand-black/40 text-sm font-medium">Years in Business</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-brand-green mb-1">5000+</div>
                                <div className="text-brand-black/40 text-sm font-medium">Homes Secured</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 px-6 bg-brand-light">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-brand-black mb-4">Our Core Values</h2>
                        <p className="text-brand-black/50 max-w-2xl mx-auto">The principles that guide every installation we perform.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Shield, title: "Uncompromising Safety", desc: "We use only the highest grade SS 316 cables, tested to withstand 400kg+ of tension." },
                            { icon: Target, title: "Precision Engineering", desc: "Every installation is custom-measured and fitted with sub-millimeter accuracy." },
                            { icon: Award, title: "Quality Materials", desc: "Rust-proof, fire-resistant, and UV-stabilized materials that last a lifetime." },
                        ].map((v, i) => (
                            <div key={i} className="bg-white p-10 rounded-[40px] border border-black/5 shadow-sm hover:shadow-xl transition-shadow duration-300">
                                <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center mb-8">
                                    <v.icon className="w-8 h-8 text-brand-green" />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-black mb-4">{v.title}</h3>
                                <p className="text-brand-black/60 leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team CTA */}
            <section className="py-24 px-6 bg-white text-center">
                <div className="max-w-3xl mx-auto">
                    <div className="w-20 h-20 rounded-full bg-brand-green/20 flex items-center justify-center mx-auto mb-8 text-brand-green">
                        <Users className="w-10 h-10" />
                    </div>
                    <h2 className="text-4xl font-bold text-brand-black mb-6">Our Expert Team</h2>
                    <p className="text-xl text-brand-black/60 mb-10 leading-relaxed">
                        Our team consists of 50+ certified installers and safety technicians who are dedicated to making every home a safe haven.
                    </p>
                    <Button size="lg" onClick={() => (window.location.href = "/contact")}>Contact Us</Button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
