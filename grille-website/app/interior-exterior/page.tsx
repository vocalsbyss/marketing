"use client";

import { motion } from "framer-motion";
import SharedContent from '../../components/SharedContent';
export default function InteriorExterior() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-pink-900 to-green-900 text-white overflow-x-hidden">

      {/* Background shapes sliding */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      >
        <div className="absolute w-80 h-80 bg-pink-500/20 blur-3xl rounded-full top-16 left-16"></div>
        <div className="absolute w-80 h-80 bg-green-500/20 blur-3xl rounded-full bottom-16 right-16"></div>
      </motion.div>

      <section className="text-center py-32 px-6">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Interior & Exterior Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto mb-10"
        >
          Elegant interior and exterior designs tailored for your home or office.
        </motion.p>
      </section>

      {/* Gallery */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="bg-white/10 h-64 rounded-lg flex items-center justify-center text-gray-200 font-semibold"
          >
            Image {i + 1}
          </motion.div>
        ))}
      </section>

      <SharedContent />
    </div>
  );
}