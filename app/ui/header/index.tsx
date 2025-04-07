"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import type { NavbarProps } from "@heroui/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Divider,
  Image,
} from "@heroui/react";
import NextImage from "next/image";
import { cn } from "@heroui/react";
import { palanquin } from "../fonts";

const centerLinks = [
  { path: "/taikatassut", label: "Taikatassut" },
  { path: "/halinallet", label: "Halinallet" },
  { path: "/karvatassut", label: "Karvatassut" },
];

const rightLinks = [
  { path: "/info", label: "Tietoa meistä" },
  { path: "/liity-mukaan", label: "Liity mukaan" },
];

export default function Component(props: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    <Navbar
      classNames={{
        base: "border-b border-default-200 bg-background/80 backdrop-blur-lg backdrop-saturate-150 shadow-md shadow-black/5",
        wrapper: "px-4 max-w-7xl mx-auto",
        menu:
          "items-center mx-auto mt-2 max-h-[85vh] max-w-[90vw] rounded-3xl border border-default-200/30 bg-background/95 py-8 px-6 shadow-2xl backdrop-blur-2xl dark:bg-default-100/40",
      }}
      height="4rem"
      isBordered={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Left Content */}
      <NavbarBrand>
        <Link
          href="/"
          className={`${palanquin.className} ml-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500 hover:opacity-80 transition-opacity`}
        >
          Varsinais-Suomen Kaverikoirat
        </Link>
      </NavbarBrand>

      {/* Center Content */}
      <NavbarContent className="hidden lg:flex gap-1" justify="center">
        <div className="flex gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm bg-background/60">
          {centerLinks.map(({ path, label }) => (
            <NavbarItem key={label} isActive={pathname === path} className="relative">
              <Link
                color="foreground"
                href={path}
                className={cn(
                  "px-3 py-1.5 rounded-full transition-all duration-200 ease-in-out",
                  pathname === path
                    ? "bg-warning-400/70 text-black font-medium shadow-md"
                    : "hover:bg-default-200/60 hover:shadow"
                )}
              >
                {label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      {/* Right Content */}
      <NavbarContent className="hidden lg:flex gap-4" justify="end">
        {rightLinks.map(({ path, label }) => (
          <NavbarItem key={label} isActive={pathname === path}>
            <Link
              color="foreground"
              href={path}
              size="sm"
              className={cn(
                "px-4 py-2 rounded-full font-medium transition-all duration-200",
                pathname === path
                  ? "bg-warning-500 text-white shadow"
                  : "hover:bg-warning-400/40 hover:text-black"
              )}
            >
              {label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Menu Toggle (Mobile) */}
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="lg:hidden"
      />

      {/* Mobile Menu */}
      <NavbarMenu
        motionProps={{
          initial: { opacity: 0, y: -8 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -8 },
          transition: {
            ease: "easeInOut",
            duration: 0.15,
          },
        }}
      >
        <div className="flex flex-col items-center gap-2 pt-2">
          {centerLinks.map(({ path, label }) => (
            <NavbarMenuItem key={label} isActive={pathname === path} className="flex items-center">
              <Link
                color="foreground"
                href={path}
                size="lg"
                className={cn(
                  "px-3 py-1.5 rounded-full transition-all duration-200 ease-in-out",
                  pathname === path
                    ? "bg-warning-400/70 text-black font-medium shadow-md"
                    : "hover:bg-default-200/60 hover:shadow"
                )}
              >
                {label}
              </Link>
            </NavbarMenuItem>
          ))}
          <Divider className="my-2 opacity-50" />
          {rightLinks.map(({ path, label }) => (
            <NavbarMenuItem key={label} isActive={pathname === path} className="flex items-center">
              <Link
                color="foreground"
                href={path}
                size="lg"
                className={cn(
                  "px-3 py-1.5 rounded-full transition-all duration-200 ease-in-out",
                  pathname === path
                    ? "bg-warning-400/70 text-black font-medium shadow-md"
                    : "hover:bg-default-200/60 hover:shadow"
                )}
              >
                {label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
        <div className="flex items-center justify-center mt-8">
          <Image
            as={NextImage}
            alt="Dog paw"
            src="/paw.svg"
            width={300}
            height={300}
            className="drop-shadow-lg"
          />
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
