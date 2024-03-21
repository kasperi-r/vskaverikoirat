import Link from 'next/link';

export default function Header() {

  const links = [
    { href: '/', label: 'Etusivu' },
    { href: '/taikatassut', label: 'Turun Taikatassut' },
    { href: '/halinallet', label: 'Pohjoisen Turun Halinallet' },
    { href: '/karvatassut', label: 'Salon Karvatassut' },
  ];

  return (
    <header className="w-full p-4 px-10 flex items-center justify-between border-2 border-b-orange-400">
      <h4 className="flex-grow">Varsinais-Suomen Kaverikoirat</h4>
      <nav className="flex-grow text-center">
        <ul className="font-medium flex justify-center">
          {links.map(({ href, label }) => (
            <li key={label} className="md:hover:text-orange-400 mx-4">
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>

    </header>
  );
}