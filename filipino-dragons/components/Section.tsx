"use client";

import { motion } from "framer-motion";

type SectionProps = {
  id: string;
  title: string;
  description: string;
};

export default function Section({ id, title, description }: SectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center px-6 bg-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
          {title}
        </h2>

        <p className="mt-6 max-w-3xl text-lg text-gray-600">
          {description}
        </p>
      </motion.div>
    </section>
  );
}