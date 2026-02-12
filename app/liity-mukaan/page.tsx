export default function LiityMukaan() {
  return (
    <div className="py-4 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Liity mukaan toimintaan
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Aloita matka kaverikoirakot-ohjaajaksi koulutuksen kautta
          </p>
        </div>

        {/* Course Info Card */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-amber-100">
          <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-amber-500 rounded-full p-2 sm:p-3 flex-shrink-0">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
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
            <div className="flex-1 min-w-0">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Näin pääset mukaan
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>
                  Pääset mukaan toimintaan kurssin käytyäsi. Kaverikoirakurssi
                  voidaan järjestää enintään kerran vuodessa samassa paikassa.
                </p>
                <div className="bg-amber-100 rounded-lg sm:rounded-xl p-4 sm:p-6 my-4 sm:my-6 border-l-4 border-amber-500">
                  <p className="font-medium text-gray-900 mb-2 text-sm sm:text-base">
                    Kurssille voi ilmoittautua osoitteeseen:
                  </p>
                  <a
                    href="mailto:vskaverikoirat@gmail.com"
                    className="text-amber-700 hover:text-amber-800 font-semibold underline text-base sm:text-lg break-all"
                  >
                    vskaverikoirat@gmail.com
                  </a>
                </div>
                <p className="font-medium text-amber-900">
                  Ennen koulutukseen hakemista tutustu kaverikoiratoiminnan
                  ohjeisiin ja mieti pystytkö sitoutumaan vapaaehtoistoimintaan.
                  Toiminta ei ole tarkoitettu koiran kouluttamiseen tai
                  sosiaalistamiseen tai meriittien keräämiseen koiralle, vaan
                  vapaaehtoistoiminnan toteuttamiseen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Card */}
        <section className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-gray-100">
          <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-blue-500 rounded-full p-2 sm:p-3 flex-shrink-0">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
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
            <div className="flex-1 min-w-0">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Kaverikoiran ja ohjaajan edellytykset
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                <div className="bg-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6 my-4 sm:my-6 border-l-4 border-blue-500">
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="text-blue-500 mt-1 text-lg sm:text-xl flex-shrink-0">•</span>
                      <span>
                        Ohjaaja täysi-ikäinen, koira kurssin aikaan vähintään
                        2-vuotias
                      </span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="text-blue-500 mt-1 text-lg sm:text-xl flex-shrink-0">•</span>
                      <span>
                        Ohjaaja kennelliiton jäsen ja koira kennelliiton
                        rekisterissä (roturekisteri tai FIX-rekisteri)
                      </span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="text-blue-500 mt-1 text-lg sm:text-xl flex-shrink-0">•</span>
                      <span>
                        Ohjaaja on koiran omistaja ja asuu koiran kanssa samassa
                        taloudessa
                      </span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="text-blue-500 mt-1 text-lg sm:text-xl flex-shrink-0">•</span>
                      <span>
                        Koira on perusterve ilman pysyvää lääkitystä mihinkään
                        sairauteen
                      </span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="text-blue-500 mt-1 text-lg sm:text-xl flex-shrink-0">•</span>
                      <span>
                        Koiran rokotukset oltava voimassa (koko
                        kaverikoiratoiminnan ajan)
                      </span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="text-blue-500 mt-1 text-lg sm:text-xl flex-shrink-0">•</span>
                      <span>
                        Koira on ystävällinen ihmisille ja tulee toimeen muiden
                        koirien kanssa kohtaamistilanteissa
                      </span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="text-blue-500 mt-1 text-lg sm:text-xl flex-shrink-0">•</span>
                      <span>
                        <strong>Kodinvaihtaja:</strong> Koiran on ollut oltava yli 1
                        vuosi nykyisellä omistajalla ja koiran historia pitää
                        olla syntymästä asti tiedossa. Siksi valitettavasti ns.
                        rescue-koirat eivät voi tulla kennelliiton
                        kaverikoiratoimintaan.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kennelliitto Info Card */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-green-100">
          <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-green-500 rounded-full p-2 sm:p-3 flex-shrink-0">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Kurssitiedot ja ilmoittautuminen
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>
                  Tietoja kurssien ajankohdista ja ilmoittautumisosoitteen saat
                  Kennelliiton sivuilta:
                </p>
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-sm border border-green-200">
                  <a
                    href="https://www.kennelliitto.fi/koirat/kaverikoirat/kaverikoirakurssit-ja-tapahtumat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 hover:text-green-800 font-semibold underline break-words text-sm sm:text-base lg:text-lg"
                  >
                    kennelliitto.fi/koirat/kaverikoirat/
                    <br className="sm:hidden" />
                    kaverikoirakurssit-ja-tapahtumat
                  </a>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 bg-green-100 rounded-lg p-3 sm:p-4 border-l-4 border-green-500 mt-4">
                  <strong>Vinkki:</strong> Kannattaa liittyä Kennelliiton
                  jäseneksi ennen kurssin alkua, jotta voit täyttää kaikki
                  osallistumisvaatimukset.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 