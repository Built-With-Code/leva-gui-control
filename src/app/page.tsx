"use client";

import { motion } from "framer-motion";
import { button, Leva, useControls } from "leva";

export default function Home() {
  const [{ mass, stiffness, spread }, set] = useControls(() => ({
    mass: { value: 5, min: 1, max: 100 },
    stiffness: { value: 10, min: 1, max: 100 },
    spread: { value: 10, min: 1, max: 50 },
    reset: button(() => {
      set({
        mass: 5,
        stiffness: 10,
        spread: 10,
      });
    }),
  }));

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-20 p-24 bg-neutral-900 text-neutral-100">
      <Leva />
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
          key={`${mass}-${stiffness}-${spread}`}
          className="absolute -inset-[1px] rounded-md opacity-50"
          style={{
            background:
              "conic-gradient(#ff4545, #00ff99, #006aff, #ff0095, #ff4545)",
          }}
          animate={{ filter: `blur(${spread}px)` }}
          transition={{
            type: "spring",
            damping: 0,
            mass: mass,
            stiffness: stiffness,
            repeatType: "reverse",
          }}
        />
      </div>
    </main>
  );
}
