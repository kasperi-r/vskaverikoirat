import Image from 'next/image';
import halinallet1 from '../../public/halinallet1.jpg';
import halinallet2 from '../../public/halinallet2.jpg';
import halinallet4 from '../../public/halinallet4.jpg';
import halinallet6 from '../../public/halinallet6.jpg';
import halinallet7 from '../../public/halinallet7.jpg';
import halinallet9 from '../../public/halinallet9.jpg';

export default function Halinallet() {
  return (
    <>
      <div className="p-4 font-light leading-relaxed">
        <h1 className="text-3xl mb-8">Turun (pohjoinen) Halinallet</h1>
        <p>Halinallet-ryhmässä on tällä hetkellä enemmän tai vähemmän aktiivisia koirakoita 28. Osa käy vierailuilla ahkerasti, osa muutaman kerran vuodessa.</p>
        <p>Halinallet-ryhmän toimialuetta on pääsääntöisesti Turun pohjoinen puoli. Käymme vierailuilla Turun lisäksi esim. Naantalissa, Uudessakaupungissa ja Laitilassa. Vierailukohteina on hoivakodit, erilaiset palveluyksiköt (kehitysvammaiset, päihdekuntoutujat), päiväkodit ja erilaiset yleisötapahtumat, mihin meitä vain pyydetään. Vakiovierailukohteita on kuusi joka kuukausi ja lisäksi teemme paljon yksittäisiä vierailuja.</p>
        <p>Tällä hetkellä vierailupyyntöjä tulee enemmän kuin pystymme vapaaehtoistemme kanssa vastaamaan. Toivomme seuraavalta kaverikoirakurssilta paljon uusia innokkaita Halinalleja mukaan ilahduttamaan ihmisiä.</p>
        <p>Ryhmän vetäjänä toimii Teija Heiskanen. Minut tavoittaa sähköpostitse kaverikoira.halinallet@gmail.com ja numerosta <br /> 044 596 1965.</p>
      </div>
      <div className="columns-2 gap-4 mb-8">
        <Image src={halinallet1} alt='Halinallet' className="mb-4" />
        <Image src={halinallet2} alt='Halinallet' className="mb-4" />
        <Image src={halinallet6} alt='Halinallet' className="mb-4" />
        <Image src={halinallet4} alt='Halinallet' className="mb-4" />
        <Image src={halinallet9} alt='Halinallet' className="mb-4" />
        <Image src={halinallet7} alt='Halinallet' className="mb-4" />
      </div>
    </>
  );
}