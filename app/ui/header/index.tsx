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
      isBordered={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: "shadow-md",
        wrapper: "max-w-screen-xl mx-auto",
      }}
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
        <div className="flex gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm">
          {centerLinks.map(({ path, label }) => (
            <NavbarItem
              key={label}
              isActive={pathname === path}
              className="relative"
            >
              <Link
                color="foreground"
                href={path}
                className={cn(
                  "px-3 py-1.5 transition-all duration-200 ease-in-out relative",
                  pathname === path
                    ? "text-amber-600 font-medium after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-gradient-to-r after:from-amber-500 after:to-orange-500 after:rounded-full"
                    : "hover:text-amber-600"
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
                "px-4 py-2 font-medium transition-all duration-200 relative",
                pathname === path
                  ? "text-amber-600 after:absolute after:bottom-1 after:left-4 after:right-4 after:h-0.5 after:bg-gradient-to-r after:from-amber-500 after:to-orange-500 after:rounded-full"
                  : "hover:text-amber-600"
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
            <NavbarMenuItem
              key={label}
              isActive={pathname === path}
              className="flex items-center"
            >
              <Link
                color="foreground"
                href={path}
                size="lg"
                className={cn(
                  "px-3 py-1.5 transition-all duration-200 ease-in-out relative",
                  pathname === path
                    ? "text-amber-600 font-medium after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-gradient-to-r after:from-amber-500 after:to-orange-500 after:rounded-full"
                    : "hover:text-amber-600"
                )}
              >
                {label}
              </Link>
            </NavbarMenuItem>
          ))}
          <Divider className="my-2 opacity-75" />
          {rightLinks.map(({ path, label }) => (
            <NavbarMenuItem
              key={label}
              isActive={pathname === path}
              className="flex items-center"
            >
              <Link
                color="foreground"
                href={path}
                size="lg"
                className={cn(
                  "px-3 py-1.5 transition-all duration-200 ease-in-out relative",
                  pathname === path
                    ? "text-amber-600 font-medium after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-gradient-to-r after:from-amber-500 after:to-orange-500 after:rounded-full"
                    : "hover:text-amber-600"
                )}
              >
                {label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
        <div className="flex items-center justify-center mt-4">
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
