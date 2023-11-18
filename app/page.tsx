"use client";

import { Button } from "@/components/ui/button";
import { Triangle } from "lucide-react";
import Typewriter from "typewriter-effect";
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="font-bold text-4xl text-black">
        Ask me about
        {/* TODO */}
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("math problem")
              .callFunction(() => {
                console.log("String typed out!");
              })
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        />
      </div>

      <Link href='/sign-in'>
        <Button className="items-center justify-center">Sign In</Button>
      </Link>
    </main>
  );
}
