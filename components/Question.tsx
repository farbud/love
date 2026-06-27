"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import MovingButton from "./MovingButton";

type QuestionProps = {
  onYes: () => void;
};

export default function Question({ onYes }: QuestionProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      {/* Background Glow */}
      <div className="absolute h-550px w-550px rounded-full bg-red-600/20 blur-[170px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-2xl"
      >
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mb-8 flex justify-center"
        >
          <Heart fill="#ef4444" className="h-14 w-14 text-red-500" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400"
        >
          I made something just for you...
        </motion.p>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-center text-4xl font-bold leading-tight md:text-5xl"
        >
          you want go a date with me?😲😲😲
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-5 text-center text-gray-400"
        >
          I promise it'll be fun ❤️
        </motion.p>

        <div className="mt-14 relative w-full h-160px flex items-center justify-center">
          <motion.button
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={onYes}
            className="
              rounded-full
              bg-linear-to-r
              from-red-700
              to-red-500
              px-10
              py-4
              text-lg
              font-semibold
              shadow-lg
              shadow-red-700/40
              transition
            "
          >
            ❤️ YES
          </motion.button>

          <MovingButton />
        </div>
      </motion.div>
    </section>
  );
}
