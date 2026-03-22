// components/Hero.tsx (Client Component)
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <main className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <img
            src="/ucscpic.jpeg"
            alt="Mohammad Nizam"
            className="w-44 h-44 rounded-full border-4 border-white shadow-xl object-cover"
          />

          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Mohammad Nizam</h1>
            <p className="text-xl mb-2">Particle Physicist</p>
            <p className="text-lg mb-4">
              Neutrino Physics • Detector Simulation • Data Acquisition Systems
            </p>

            <p className="max-w-2xl mb-6 text-base">
              I conduct research in neutrino oscillations, detector development, and high‑energy physics simulations, focusing on bridging theoretical models with experimental detector systems and real‑time data processing architectures.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#about" className="bg-white text-blue-700 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                About
              </a>
              <a href="#publications" className="border border-white px-5 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition">
                Publications
              </a>
              <a href="#contact" className="border border-white px-5 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-lg leading-relaxed text-justify">
            I am a particle physicist specializing in neutrino physics, detector development, and data acquisition systems. My work focuses on understanding neutrino oscillations, improving detector performance, and designing scalable data acquisition architectures for high‑energy physics experiments. I am particularly interested in bridging theoretical models with practical detector design and real‑time data processing.
          </p>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Publications</h2>

          <div className="space-y-6">
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg">
                Study of Matter Effects in Long‑Baseline Neutrino Oscillations
              </h3>
              <p className="text-sm text-gray-600">Journal of High Energy Physics (2024)</p>
            </div>

            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg">
                Simulation and Optimization of Time Resolution in MRPC Detectors
              </h3>
              <p className="text-sm text-gray-600">Nuclear Instruments and Methods A (2023)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <p className="mb-4">Email: mohammad.nizam@example.com</p>
          <p>GitHub: https://github.com/nizamphys</p>
        </div>
      </section>
    </main>
  );
}

