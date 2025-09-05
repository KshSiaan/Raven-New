"use client";
import React from "react";
import { Button } from "./button";
import { useTheme } from "next-themes";

export default function ThemeChanger() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <Button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="size-[100px] cursor-pointer rounded-full bg-foreground absolute left-full top-full -translate-x-1/2 -translate-y-1/2 flex justify-center items-center"
    ></Button>
  );
}
