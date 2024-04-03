import Link from 'next/link';

export default function Header() {

  const links = [
    { href: '/', label: 'Etusivu' },
    { href: '/taikatassut', label: 'Turun Taikatassut' },
    { href: '/halinallet', label: 'Pohjoisen Turun Halinallet' },
    { href: '/karvatassut', label: 'Salon Karvatassut' },
  ];

  return (
    <header className="relative w-full p-4 px-5 sm:px-10 flex items-center justify-between bg-gray-300">
      <h4 className="text-xl">Varsinais-Suomen Kaverikoirat</h4>
      <nav className="absolute left-1/2 transform -translate-x-1/2 flex justify-center">
        {links.map(({ href, label }) => (
          <Link key={label} className="md:hover:text-orange-400 mx-4" href={href}>{label}</Link>
        ))}
      </nav>
    </header>
  );
}