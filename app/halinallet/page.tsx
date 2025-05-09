import PhotoGallery from "../components/PhotoGallery";

const photos = [
  { src: "/halinallet1.jpg", alt: "Halinallet_kuva1", width: 843, height: 535 },
  { src: "/halinallet2.jpg", alt: "Halinallet_kuva2", width: 504, height: 540 },
  { src: "/halinallet6.jpg", alt: "Halinallet_kuva6", width: 526, height: 767 },
  { src: "/halinallet4.jpg", alt: "Halinallet_kuva4", width: 600, height: 384 },
  { src: "/halinallet9.jpg", alt: "Halinallet_kuva9", width: 745, height: 497 },
  { src: "/halinallet7.jpg", alt: "Halinallet_kuva7", width: 640, height: 531 },
];

export default function Halinallet() {
  return (
    <>
      <div className="p-4 text-lg leading-relaxed">
        <h1 className="text-3xl mb-8">Turun (pohjoinen) Halinallet</h1>
        <p>
          Halinallet-ryhmässä on tällä hetkellä enemmän tai vähemmän aktiivisia
          koirakoita 28. Osa käy vierailuilla ahkerasti, osa muutaman kerran
          vuodessa.
        </p>
        <p>
          Halinallet-ryhmän toimialuetta on pääsääntöisesti Turun pohjoinen
          puoli. Käymme vierailuilla Turun lisäksi esim. Naantalissa,
          Uudessakaupungissa ja Laitilassa. Vierailukohteina on hoivakodit,
          erilaiset palveluyksiköt (kehitysvammaiset, päihdekuntoutujat),
          päiväkodit ja erilaiset yleisötapahtumat, mihin meitä vain pyydetään.
          Vakiovierailukohteita on kuusi joka kuukausi ja lisäksi teemme paljon
          yksittäisiä vierailuja.
        </p>
        <p>
          Tällä hetkellä vierailupyyntöjä tulee enemmän kuin pystymme
          vapaaehtoistemme kanssa vastaamaan. Toivomme seuraavalta
          kaverikoirakurssilta paljon uusia innokkaita Halinalleja mukaan
          ilahduttamaan ihmisiä.
        </p>
        <p>
          Ryhmän vetäjänä toimii Teija Heiskanen. Minut tavoittaa sähköpostitse
          kaverikoira.halinallet@gmail.com ja numerosta <br /> 044 596 1965.
        </p>
      </div>
      <PhotoGallery photos={photos} />
    </>
  );
}
