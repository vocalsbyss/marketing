"use client"; // <-- ADD THIS

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import SharedContent from "../components/SharedContent";

export default function Home() {
  const images = [
    { src: "/images/grill1.jpg", title: "Balcony Grill" },
    { src: "/images/grill2.jpg", title: "Window Grill" },
    { src: "/images/grill3.jpg", title: "Custom Design" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="h-screen bg-gray-100 flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6"
        >
          Welcome to VIKISHA Grills
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl max-w-2xl"
        >
          Premium invisible grills for balcony and window safety in
          Visakhapatnam.
        </motion.p>
      </section>

      {/* Gallery Section */}
      <Gallery images={images} />

      {/* Shared About & Contact Section */}
      <SharedContent />
    </main>
  );
}