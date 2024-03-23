"use client";

import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ModeToggle({
  className,
  size,
}: Readonly<{
  className?: string;
  size?: number;
}> = {
  size: 24,
}) {
  const { theme, setTheme } = useTheme();
  const [mode, setMode] = useState(theme);

  useEffect(() => {
    setMode(theme);
  }, [theme]);
  
  // This is a workaround for the initial render
  // Prevents the hydration mismatch error
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  return (
    <div className={cn(className)}>
      <button
        onClick={() => {
          setMode(mode === "dark" ? "light" : "dark");
          setTheme(mode === "dark" ? "light" : "dark");
        }}
      >
        <AnimatePresence>
          {mode === "dark" ? (
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              exit={{ opacity: 0, rotate: 0 }}
            >
              <Sun size={size} />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, rotate: 0 }}
            >
              <Moon size={size} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
