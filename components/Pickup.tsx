"use client";

import { motion } from "framer-motion";

export type PickupType = "Come Pick Me Up" | "I'll Come" | "Let's Decide Later";

type Props = {
  value: PickupType | "";
  onSelect: (value: PickupType) => void;
};

const options: PickupType[] = [
  "Come Pick Me Up",
  "I'll Come",
  "Let's Decide Later",
];

export default function Pickup({ onSelect }: Props) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
        <h1 className="text-3xl font-bold text-center mb-8">
          How should we meet? 🚗
        </h1>

        <div className="grid gap-4">
          {options.map((opt) => (
            <motion.button
              key={opt}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelect(opt)}
              className="
                rounded-xl
                border
                border-white/10
                bg-white/5
                py-4
                text-white
                hover:border-red-500/40
                hover:bg-white/10
                transition
              "
            >
              {opt}
            </motion.button>
          ))}
        </div>
      </div>
    </main>
  );
}
