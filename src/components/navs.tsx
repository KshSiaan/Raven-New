"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function Navs() {
  const path = usePathname();

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "PROJECTS", href: "/projects" },
    { label: "ABOUT ME", href: "/about" },
    { label: "CONTACT ME", href: "/contact" },
    { label: "ESCAPE", href: "/escape" },
  ];

  const isHome = path === "/";

  return (
    <>
      <nav>
        <ul className="text-4xl list-none font-black space-y-6 tracking-[8px] fixed left-12 top-12">
          {navItems.map((item) => {
            const isActive = path === item.href;

            return (
              <motion.li key={item.href}>
                <Link href={item.href}>
                  <motion.span
                    animate={{
                      scale: isActive ? 1.8 : 1,
                      color: isActive ? "#000" : "#fff",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 22,
                    }}
                    className={cn(
                      "block origin-left",
                      !isActive && "text-shadow-border"
                    )}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>

      {/* RAVEN Logo */}
      <motion.span
        initial={false}
        animate={
          isHome
            ? {
                left: "50%",
                top: "50%",
                x: "-50%",
                y: "-50%",
                scale: 1,
              }
            : {
                left: "3rem",
                bottom: "2rem",
                top: "auto",
                x: 0,
                y: 0,
                scale: 0.7,
              }
        }
        // transition={{
        //   type: "spring",
        //   stiffness: 250,
        //   damping: 25,
        // }}
        className={cn(
          "fixed text-9xl font-bold text-background text-shadow-border"
          // isHome && "-translate-1/2"
        )}
      >
        RAVEN
      </motion.span>
    </>
  );
}
