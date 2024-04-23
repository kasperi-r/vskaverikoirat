import Link from 'next/link';
import { palanquin } from '../fonts';

export default function Header() {

  const links = [
    { href: '/', label: 'Etusivu' },
    { href: '/taikatassut', label: 'Taikatassut' },
    { href: '/halinallet', label: 'Halinallet' },
    { href: '/karvatassut', label: 'Karvatassut' },
    { href: '/info', label: 'Info' },
    { href: '/liity-mukaan', label: 'Liity mukaan' }
  ];

  return (
    <header className="relative w-full p-4 px-5 sm:px-10 flex items-center justify-between text-white bg-gray-800">
      <h4 className={`${palanquin.className} text-xl text-white`}>Varsinais-Suomen Kaverikoirat</h4>
      <nav className="">
        <div className="absolute left-1/2 transform -translate-x-1/2 space-x-6">
          {links.slice(0, 4).map(({ href, label }) => (
            <Link key={label} className="md:hover:text-orange-300" href={href}>{label}</Link>
          ))}
        </div>
        <div className="flex justify-center space-x-4">
          {links.slice(4).map(({ href, label }) => (
            <Link key={label} className="md:hover:text-orange-300" href={href}>{label}</Link>
          ))}
        </div>
      </nav>
    </header>
  );
}