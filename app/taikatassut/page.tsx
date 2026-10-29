import PhotoGallery from "../components/PhotoGallery";

const photos = [
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
  { src: "/taikatassut6.jpg", alt: "Taikatassut_kuva6", width: 843, height: 535 },
  { src: "/taikatassut7.jpg", alt: "Taikatassut_kuva7", width: 526, height: 767 },
];

export default function Taikatassut() {
  return (
    <>
      <div className="p-4 text-lg leading-relaxed">
        <h1 className="text-3xl mb-8">Turun Taikatassut</h1>
        <p>
          Lokakuussa 2026 Turun kaverikoiraryhmät yhdistyivät yhdeksi
          Taikatassut-ryhmäksi.
        </p>
        <p>
          Taikatassut -ryhmässä on tällä hetkellä noin 50 koirakkoa ja
          vakiokohteita meillä on 14 kuukaudessa. Lisäksi teemme
          yksittäisvierailuja erilaisiin tapahtumiin.
        </p>
        <p>
          Vierailemme erityisryhmien asumispalveluyksiköissä ja ikääntyneiden
          palveluasumista tarjoavissa kohteissa sekä lasten ja nuorten tuen
          yksiköissä Varsinais-Suomessa, pääosin Turun seudulla ja
          Vakka-Suomessa.
        </p>
        <p>
          Yksittäistapahtumiin kysyntää on paljon ja kaikkiin emme pysty
          vastaamaan, mutta parhaamme yritämme ja usein vierailu onnistuu
          aikatauluja suunnitellen ja muokaten.
        </p>
        <p>Ryhmänvetäjänä toimii Heli-Maarit Makkonen ja minut tavoittaa:</p>
        <p>kaverikoira.taikatassut@gmail.com tai 050 5763081</p>
      </div>
      <PhotoGallery photos={photos} />
    </>
  );
}
