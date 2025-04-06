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
import { Icon } from "@iconify/react";
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
        base: "border-b border-default-200 bg-background/80 backdrop-blur-lg backdrop-saturate-150",
        wrapper: "px-4 max-w-7xl mx-auto",
        menu: "items-center mx-auto mt-2 max-h-[85vh] max-w-[90vw] rounded-2xl border border-default-200/50 bg-background/95 py-6 px-4 shadow-xl backdrop-blur-xl backdrop-saturate-150 dark:bg-default-100/50",
      }}
      height="4rem"
      isBordered={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Left Content */}
      <NavbarBrand>
        <Icon
          icon="lucide:paw"
          className="text-2xl text-primary-500"
          width="24"
          height="24"
        />
        <Link
          href="/"
          className={`${palanquin.className} ml-2 font-semibold text-inherit hover:opacity-80 transition-opacity`}
          color="foreground"
          size="lg"
        >
          Varsinais-Suomen Kaverikoirat
        </Link>
      </NavbarBrand>

      {/* Center Content */}
      <NavbarContent
        className="hidden lg:flex gap-1"
        justify="center"
      >
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
                  "px-3 py-1.5 rounded-full transition-colors",
                  pathname === path ? "bg-warning-400/50 font-medium" : "hover:bg-default-200/50"
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
                "px-3 py-1.5 rounded-full transition-colors",
                pathname === path ? "bg-warning-400/50 font-medium" : "hover:bg-default-200/50"
              )}
            >
              {label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="lg:hidden"
      />

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
                  "px-3 py-1.5 rounded-full transition-colors",
                  pathname === path ? "bg-warning-400/50 font-medium" : "hover:bg-default-200/50"
                )}
              >
                {label}
              </Link>
            </NavbarMenuItem>
          ))}
          <Divider className="my-2 opacity-50" />
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
                  "px-3 py-1.5 rounded-full transition-colors",
                  pathname === path ? "bg-warning-400/50 font-medium" : "hover:bg-default-200/50"
                )}
              >
                {label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
        <div className="flex items-center justify-center mt-8">
          <Image
            alt="Dog paw"
            src="/paw.svg"
            width={300}
            height={300}
            className="opacity-50"
          />
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
