"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="mb-24">
      <motion.h1
        className="text-center text-6xl font-extrabold leading-none tracking-tight text-white sm:text-[5rem]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="bg-gradient-to-tl from-purple-500 to-pink-400 dark:bg-gradient-to-br dark:from-violet-400 dark:to-purple-600 bg-clip-text font-black text-transparent leading-tight">
          Leverage the power <br />
          of Roblox OAuth2
        </span>
      </motion.h1>

      <motion.p
        className="text-center text-xl mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Edit this page in{" "}
        <code className="bg-purple-400 dark:bg-violet-500 px-2 py-1 rounded-md whitespace-nowrap">
          src/app/page.tsx
        </code>{" "}
        if you dare.
      </motion.p>

      <div className="flex items-center justify-center gap-4">
        <Link href="/login/roblox">
          <motion.button
            className="mt-12 px-8 py-2 bg-purple-500 rounded-xl font-medium shadow-lg text-white border-2 border-purple-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Log in
          </motion.button>
        </Link>

        <Link href={"https://github.com/PiratePeep/roblox-oauth2-example"}>
          <motion.button
            className="mt-12 px-6 py-2 font-medium bg-background rounded-xl shadow-lg border-2 border-secondary-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            See the code
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
