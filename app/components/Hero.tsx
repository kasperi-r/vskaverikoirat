"use client"

import Image from "next/image";
import { useScrollEffect } from "../lib/hooks/useScrollEffect";

export function Hero() {
  const { scrollY, isMobile } = useScrollEffect()

  // Calculate transform based on scroll position
  // Use different parameters for mobile vs desktop
  const translateY = isMobile
    ? Math.min(scrollY * 0.3, 200) // Gentler effect on mobile
    : Math.min(scrollY * 0.5, 300) // Stronger effect on desktop

  const opacity = Math.max(1 - scrollY / (isMobile ? 300 : 500), 0) // Fade out faster on mobile

  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative will-change-transform"
      style={{
        transform: `translateY(${translateY}px)`,
        opacity: opacity,
        transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
        zIndex: 0,
      }}
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl text-gray-700 dark:text-foreground font-bold text-center sm:text-4xl xl:text-5xl/none mb-4 leading-snug break-words">
              Varsinais-Suomen Kennelpiirin kaverikoiratoiminta
              </h1>
              <p className="max-w-[600px] text-foreground md:text-xl">
                Kaverikoiratoiminta on vapaaehtoistoimintaa, jossa koira tuo iloa,
                elämyksiä ja läheisyyttä ihmisille, joilla ei ole omaa koiraa.
                Toiminta on alkanut Varsinais-Suomessa 2001 ja tällä hetkellä
                toimintaa on koko Suomessa ja mukana on noin 1500 kaverikoirakkoa.
                Näiltä sivuilta löydät Varsinais-Suomen kaverikoiraryhmien omat
                sivut.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-muted md:h-[450px]">
                <Image
                  src="/4_koiraa.jpg"
                  alt="Neljä koiraa"
                  width={2448}
                  height={1636}
                  className="rounded-md shadow-lg mb-8"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
