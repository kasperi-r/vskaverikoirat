"use client";
import { useState } from 'react';
import Link from 'next/link';
import { palanquin } from '../fonts';
import { usePathname } from 'next/navigation';

const links = [
  { path: '/', label: 'Etusivu' },
  { path: '/taikatassut', label: 'Taikatassut' },
  { path: '/halinallet', label: 'Halinallet' },
  { path: '/karvatassut', label: 'Karvatassut' },
  { path: '/info', label: 'Tietoa meistä' },
  { path: '/liity-mukaan', label: 'Liity mukaan' }
];

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const pathname = usePathname();

  const toggleModal = () => setShowModal(!showModal);

  return (
    <header className="fixed top-0 w-full p-4 px-5 sm:px-10 flex items-center justify-between text-white bg-gray-800">
      <h4 className={`${palanquin.className} text-xl`}>Varsinais-Suomen Kaverikoirat</h4>
      <div className="hidden lg:flex items-center space-y-4 lg:space-y-0 lg:space-x-6 w-full lg:w-auto lg:ml-8">
        {links.slice(0, 4).map(({ path, label }) => (
          <Link key={label} href={path} className={`${path === pathname && "text-orange-300 border-b-2 border-orange-300"} hover:text-orange-300 transition-all`}>{label}</Link>
        ))}
      </div>
      <div className="hidden lg:flex justify-center space-x-6 mt-4 lg:mt-0">
        {links.slice(4).map(({ path, label }) => (
          <Link key={label} href={path} className={`${path === pathname && "text-orange-300 border-b-2 border-orange-300"} hover:text-orange-300 transition-all`}>{label}</Link>
        ))}
      </div>
      <button onClick={toggleModal}
        className="lg:hidden">
        <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      <div className={`fixed top-20 right-0 bg-gray-800 bg-opacity-95 z-50 flex flex-col items-center justify-center py-4 px-8 transition-transform duration-200 ${showModal ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={toggleModal} className="absolute top-1 right-1 p-2">
          <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {links.map(({ path, label }) => (
          <Link key={label} href={path} onClick={toggleModal} className={`${path === pathname && "text-orange-300 border-b-2 border-orange-300"} hover:text-orange-300 text-2xl mb-4`}>
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
}