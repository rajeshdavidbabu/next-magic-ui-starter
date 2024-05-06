import { Command } from "lucide-react";
import Link from "next/link";
import { DarkModeToggle } from "@/components/dark-mode-toggle";
import { RetroGridDemo } from "@/components/retro-grid-demo";
import { AnimatedListDemo } from "@/components/animated-list-demo";
import { DockDemo } from "@/components/dock-demo";

export default function Index() {
  return (
    <section className="w-full min-h-screen flex flex-col">
      <nav className="flex items-center justify-between p-4 w-full">
        <Link href="/" className="flex items-center space-x-2">
          <Command className="h-8 w-8" />
          <h1 className="text-xl font-semibold">Next + Magic-ui</h1>
        </Link>
        <DarkModeToggle />
      </nav>
      <div className="container flex justify-center px-4 md:px-6 flex-1 py-8 overflow-x-hidden">
        <div className="flex flex-col items-center space-y-4 text-center p-4 md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
            A{" "}
            <span className="font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
              Simple Starter
            </span>{" "}
            For Nextjs, Shadcn-ui and{" "}
            <Link
              href="https://magicui.design/"
              className="hover:text-blue-500"
            >
              Magic-ui
            </Link>
          </h1>

          <div className="px-4 w-full">
            <RetroGridDemo />
          </div>
          <div className="px-4 w-full">
            <AnimatedListDemo />
          </div>
          <div className="px-4 w-full">
            <DockDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
