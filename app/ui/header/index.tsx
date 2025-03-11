"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import NextImage from "next/image";
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
  Button,
  Divider,
  Image,
} from "@heroui/react";
import { cn } from "@heroui/react";
import { palanquin } from "../fonts";

// const menuItems = [
//   "About",
//   "Blog",
//   "Customers",
//   "Pricing",
//   "Enterprise",
//   "Changelog",
//   "Documentation",
//   "Contact Us",
// ];

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
      {...props}
      classNames={{
        base: cn("border-default-100", {
          "bg-default-200/50 dark:bg-default-100/50": isMenuOpen,
        }),
        wrapper: "w-full justify-center",
        menu: "items-center mx-auto mt-8 max-h-[80vh] max-w-[80vw] rounded-large border-small border-default-200/20 bg-background/60 py-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50",
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-2",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-orange-300",
        ],
      }}
      height="60px"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Left Content */}
      <NavbarBrand>
        {/* <div className="rounded-full bg-foreground text-background"></div>
        <span className="ml-2 text-small font-medium">ACME</span> */}
        <Link
          key={"home"}
          href={"/"}
          className={`${palanquin.className} ml-2`}
          color="foreground"
          size="lg"
        >
          Varsinais-Suomen Kaverikoirat
        </Link>
      </NavbarBrand>

      {/* Center Content */}
      <NavbarContent
        className="hidden h-11 gap-4 rounded-full border-small border-default-200/20 bg-background/60 px-4 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50 md:flex"
        justify="center"
      >
        {centerLinks.map(({ path, label }) => (
          <NavbarItem key={label} isActive={pathname === path}>
            <Link color="foreground" href={path} size="md">
              {label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right Content */}
      <NavbarContent className="hidden md:flex" justify="end">
        {rightLinks.map(({ path, label }) => (
          <NavbarItem key={label} isActive={pathname === path}>
            <Link color="foreground" href={path} size="md">
              {label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden"
      />

      <NavbarMenu
        motionProps={{
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: {
            ease: "easeInOut",
            duration: 0.2,
          },
        }}
      >
        {/* <NavbarMenuItem>
          <Button fullWidth as={Link} href="/#" variant="faded">
            Sign In
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem className="mb-4">
          <Button
            fullWidth
            as={Link}
            className="bg-foreground text-background"
            href="/#"
          >
            Get Started
          </Button>
        </NavbarMenuItem> */}
        {/* {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="mb-2 w-full text-default-500" href="#" size="md">
              {item}
            </Link>
            {index < menuItems.length - 1 && <Divider className="opacity-50" />}
          </NavbarMenuItem>
        ))} */}
        {centerLinks.map(({ path, label }) => (
          <NavbarMenuItem key={label} isActive={pathname === path}>
            <Link color="foreground" href={path} size="md">
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
        <Divider className="opacity-80" />
        {rightLinks.map(({ path, label }) => (
          <NavbarMenuItem key={label} isActive={pathname === path}>
            <Link color="foreground" href={path} size="md">
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
        <div className="flex items-center justify-center flex-grow">
          <Image
            alt="Dog paw"
            as={NextImage}
            src="/paw.svg"
            width={400}
            height={400}
          />
        </div>
      </NavbarMenu>
    </Navbar>
  );
}

// "use client";
// import { useState } from 'react';
// import Link from 'next/link';
// import { palanquin } from '../fonts';
// import { usePathname } from 'next/navigation';

// const links = [
//   { path: '/taikatassut', label: 'Taikatassut' },
//   { path: '/halinallet', label: 'Halinallet' },
//   { path: '/karvatassut', label: 'Karvatassut' },
//   { path: '/info', label: 'Tietoa meistä' },
//   { path: '/liity-mukaan', label: 'Liity mukaan' }
// ];

// export default function Header() {
//   const [showModal, setShowModal] = useState(false);

//   const pathname = usePathname();

//   const toggleModal = () => setShowModal(!showModal);

//   return (
//     <header className="fixed z-50 top-0 w-full p-4 px-5 sm:px-10 flex items-center justify-between text-white bg-gray-800">
//       <Link key={'home'} href={'/'} className={`${palanquin.className} text-xl`}>Varsinais-Suomen Kaverikoirat</Link>
//       <div className="hidden lg:flex items-center space-y-4 lg:space-y-0 lg:space-x-6 w-full lg:w-auto lg:ml-8">
//         {links.slice(0, 3).map(({ path, label }) => (
//           <Link key={label} href={path} className={`${path === pathname && "text-orange-300 border-b-2 border-orange-300"} hover:text-orange-300 transition-all`}>{label}</Link>
//         ))}
//       </div>
//       <div className="hidden lg:flex justify-center space-x-6 mt-4 lg:mt-0">
//         {links.slice(3).map(({ path, label }) => (
//           <Link key={label} href={path} className={`${path === pathname && "text-orange-300 border-b-2 border-orange-300"} hover:text-orange-300 transition-all`}>{label}</Link>
//         ))}
//       </div>
//       <button onClick={toggleModal} className="lg:hidden p-2">
//         <span className={`bg-white block transition-all duration-200 ease-out
//                     h-0.5 w-6 rounded-sm ${showModal ?
//             'rotate-45 translate-y-1' : '-translate-y-0.5'
//           }`} >
//         </span>
//         <span className={`bg-white block transition-all duration-200 ease-out
//                     h-0.5 w-6 rounded-sm my-0.5 ${showModal ?
//             'opacity-0' : 'opacity-100'
//           }`} >
//         </span>
//         <span className={`bg-white block transition-all duration-200 ease-out
//                     h-0.5 w-6 rounded-sm ${showModal ?
//             '-rotate-45 -translate-y-1' : 'translate-y-0.5'
//           }`} >
//         </span>
//       </button>
//       <div className={`fixed top-0 left-0 w-full h-[400px] z-50 flex flex-col items-center justify-end transition-transform duration-200 ${showModal ? 'translate-y-10' : '-translate-y-full'}`}
//         style={{ backgroundImage: 'url(/paw.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
//         <div className="flex flex-col items-center pb-10 mb-8">
//           {links.slice(0, 3).map(({ path, label }) => (
//             <Link key={label} href={path} onClick={toggleModal} className={`${path === pathname && "text-orange-300 border-b-2 border-orange-300"} hover:text-orange-300 text-xl mb-1`}>
//               {label}
//             </Link>
//           ))}
//         </div>
//       </div>
//       <div className={`fixed bottom-0 left-0 w-full h-[200px] bg-gray-800 z-50 flex flex-col items-center justify-center transition-transform duration-200 ${showModal ? 'translate-y-0' : 'translate-y-full'}`}>
//         <div className="flex flex-col items-center">
//           {links.slice(3).map(({ path, label }) => (
//             <Link key={label} href={path} onClick={toggleModal} className={`${path === pathname && "text-orange-300 border-b-2 border-orange-300"} hover:text-orange-300 text-xl mb-1`}>
//               {label}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </header>
//   );
// }
