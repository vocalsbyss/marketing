"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Navbar />
      <Hero />

      {/* Simplified features or trust section could go here if needed, 
          but the user requested a focused 3-button landing. */}

      <Testimonials />

      {/* Trust Section / Stats */}
      <section className="py-20 bg-white border-y border-brand-light">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Installations", value: "5,000+" },
            { label: "Happy Families", value: "4,800+" },
            { label: "Design Experts", value: "20+" },
            { label: "Warranty Years", value: "10" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-black mb-2">{stat.value}</div>
              <div className="text-brand-black/50 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
