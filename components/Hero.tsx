// components/Hero.tsx (Client Component)
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">

        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="/ucscpic.jpeg"
            alt="Mohammad Nizam"
            className="w-40 h-40 rounded-full border-4 border-white object-cover shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Mohammad Nizam
          </h1>
          <p className="text-xl mb-2">
            Particle Physicist
          </p>
          <p className="text-lg mb-4">
            Neutrino Physics • Detector Simulation • Data Acquisition Systems
          </p>

          <p className="text-base max-w-2xl mb-6">
            I conduct research in neutrino oscillations, detector development, and high‑energy physics simulations, focusing on bridging theoretical models with experimental detector systems and real‑time data processing architectures.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#publications"
              className="bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Publications
            </a>
            <a
              href="#contact"
              className="border border-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
            >
              Contact
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
