"use client";

import { useState, useEffect } from "react";
import ImageZoom from "./ImageZoom";
import useEmblaCarousel from "embla-carousel-react";

interface GalleryProps {
  images: { src: string; alt: string }[];
}

export default function Gallery({ images }: GalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Update selected index on slide change
  useEffect(() => {
    if (!emblaApi) return undefined;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="overflow-hidden relative" ref={emblaRef}>
      <div className="flex">
        {images.map((image, idx) => (
          <div className="flex-[0_0_100%] min-w-0" key={idx}>
            <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
              <ImageZoom src={image.src} alt={image.alt} objectFit="contain" />
              {/* Left Arrow */}
              {images.length > 1 && (
                <button
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow transition disabled:opacity-40"
                  onClick={scrollPrev}
                  disabled={selectedIndex === 0}
                  aria-label="Edellinen kuva"
                  type="button"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M15 6l-6 6 6 6" />
                  </svg>
                </button>
              )}
              {/* Right Arrow */}
              {images.length > 1 && (
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow transition disabled:opacity-40"
                  onClick={scrollNext}
                  disabled={selectedIndex === images.length - 1}
                  aria-label="Seuraava kuva"
                  type="button"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
