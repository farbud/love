"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

type Props = {
  place: string;
  pickup: string;
};

export default function Result({ place, pickup }: Props) {
  useEffect(() => {
    console.log("Date Plan:", { place, pickup });
  }, [place, pickup]);

  const copyText = async () => {
    const text = `
❤️ Date Accepted

Place: ${place}
Pickup: ${pickup}

Can't wait ✨
    `;

    await navigator.clipboard.writeText(text);
    alert("Copied ❤️");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="
          w-full
          max-w-xl
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-10
          backdrop-blur-xl
          text-center
        "
      >
        <h1 className="text-4xl font-bold text-red-500 mb-4">❤️ Yay!</h1>

        <p className="text-gray-300 mb-6">I'm really excited about this...</p>

        <div className="text-left bg-black/40 p-4 rounded-xl mb-6 text-sm">
          <p>📍 Place: {place}</p>
          <p>🚗 Pickup: {pickup}</p>
        </div>

        <button
          onClick={copyText}
          className="
            w-full
            rounded-full
            bg-linear-to-r
            from-red-700
            to-red-500
            py-4
            font-semibold
            hover:scale-105
            transition
          "
        >
          Copy ❤️
        </button>
      </motion.div>
    </main>
  );
}
