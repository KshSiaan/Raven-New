import CurvedLoop from "@/components/blocks/TextAnimations/CurvedLoop/CurvedLoop";
import React from "react";

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col justify-around items-center">
      <div className="h-1/3"></div>
      <span className="text-9xl font-bold text-background text-shadow-border">
        RAVEN
      </span>
      <div className="h-1/3"></div>
      <div className="w-full fixed bottom-0 left-0">
        <CurvedLoop
          marqueeText="UI UX DESIGNER • FRONT END DEVELOPER • MUSIC PRODUCER • DOODLE ARTIST"
          className="text-foreground!"
          curveAmount={0}
        />
      </div>
    </main>
  );
}
