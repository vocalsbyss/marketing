"use client";

import React from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { DoorOpen } from "lucide-react";

const images = [
    { url: "/gallery/upvc-1.png", title: "Luxury Patio Doors" },
    { url: "/gallery/upvc-2.png", title: "Premium Casement Window" },
    { url: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800", title: "Modern Folding Door" },
    { url: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800", title: "Insulated Window" },
    { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800", title: "Minimalist Patio" },
    { url: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800", title: "Living Room Bay" },
];

export default function UpvcWindowsPage() {
    return (
        <ServicePageLayout
            title="UPVC Windows & Doors"
            description="Advanced thermal insulation and acoustic performance with sleek, modern designs. Dust-proof, sound-proof, and termite-proof solutions."
            images={images}
            icon={DoorOpen}
        />
    );
}
