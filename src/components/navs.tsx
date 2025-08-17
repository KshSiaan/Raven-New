"use client";
import React from "react";

export default function Navs() {
  return (
    <nav>
      <ul className="text-4xl list-none font-black space-y-6 tracking-[8px] fixed left-12 top-12 transition-all!">
        <li className="text-foreground text-8xl cursor-not-allowed">HOME</li>
        <li className="text-shadow-border text-white cursor-grab active:cursor-grabbing hover:scale-105 hover:ml-3 transition-all!">
          PROJECTS
        </li>
        <li className="text-shadow-border text-white cursor-grab active:cursor-grabbing">
          ABOUT ME
        </li>
        <li className="text-shadow-border text-white cursor-grab active:cursor-grabbing">
          CONTACT ME
        </li>
        <li className="text-shadow-border text-white cursor-grab active:cursor-grabbing">
          ESCAPE
        </li>
      </ul>
    </nav>
  );
}
