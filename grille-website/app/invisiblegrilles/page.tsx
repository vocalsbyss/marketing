"use client";

import { motion } from "framer-motion";
import SharedContent from '../../components/SharedContent';
export default function InvisibleGrills() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-900 to-blue-900 text-white overflow-x-hidden">

      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      >
        <div className="absolute w-96 h-96 bg-purple-600/20 blur-3xl rounded-full top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-blue-600/20 blur-3xl rounded-full bottom-10 right-10"></div>
      </motion.div>

      {/* Hero */}
      <section className="text-center py-32 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Invisible Grills Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto mb-10"
        >
          Safe and elegant stainless steel invisible grills for your balconies and windows.
        </motion.p>
      </section>

      {/* Gallery */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="bg-white/10 h-64 rounded-lg flex items-center justify-center text-gray-200 font-semibold"
          >
            Image {i + 1}
          </motion.div>
        ))}
      </section>

      {/* Shared About & Contact */}
      <SharedContent />
    </div>
  );
}