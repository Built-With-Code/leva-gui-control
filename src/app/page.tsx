"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  const pulse = useSpring(0, { damping: 0, mass: 5, stiffness: 10 });
  const pulsingBg = useTransform(pulse, (r) => {
    return `blur(${r}px)`;
  });

  useEffect(() => {
    pulse.set(10);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-20 p-24 bg-neutral-900 text-neutral-100">
      <div className="relative">
        <button className="relative bg-neutral-700 px-3 py-2 rounded-md hover:bg-neutral-800 transition-colors duration-200 z-10">
          Subscribe to Built With Code
        </button>
        <div
          className="absolute -inset-[1px] rounded-md"
          style={{
            background:
              "conic-gradient(#ff4545, #00ff99, #006aff, #ff0095, #ff4545)",
          }}
        />
        <motion.div
          className="absolute -inset-[1px] rounded-md opacity-50"
          style={{
            background:
              "conic-gradient(#ff4545, #00ff99, #006aff, #ff0095, #ff4545)",
            filter: pulsingBg,
          }}
        />
      </div>
    </main>
  );
}
