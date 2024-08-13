"use client";
import { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { palanquin } from '../fonts';
import { FaBars, FaTimes } from 'react-icons/fa';
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

  const modalRef = useRef<HTMLDivElement>(null);

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full p-4 px-5 sm:px-10 flex items-center justify-between text-white bg-gray-800">
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
      <button onClick={toggleModal} className="lg:hidden h-4 w-4 flex items-center justify-center">
        <FaBars />
      </button>
      <div ref={modalRef}
        className={`fixed top-16 right-0 bg-gray-800 bg-opacity-95 z-50 flex flex-col items-center justify-center p-4 rounded-lg transition-transform duration-200 ${showModal ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button onClick={toggleModal} className="absolute top-2 right-2 p-2">
          <FaTimes />
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