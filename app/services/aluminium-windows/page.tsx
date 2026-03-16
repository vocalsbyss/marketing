"use client";

import React from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Grid2x2 } from "lucide-react";

const images = [
    { url: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800", title: "Modern Aluminium Windows" },
    { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800", title: "Aluminium Sliding Doors" },
    { url: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800", title: "Secure Aluminium Frames" },
    { url: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800", title: "Premium Aluminium Designs" },
];

export default function AluminiumWindowsPage() {
    return (
        <ServicePageLayout
            title="Aluminium Windows & Doors"
            description="Sleek, durable, and highly secure aluminium windows and doors crafted for modern homes. rust-free performance and elegant aesthetics."
            images={images}
            icon={Grid2x2}
        />
    );
}
