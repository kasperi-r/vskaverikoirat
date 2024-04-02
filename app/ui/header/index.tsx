import Link from 'next/link';

export default function Header() {

  const links = [
    { href: '/', label: 'Etusivu' },
    { href: '/taikatassut', label: 'Turun Taikatassut' },
    { href: '/halinallet', label: 'Pohjoisen Turun Halinallet' },
    { href: '/karvatassut', label: 'Salon Karvatassut' },
  ];

  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between border-0 border-b-orange-400">
      <h4 className="text-xl">Varsinais-Suomen Kaverikoirat</h4>
      <nav className="w-max sm:flex fixed right-1/2 translate-x-1/2">
        {links.map(({ href, label }) => (
          <Link key={label} className="md:hover:text-orange-400 mx-4" href={href}>{label}</Link>
        ))}
      </nav>

    </header>
  );
}