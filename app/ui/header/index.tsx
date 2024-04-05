import Link from 'next/link';
import { palanquin } from '../fonts';

export default function Header() {

  const links = [
    { href: '/', label: 'Etusivu' },
    { href: '/taikatassut', label: 'Turun Taikatassut' },
    { href: '/halinallet', label: 'Pohjoisen Turun Halinallet' },
    { href: '/karvatassut', label: 'Salon Karvatassut' },
  ];

  return (
    <header className="relative w-full p-4 px-5 sm:px-10 flex items-center justify-between bg-gray-800">
      <h4 className={`${palanquin.className} text-xl text-white`}>Varsinais-Suomen Kaverikoirat</h4>
      <nav className="absolute left-1/2 transform -translate-x-1/2 flex justify-center text-white">
        {links.map(({ href, label }) => (
          <Link key={label} className="md:hover:text-orange-300 mx-4" href={href}>{label}</Link>
        ))}
      </nav>
    </header>
  );
}