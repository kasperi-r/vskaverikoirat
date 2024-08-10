import Link from 'next/link';
import { palanquin } from '../fonts';

export default function Header() {

  const links = [
    { href: '/', label: 'Etusivu' },
    { href: '/taikatassut', label: 'Taikatassut' },
    { href: '/halinallet', label: 'Halinallet' },
    { href: '/karvatassut', label: 'Karvatassut' },
    { href: '/info', label: 'Tietoa meistä' },
    { href: '/liity-mukaan', label: 'Liity mukaan' }
  ];

  return (
    <header className="relative w-full p-4 px-5 sm:px-10 flex flex-col md:flex-row items-center justify-between text-white bg-gray-800">
      <h4 className={`${palanquin.className} text-xl text-white mb-4 md:mb-0`}>Varsinais-Suomen Kaverikoirat</h4>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 w-full md:w-auto md:ml-8">
        {links.slice(0, 4).map(({ href, label }) => (
          <Link key={label} className="md:hover:text-orange-300" href={href}>{label}</Link>
        ))}
      </div>
      <div className="flex justify-center space-x-8 mt-4 md:mt-0">
        {links.slice(4).map(({ href, label }) => (
          <Link key={label} className="md:hover:text-orange-300" href={href}>{label}</Link>
        ))}
      </div>
    </header>
  );
}