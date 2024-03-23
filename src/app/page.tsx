import Features from "@/components/sections/landing/features";
import Hero from "@/components/sections/landing/hero";
import DataExample from "@/components/sections/landing/data-example";

export default function Home() {
  return (
    <>
      <main>
        <div className="w-full dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-between p-12 lg:p-24 z-10">
            <Hero />

            <Features />
          </div>

          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-background [mask-image:radial-gradient(ellipse_at_50%,transparent_45%,black,black)]"></div>
        </div>
        
        <DataExample />
      </main>
    </>
  );
}
