import PhotoGallery from "../components/PhotoGallery";

const photos = [
  {
    src: "/karvatassut1.jpg",
    alt: "Karvatassut_kuva1",
    width: 500,
    height: 400,
  },
  {
    src: "/karvatassut2.jpg",
    alt: "Karvatassut_kuva2",
    width: 500,
    height: 600,
  },
  {
    src: "/karvatassut3.jpg",
    alt: "Karvatassut_kuva3",
    width: 600,
    height: 400,
  },
];

export default function Karvatassut() {
  return (
    <>
      <div className="p-4 text-lg leading-relaxed">
        <h1 className="text-3xl mb-8">Salon Karvatassut</h1>
        <p>Sivu päivittyy myöhemmin.</p>
        <p>Yhteydenotot: salon.karvatassut@gmail.com</p>
      </div>
      <div className="text-center">
        <PhotoGallery photos={photos} />
        <p className="mt-2">Salon iltatorilla 3.7.2025</p>
      </div>
    </>
  );
}
