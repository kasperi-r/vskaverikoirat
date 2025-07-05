"use client";

import Image from "next/image";
import { useScrollEffect } from "../lib/hooks/useScrollEffect";
import { motion } from "motion/react";
import { ImagesSlider } from "../../components/ui/images-slider";

const images = ["/4_koiraa.jpg", "/4_koiraa_2.jpg"];

export function Hero() {
  const { scrollY, isMobile } = useScrollEffect();

  // Calculate transform based on scroll position, but only for desktop
  const translateY = isMobile ? 0 : Math.min(scrollY * 0.5, 300);

  // No fade on mobile
  const opacity = isMobile ? 1 : Math.max(1 - scrollY / 600, 0);

  return (
    <section
      className="w-full py-8 md:py-16 lg:py-20 xl:py-24 relative will-change-transform"
      style={{
        transform: isMobile ? "none" : `translateY(${translateY}px)`,
        opacity: opacity,
        transition: isMobile
          ? "none"
          : "transform 0.1s ease-out, opacity 0.1s ease-out",
        zIndex: 0,
      }}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-12">
          <motion.div
            className="w-full max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[350px] w-full overflow-hidden rounded-2xl bg-muted md:h-[450px] shadow-xl">
              <ImagesSlider images={images}>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -80,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="z-50 flex flex-col justify-center items-center"
                ></motion.div>
              </ImagesSlider>
            </div>
          </motion.div>

          <motion.div
            className="max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Varsinais-Suomen Kennelpiirin kaverikoiratoiminta
            </h1>
            <p className="text-gray-700 md:text-xl leading-relaxed">
              Kaverikoiratoiminta on vapaaehtoistoimintaa, jossa koira tuo iloa,
              elämyksiä ja läheisyyttä ihmisille, joilla ei ole omaa koiraa.
              Toiminta on alkanut Varsinais-Suomessa 2001 ja tällä hetkellä
              toimintaa on koko Suomessa ja mukana on noin 1500 kaverikoirakkoa.
              Näiltä sivuilta löydät Varsinais-Suomen kaverikoiraryhmien omat
              sivut.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
