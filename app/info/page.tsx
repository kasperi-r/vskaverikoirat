export default function Info() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Tietoa kaverikoiratoiminnasta
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vapaaehtoistoimintaa, jossa koira tuo iloa ja läheisyyttä ihmisille
          </p>
        </div>

        {/* Principles Card */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg p-8 mb-8 border border-amber-100">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-amber-500 rounded-full p-3 flex-shrink-0">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Kaverikoiratoiminnan periaatteet
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Kaverikoira-koirakot toimivat samojen käytänteiden ja ohjeiden
                  mukaisesti. Kaverikoiraohjaajat vierailevat koiriensa kanssa
                  esimerkiksi lasten, kehitysvammaisten ja vanhusten luona
                  erilaisissa asumisyksiköissä, kouluissa, päiväkodeissa ja
                  tapahtumissa.
                </p>
                <p>
                  Toiminta on vapaaehtoista ja palkatonta, eikä koirakoille
                  makseta kulukorvauksia. Kaverikoiratoiminnassa huomioidaan
                  osapuolten turvallisuus ja mukavuus yhteistyössä alan
                  ammattilaisten kanssa. Kaverikoiratoiminnan lähtökohtana on,
                  että kohtaamistilanteesta nauttivat ja saavat hyvän mielen
                  kaikki osapuolet: asiakas, koiranohjaaja ja koira.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Lähde: kennelliitto.fi/koirat/kaverikoirat
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work Card */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-500 rounded-full p-3 flex-shrink-0">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Näin kaverikoirat toimivat
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Kaverikoira on Kenneliiton rekisteröimä tavaramerkki ja koko
                  Suomessa noudatetaan kaikessa toiminnassa Kenneliiton
                  sääntöjä.
                </p>
                <p>
                  Kaverikoirahuivi on merkki suoritetusta kurssista ja
                  perehdytyksestä ja sitä saa käyttää ainoastaan
                  kaverikoiravierailuilla, ohjaaja käyttää kennelliiton
                  nimikylttiä vierailuilla. Koirasta käytetään kutsumanimeä ja
                  ohjaajasta etunimeä.
                </p>
                <div className="bg-blue-50 rounded-xl p-6 my-6 border-l-4 border-blue-500">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                    Vierailun käytännöt:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>
                        Vierailut ilmoitetaan aina etukäteen ja raportoidaan
                        käynnin jälkeen Kennelliitolle
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>
                        Vierailulle osallistuu aina vähintään kaksi ohjaajaa ja
                        yksi koira
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>
                        Koira pidetään koko vierailun ajan kytkettynä ja
                        omistajansa ohjauksessa
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>
                        Koiralle ei saa antaa mitään syötävää vierailujen aikana
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>
                        Vierailupaikan henkilöstön edustaja on paikalla koko
                        ajan
                      </span>
                    </li>
                  </ul>
                </div>
                <p className="font-medium text-blue-900">
                  Näin toimien kaverikoiratoiminta on kaikille osapuolille
                  turvallista ja mukavaa ja meillä on voimassa Kennelliiton
                  vakuutukset.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Work Card */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg p-8 mb-8 border border-green-100">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-500 rounded-full p-3 flex-shrink-0">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Kaverikoiratoiminta on vapaaehtoistyötä
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Toimimme täysin ilman korvausta omien koiriemme kanssa
                  ilahduttaen ihmisiä. Emme ota vastaan palkkioita emmekä
                  mainosta toiminnassamme mitään. Ainoat mahdolliset
                  yhteistyökumppanimme ovat Kennelliiton viralliset
                  yhteistyötahot ja heiltäkään emme saa korvauksia
                  vapaaehtoistyöstämme.
                </p>
                <p>
                  Kaverikoira-nimikettä ei myöskään käytetä mainostamassa omaa
                  koiraa (esim. jalostuksessa) tai omaa kenneliä.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Card */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg p-8 border border-purple-100">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-purple-500 rounded-full p-3 flex-shrink-0">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Näin voit kysyä kaverikoiria vierailuille
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
                <p>
                  Jokainen kaverikoiraryhmä vastaa omien vierailukohteidensa
                  toteuttamisesta. Toisinaan olemme myös yleisötapahtumissa yms.
                  yhteisvierailuilla kaikin ryhmiemme kanssa.
                </p>
                <p className="font-medium text-purple-900">
                  Ota yhteyttä kaverikoiraryhmiin ja kysy
                  vierailumahdollisuutta:
                </p>
              </div>
              <div className="grid sm:grid-cols-1 gap-4 mb-6">
                <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow border border-purple-100">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Turun Taikatassut
                  </h3>
                  <a
                    href="mailto:kaverikoira.taikatassut@gmail.com"
                    className="text-purple-600 hover:text-purple-700 underline break-all"
                  >
                    kaverikoira.taikatassut@gmail.com
                  </a>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow border border-purple-100">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Turun (pohjoinen) Halinallet
                  </h3>
                  <a
                    href="mailto:kaverikoira.halinallet@gmail.com"
                    className="text-purple-600 hover:text-purple-700 underline break-all"
                  >
                    kaverikoira.halinallet@gmail.com
                  </a>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow border border-purple-100">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Salon Karvatassut
                  </h3>
                  <a
                    href="mailto:salon.karvatassut@gmail.com"
                    className="text-purple-600 hover:text-purple-700 underline break-all"
                  >
                    salon.karvatassut@gmail.com
                  </a>
                </div>
              </div>
              <p className="text-sm text-gray-600 bg-purple-50 rounded-lg p-4 border-l-4 border-purple-300">
                <strong>Huom:</strong> Tällä hetkellä pyyntöjä tulee ryhmille
                enemmän kuin vapaaehtoisemme pystyvät toteuttamaan, yritämme
                kuitenkin vastata pyyntöihin mahdollisuuksien mukaan.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
