import Image from 'next/image';

export default function Karvatassut() {
  return (
    <>
      <div className="p-4 text-lg leading-relaxed">
        <h1 className="text-3xl mb-8">Salon Karvatassut</h1>
        <p>Sivu päivittyy myöhemmin.</p>
        <p>Yhteydenotot: salon.karvatassut@gmail.com</p>
      </div>
      <div className="text-center">
        <Image src="/karvatassut.jpg" alt="Karvatassut" width={1024} height={768} />
        <p className="mt-2">Salon iltatorilla 8.8.2024 kaverikoiratoimintaa esittelemässä</p>
      </div>
    </>
  );
}