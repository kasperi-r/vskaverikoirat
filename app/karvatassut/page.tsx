import Image from "next/image";

export default function Karvatassut() {
  return (
    <>
      <div className="p-4 text-lg leading-relaxed">
        <h1 className="text-3xl mb-8">Salon Karvatassut</h1>
        <p>Sivu päivittyy myöhemmin.</p>
        <p>Yhteydenotot: salon.karvatassut@gmail.com</p>
      </div>
      <div className="text-center">
        <div
          style={{
            border: "12px solid white",
            borderRadius: "4px",
            boxShadow:
              "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
          }}
        >
          <Image
            src="/karvatassut.jpg"
            alt="Karvatassut"
            width={1024}
            height={768}
          />
        </div>
        <p className="mt-2">
          Salon iltatorilla 8.8.2024 kaverikoiratoimintaa esittelemässä
        </p>
      </div>
    </>
  );
}
