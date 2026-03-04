"use client";

import { motion } from "framer-motion";
import SharedContent from '../../components/SharedContent';

export default function UPVCWindows() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-orange-900 to-teal-900 text-white overflow-x-hidden">

      {/* Background moving circles */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      >
        <div className="absolute w-80 h-80 bg-orange-500/20 blur-3xl rounded-full top-20 left-20"></div>
        <div className="absolute w-80 h-80 bg-teal-500/20 blur-3xl rounded-full bottom-20 right-20"></div>
      </motion.div>

      <section className="text-center py-32 px-6">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          UPVC Windows
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto mb-10"
        >
          Durable and stylish UPVC windows for modern homes and offices.
        </motion.p>
      </section>

      {/* Gallery */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.07, rotate: -2 }}
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