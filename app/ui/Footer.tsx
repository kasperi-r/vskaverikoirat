// import Image from "next/image";

// const Footer = () => {
//   return (
//     <footer>
//       <div className="flex flex-col mx-auto px-6 py-4 max-w-screen-lg sm:flex-row items-center justify-between">
//         <p>&copy; 2025 Varsinais-Suomen Kaverikoirat</p>
//         <Image
//           src="/kaverikoira_pysty_orig_web.jpg"
//           alt="Kennelliiton Kaverikoira-logo"
//           width={385}
//           height={210}
//         />
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import { Image, Link } from "@heroui/react";

const Footer = () => {
  const quickLinks = [
    { label: "Taikatassut", href: "/taikatassut" },
    { label: "Halinallet", href: "/halinallet" },
    { label: "Karvatassut", href: "/karvatassut" },
    { label: "Tietoa meistä", href: "/info" },
    { label: "Liity mukaan", href: "/liity-mukaan" },
  ];

  return (
    <footer className="py-6 border-t-2 border-amber-300/60 shadow-inner">
      <div className="container mx-auto px-6 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Copyright section */}
          <div className="text-center md:text-left">
            <p className="text-amber-700/70">
              &copy; {new Date().getFullYear()} Varsinais-Suomen Kaverikoirat
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-amber-700/80 hover:text-amber-600 transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <div className="flex justify-center md:justify-end">
            <div className="bg-white p-2 rounded-lg">
              <Image
                src="/kaverikoira_pysty_orig_web.jpg"
                alt="Kennelliiton Kaverikoira-logo"
                width={300}
                height={160}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
