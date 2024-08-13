"use client";
import { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { palanquin } from '../fonts';
import { FaBars, FaTimes } from 'react-icons/fa';

const links = [
  { href: '/', label: 'Etusivu' },
  { href: '/taikatassut', label: 'Taikatassut' },
  { href: '/halinallet', label: 'Halinallet' },
  { href: '/karvatassut', label: 'Karvatassut' },
  { href: '/info', label: 'Tietoa meistä' },
  { href: '/liity-mukaan', label: 'Liity mukaan' }
];

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent | TouchEvent) => {
  //     if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
  //       toggleModal();
  //     }
  //   };

  //   if (showModal) {
  //     document.addEventListener('mousedown', handleClickOutside);
  //     document.addEventListener('touchstart', handleClickOutside);
  //   } else {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //     document.removeEventListener('touchstart', handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //     document.removeEventListener('touchstart', handleClickOutside);
  //   };
  // }, [showModal, toggleModal]);

  return (
    <header className="relative w-full p-4 px-5 sm:px-10 flex items-center justify-between text-white bg-gray-800">
      <h4 className={`${palanquin.className} text-xl text-white`}>Varsinais-Suomen Kaverikoirat</h4>
      <div className="hidden lg:flex items-center space-y-4 lg:space-y-0 lg:space-x-6 w-full lg:w-auto lg:ml-8">
        {links.slice(0, 4).map(({ href, label }) => (
          <Link key={label} className="md:hover:text-orange-300" href={href}>{label}</Link>
        ))}
      </div>
      <div className="hidden lg:flex justify-center space-x-6 mt-4 lg:mt-0">
        {links.slice(4).map(({ href, label }) => (
          <Link key={label} className="md:hover:text-orange-300" href={href}>{label}</Link>
        ))}
      </div>
      <button onClick={toggleModal} className="lg:hidden h-4 w-4 flex items-center justify-center">
        <FaBars />
      </button>
      {showModal && (
        <div ref={modalRef} className="fixed top-24 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md bg-gray-800 bg-opacity-95 z-50 flex flex-col items-center justify-center p-4 rounded-lg">
          <button onClick={toggleModal} className="absolute top-2 right-2 p-2 text-white">
            <FaTimes />
          </button>
          {links.map(({ href, label }) => (
            <Link key={label} className="text-white text-2xl mb-4" href={href} onClick={toggleModal}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}