import InfoComponent from "../ui/InfoComponent";

export default function Info() {
  return (
    <>
      <InfoComponent
        title="Kaverikoiratoiminnan periaatteet"
        body={[
          "Kaverikoira-koirakot toimivat samojen käytänteiden ja ohjeiden mukaisesti. Kaverikoiraohjaajat vierailevat koiriensa kanssa esimerkiksi lasten, kehitysvammaisten ja vanhusten luona erilaisissa asumisyksiköissä, kouluissa, päiväkodeissa ja tapahtumissa.",
          "Toiminta on vapaaehtoista ja palkatonta, eikä koirakoille makseta kulukorvauksia. Kaverikoiratoiminnassa huomioidaan osapuolten turvallisuus ja mukavuus yhteistyössä alan ammattilaisten kanssa. Kaverikoiratoiminnan lähtökohtana on, että kohtaamistilanteesta nauttivat ja saavat hyvän mielen kaikki osapuolet: asiakas, koiranohjaaja ja koira.",
          "Lähde: Kennelliitto.fi/koirat/kaverikoirat"
        ]}
      />
      <div className="mt-12">
        <InfoComponent
          title="Näin kaverikoirat toimivat"
          body={["Kaverikoira on Kenneliiton rekisteröimä tavaramerkki ja koko Suomessa noudatetaan kaikessa toiminnassa Kenneliiton sääntöjä.",
            "Kaverikoirahuivi on merkki suoritetusta kurssista ja perehdytyksestä ja sitä saa käyttää ainoastaan kaverikoiravierailuilla, ohjaaja käyttää kennelliiton nimikylttiä vierailuilla. Koirasta käytetään kutsumanimeä ja ohjaajasta etunimeä.",
            "Kaverikoiravierailut ilmoitetaan aina etukäteen ja raportoidaan käynnin jälkeen Kennelliitolle. Vierailulle osallistuu aina vähintään kaksi ohjaajaa ja yksi koira. Koira pidetään koko vierailun ajan kytkettynä ja omistajansa ohjauksessa. Koiralle ei saa antaa mitään syötävää vierailujen aikana. Koko kaverikoiravierailun ajan samassa tilassa on paikalla myös vierailupaikan henkilöstön edustaja.",
            "Näin toimien kaverikoiratoiminta on kaikille osapuolille turvallista ja mukavaa ja meillä on voimassa Kennelliiton vakuutukset."
          ]}
        />
      </div>
    </>
  );
}