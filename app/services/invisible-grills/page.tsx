"use client";

import React from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Shield } from "lucide-react";

const images = [
    { url: "/gallery/invisible-grill-1.png", title: "Premium Balcony Installation" },
    { url: "/gallery/invisible-grill-2.png", title: "Modern Window Security" },
    { url: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=800", title: "Skyline View" },
    { url: "https://images.unsplash.com/photo-1600585154340-be6199f7e009?auto=format&fit=crop&q=80&w=800", title: "Modern High-Rise" },
    { url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800", title: "Window Security" },
    { url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800", title: "Panoramic View" },
];

export default function InvisibleGrillsPage() {
    return (
        <ServicePageLayout
            title="Invisible Grills"
            description="Premium safety solutions that protect your loved ones without compromising your architectural views. Engineered with SS 316 marine-grade steel."
            images={images}
            icon={Shield}
        />
    );
}
