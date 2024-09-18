"use client";
import { useState } from 'react';
import Link from 'next/link';
import { palanquin } from '../fonts';
import { usePathname } from 'next/navigation';

const links = [
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
    <header className="fixed z-50 top-0 w-full p-4 px-5 sm:px-10 flex items-center justify-between text-white bg-gray-800">
      <Link key={'home'} href={'/'} className={`${palanquin.className} text-xl`}>Varsinais-Suomen Kaverikoirat</Link>
      <div className="hidden lg:flex items-center space-y-4 lg:space-y-0 lg:space-x-6 w-full lg:w-auto lg:ml-8">
        {links.slice(0, 3).map(({ path, label }) => (
          <Link key={label} href={path} className={`${path === pathname && "text-orange-300 border-b-2 border-orange-300"} hover:text-orange-300 transition-all`}>{label}</Link>
        ))}
      </div>
      <div className="hidden lg:flex justify-center space-x-6 mt-4 lg:mt-0">
        {links.slice(3).map(({ path, label }) => (
          <Link key={label} href={path} className={`${path === pathname && "text-orange-300 border-b-2 border-orange-300"} hover:text-orange-300 transition-all`}>{label}</Link>
        ))}
      </div>
      <button onClick={toggleModal} className="lg:hidden p-2">
        <span className={`bg-white block transition-all duration-200 ease-out 
                    h-0.5 w-6 rounded-sm ${showModal ?
            'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`} >
        </span>
        <span className={`bg-white block transition-all duration-200 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${showModal ?
            'opacity-0' : 'opacity-100'
          }`} >
        </span>
        <span className={`bg-white block transition-all duration-200 ease-out 
                    h-0.5 w-6 rounded-sm ${showModal ?
            '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`} >
        </span>
      </button>
      <div className={`fixed top-0 left-0 w-full h-[400px] z-50 flex flex-col items-center justify-end transition-transform duration-200 ${showModal ? 'translate-y-10' : '-translate-y-full'}`}
        style={{ backgroundImage: 'url(/paw.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <div className="flex flex-col items-center pb-10 mb-8">
          {links.slice(0, 3).map(({ path, label }) => (
            <Link key={label} href={path} onClick={toggleModal} className={`${path === pathname && "text-orange-300 border-b-2 border-orange-300"} hover:text-orange-300 text-xl mb-1`}>
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className={`fixed bottom-0 left-0 w-full h-[200px] bg-gray-800 z-50 flex flex-col items-center justify-center transition-transform duration-200 ${showModal ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex flex-col items-center">
          {links.slice(3).map(({ path, label }) => (
            <Link key={label} href={path} onClick={toggleModal} className={`${path === pathname && "text-orange-300 border-b-2 border-orange-300"} hover:text-orange-300 text-xl mb-1`}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}