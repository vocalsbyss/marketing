"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";

const blogPosts = [
    {
        title: "Why High-Rise Apartments Need Invisible Grilles",
        excerpt: "Safety should never come at the cost of your view. Discover why modern homeowners are choosing invisible grills over traditional ones.",
        category: "Safety Tips",
        author: "Safety Expert",
        date: "March 15, 2026",
        image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Eco-Friendly Bird Protection Solutions",
        excerpt: "Keep pigeons and other birds away without harming them. Our invisible grills provide a humane and effective barrier.",
        category: "Bird Proofing",
        author: "Environment Team",
        date: "March 10, 2026",
        image: "https://images.unsplash.com/photo-1600585154340-be6199f7e009?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Maintaining Your Invisible Grills: A Guide",
        excerpt: "How to keep your safety system looking as good as new for decades. Tips on cleaning and minor maintenance.",
        category: "Maintenance",
        author: "Tech Support",
        date: "March 05, 2026",
        image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Child Safety Audit for Your Balcony",
        excerpt: "A comprehensive checklist to ensure your balcony is 100% safe for your little ones to explore.",
        category: "Child Safety",
        author: "CEO",
        date: "February 28, 2026",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    },
];

export default function Blog() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-20 bg-brand-light px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold text-brand-black mb-6">Expert <br /><span className="text-brand-green italic">Insights.</span></h1>
                    <p className="text-xl text-brand-black/60 max-w-2xl">
                        Stay updated with the latest in home safety, bird protection, and modern living solutions.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {blogPosts.map((post, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="relative aspect-[16/10] rounded-[40px] overflow-hidden mb-8 shadow-sm">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-6 left-6">
                                        <div className="bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-brand-black text-sm font-bold flex items-center gap-2">
                                            <Tag className="w-4 h-4 text-brand-green" />
                                            {post.category}
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4 px-4">
                                    <div className="flex items-center gap-6 text-sm text-brand-black/40 font-medium">
                                        <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
                                        <span className="flex items-center gap-2"><User className="w-4 h-4" /> {post.author}</span>
                                    </div>
                                    <h2 className="text-3xl font-bold text-brand-black group-hover:text-brand-green transition-colors duration-300">
                                        {post.title}
                                    </h2>
                                    <p className="text-lg text-brand-black/50 leading-relaxed line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <button className="flex items-center gap-2 font-bold text-brand-black group-hover:gap-4 transition-all duration-300">
                                        Read Article <ArrowRight className="w-5 h-5 text-brand-green" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <Button variant="outline" className="px-12 py-4">Load More Articles</Button>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-24 px-6 bg-brand-black text-white rounded-t-[100px]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">Stay Protected.</h2>
                    <p className="text-xl text-white/50 mb-10">
                        Join our newsletter for exclusive safety tips and product updates.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-grow bg-white/10 border border-white/10 rounded-full px-8 py-4 outline-none focus:ring-2 focus:ring-brand-green transition-all"
                        />
                        <Button className="px-10">Subscribe</Button>
                    </form>
                </div>
            </section>

            <Footer />
        </main>
    );
}
