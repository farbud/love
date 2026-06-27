"use client";

import { useState } from "react";

export function useMovingButton() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const move = () => {
    const x = Math.random() * 220 - 110;
    const y = Math.random() * 160 - 80;

    setPosition({ x, y });
  };

  return {
    position,
    move,
  };
}
