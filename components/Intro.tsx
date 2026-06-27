"use client";

import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

type IntroProps = {
  onFinish: () => void;
};

export default function Intro({ onFinish }: IntroProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black"
    >
      {/* Red Glow */}
      <div className="absolute h-500px w-500px rounded-full bg-red-600/20 blur-[160px]" />

      <div className="z-10 flex flex-col items-center text-center px-6">
        <h1 className="text-5xl font-bold text-white md:text-7xl">
          <Typewriter
            words={[
              "Hey...",
              "I made something just for you Bahar.",
              "Tap anywhere ❤️",
            ]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={30}
          />
        </h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onFinish}
          className="mt-16 rounded-full border border-red-500 px-8 py-3 text-white transition hover:bg-red-600"
        >
          Continue
        </motion.button>
      </div>
    </motion.section>
  );
}
