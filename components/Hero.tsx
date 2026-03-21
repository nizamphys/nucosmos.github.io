// components/Hero.tsx (Client Component)
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          Particle Physicist & Researcher
        </motion.h2>
        <p className="text-lg mb-6">
          Exploring neutrino physics, detector simulation, and high‑energy experiments.
        </p>
        <Button asChild>
          <a href="#contact">Get in Touch</a>
        </Button>
      </div>
    </section>
  );
}

