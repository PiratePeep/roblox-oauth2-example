"use client";
import ModeToggle from "@/components/mode-toggle";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 lg:grid-rows-3 gap-6">
      <motion.div
        className="col-span-1 md:col-span-2 lg:col-span-4 row-span-3 rounded-3xl bg-secondary dark:bg-primary flex flex-col"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, delay: 0.55 }}
      >
        <div className="relative w-full h-[100%] rounded-t-3xl">
          <img
            src="/auth.svg"
            alt="Roblox OAuth2"
            className="w-full rounded-t-3xl aspect-square object-cover xl:h-full mt-6"
          />
        </div>

        <div className="flex flex-col justify-center p-6 h-full">
          <h2 className="text-3xl font-bold dark:text-primary-foreground">
            Lucia Auth
          </h2>

          <p className="mt-4 text-xl dark:text-primary-foreground">
            This project uses the Lucia Auth library to simplify the OAuth2
            process. It's a simple, lightweight, and easy-to-use library that
            allows you to authenticate users with any OAuth2 provider. I chose
            it over other libraries like NextAuth.js because it's very flexible
            and well-documented.
          </p>

          <div className="flex items-center gap-2 mt-8 text-purple-400 dark:text-violet-500">
            <a href="https://lucia-auth.com/" className="font-medium">
              Read the docs
            </a>

            <MoveRight size={24} />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="col-span-1 md:col-span-2 lg:col-span-4 bg-fuchsia-400 dark:bg-purple-500 rounded-3xl py-4 px-8 flex flex-col"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.55 }}
      >
        <h2 className="text-4xl font-extrabold text-white mt-4">Database</h2>

        <p className="mt-6 text-white text-lg font-medium">
          This project comes with Prisma preconfigured. It's a modern ORM 
          that makes it easy to manage your database and write queries in
          TypeScript instead of SQL.
        </p>

        <p className="text-lg font-medium text-white mt-6 mb-2">
          View the schema in:{" "}
          <code className="mt-4 text-white bg-zinc-800 px-2 py-1 rounded-md whitespace-nowrap">
            prisma/schema.prisma
          </code>
        </p>
      </motion.div>

      <motion.div
        className="col-span-1 md:col-span-2 rounded-3xl bg-secondary p-6 flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.55 }}
      >
        <p className="text-2xl text-left font-semibold mr-auto">
          Authenticated Pages
        </p>

        <p className="mt-4 text-lg text-left">
          Lock down pages to only be accessible by authenticated users.
        </p>
      </motion.div>

      <motion.div
        className="col-span-1 md:col-span-2 rounded-3xl bg-primary p-6 flex flex-coljustify-center items-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.55 }}
      >
        <div className="flex flex-col mr-4">
          <p className="text-4xl font-bold text-primary-foreground text-center leading-[3.2rem]">
            Theme Toggle Included
          </p>
        </div>
      </motion.div>

      <motion.div
        className="md:col-span-4 rounded-3xl bg-background p-6 flex flex-col justify-center relative dark:bg-dot-white/[0.2] bg-dot-black/[0.2] dark:outline dark:outline-1 dark:outline-purple-400"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, delay: 0.55 }}
      >
        <p className="text-2xl font-semibold z-10">Basic User Panel</p>

        <p className="mt-4 text-lg z-10">
          This project comes with a basic user panel that shows the user's
          avatar, username, and Roblox profile URL.
        </p>

        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:opacity-0 bg-secondary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] rounded-3xl"></div>
      </motion.div>
    </div>
  );
}
