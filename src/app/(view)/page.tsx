import CurvedLoop from "@/components/blocks/TextAnimations/CurvedLoop/CurvedLoop";
import React from "react";

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col justify-around items-center">
      <div className="h-1/3"></div>

      <div className="h-1/3"></div>
      <div className="w-full fixed bottom-0 left-0">
        <CurvedLoop
          marqueeText="UI UX DESIGNER • FRONT END DEVELOPER • MUSIC PRODUCER • DOODLE ARTIST"
          className="text-foreground!"
          curveAmount={0}
        />
      </div>
      <div
        className="w-full h-0.5 bg-foreground fixed -z-30 left-0 top-[50%] -translate-y-1/2 -skew-3"
        style={{ clipPath: `polygon(0 100%, 25% 25%, 100% 0, 75% 75%)` }}
      />
    </main>
  );
}
