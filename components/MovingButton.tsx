"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

const messages = [
  "😜 Nice Try",
  "😂 Nope",
  "😏 Not happening",
  "🤣 Almost",
  "❤️ Press YES",
];

export default function MovingButton() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [msg, setMsg] = useState("");

  const move = () => {
    const container = containerRef.current;

    if (!container) return;

    const rect = container.getBoundingClientRect();

    // محدودیت حرکت داخل کادر
    const maxX = rect.width / 2 - 60;
    const maxY = rect.height / 2 - 30;

    const x = Math.random() * maxX * 2 - maxX;
    const y = Math.random() * maxY * 2 - maxY;

    setPos({ x, y });

    setMsg(messages[Math.floor(Math.random() * messages.length)]);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center"
    >
      {msg && (
        <div className="absolute -top-10 text-sm text-red-400">{msg}</div>
      )}

      <motion.button
        onMouseEnter={move}
        onTouchStart={move}
        animate={{
          x: pos.x,
          y: pos.y,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 15,
        }}
        className="
          absolute
          px-10
          py-4
          rounded-full
          border
          border-white/20
          bg-white/5
          text-white
          backdrop-blur-xl
          hover:bg-white/10
        "
      >
        🖤 NO
      </motion.button>
    </div>
  );
}
