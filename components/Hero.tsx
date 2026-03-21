"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
      <div className="max-w-4xl mx-auto text-center px-4">

        <Image
          src="/"
          alt="Mohammad Nizam"
          width={160}
          height={160}
          className="rounded-full mx-auto mb-6 border-4 border-white"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          Mohammad Nizam
        </motion.h2>

        <p className="text-lg mb-6">
          Particle physicist specializing in neutrino physics and detector simulations.
        </p>

        <Button asChild>
          <a href="#contact">Get in Touch</a>
        </Button>
      </div>
    </section>
  );
}
