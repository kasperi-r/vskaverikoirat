import Image from 'next/image';
import karvatassut from '../../public/karvatassut.jpg';

export default function Karvatassut() {
  return (
    <>
      <div className="p-4 font-light leading-relaxed">
        <h1 className="text-3xl mb-8">Salon Karvatassut</h1>
        <p>Sivu päivittyy myöhemmin.</p>
        <p>Yhteydenotot: salon.karvatassut@gmail.com</p>
      </div>
      <div className="text-center">
        <Image src={karvatassut} alt='Karvatassut' />
        <p className="mt-2">Salon iltatorilla 8.8.2024 kaverikoiratoimintaa esittelemässä</p>
      </div>
    </>
  );
}