"use client";

import React from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Paintbrush } from "lucide-react";

const images = [
    { url: "/gallery/interior-1.png", title: "Modern Luxury Bedroom" },
    { url: "/gallery/interior-2.png", title: "Grand Dining Space" },
    { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800", title: "Luxury Living Room" },
    { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800", title: "Modern Master Suite" },
    { url: "https://images.unsplash.com/photo-1616489953149-7551745cae7b?auto=format&fit=crop&q=80&w=800", title: "Bespoke Kitchen" },
    { url: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80&w=800", title: "Contemporary Office" },
];

export default function InteriorDesignPage() {
    return (
        <ServicePageLayout
            title="Interior Designs"
            description="Creating spaces that reflect your personality. From concept to completion, we deliver high-end, functional, and beautiful interiors."
            images={images}
            icon={Paintbrush}
        />
    );
}
