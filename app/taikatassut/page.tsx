import PhotoGallery from "../components/PhotoGallery";

const photos = [
  {
    src: "/taikatassut1.jpg",
    alt: "Taikatassut_kuva1",
    width: 1080,
    height: 712,
  },
  {
    src: "/taikatassut2.jpg",
    alt: "Taikatassut_kuva2",
    width: 615,
    height: 1054,
  },
  {
    src: "/taikatassut3.jpg",
    alt: "Taikatassut_kuva3",
    width: 1080,
    height: 1080,
  },
  {
    src: "/taikatassut5.jpg",
    alt: "Taikatassut_kuva5",
    width: 3468,
    height: 4624,
  },
  {
    src: "/taikatassut4.jpg",
    alt: "Taikatassut_kuva4",
    width: 1536,
    height: 2048,
  },
];

export default function Taikatassut() {
  return (
    <>
      <div className="p-4 text-lg leading-relaxed">
        <h1 className="text-3xl mb-8">Turun Taikatassut</h1>
        <p>
          Taikatassut -ryhmässä on tällä hetkellä noin 20 koirakkoa ja
          vakiokohteita meillä on 8 kuukaudessa. Lisäksi teemme
          yksittäisvierailuja.
        </p>
        <p>
          Vierailemme vanhusten, vammaisten, nuorten ja lasten luona erilaisissa
          asumispalveluyksiköissä pääosin Turun seudulla. Yksittäistapahtumiin
          kysyntää on paljon ja kaikkiin emme pysty vastaamaan, mutta parhaamme
          yritämme ja usein vierailu onnistuu aikatauluja suunnitellen ja
          muokaten.
        </p>
        <p>
          Toivomme, että elokuun kurssilta saamme paljon innokkaita uusia
          taikatassulaisia.
        </p>
        <p>Ryhmänvetäjänä toimii Heli-Maarit Makkonen ja minut tavoittaa:</p>
        <p>kaverikoira.taikatassut@gmail.com tai 050 5763081</p>
      </div>
      <PhotoGallery photos={photos} />
    </>
  );
}
