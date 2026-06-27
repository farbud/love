"use client";

import { motion } from "framer-motion";

export type Place =
  | "Night Drive"
  | "Coffee"
  | "Dinner"
  | "City Walk"
  | "You Decide";

type Props = {
  value: Place | "";
  onSelect: (value: Place) => void;
};

const places: Place[] = [
  "Night Drive",
  "Coffee",
  "Dinner",
  "City Walk",
  "You Decide",
];

export default function PlaceSelect({ onSelect }: Props) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
        <h1 className="text-3xl font-bold text-center mb-8">
          Where should we go? ❤️
        </h1>

        <div className="grid gap-4">
          {places.map((place) => (
            <motion.button
              key={place}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelect(place)}
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
              {place}
            </motion.button>
          ))}
        </div>
      </div>
    </main>
  );
}
