"use client";

import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/react";
import ImageZoom from "./ImageZoom";

interface GalleryProps {
  images: { src: string; alt: string }[];
}

export default function Gallery({ images }: GalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const mainImage = images[0];
  const remainingImages = images.slice(1);

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      {/* Main image with overlay */}
      <div
        className="relative cursor-pointer group w-full"
        onClick={() => {
          if (images.length > 1) setIsOpen(true);
        }}
      >
        <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
          <ImageZoom
            src={mainImage.src}
            alt={mainImage.alt}
            objectFit="contain"
          />
        </div>
        {remainingImages.length > 0 && (
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="text-white text-lg font-semibold">
              +
              {remainingImages.length === 1
                ? "1 kuva"
                : `${remainingImages.length} kuvaa`}
            </div>
          </div>
        )}
      </div>

      {/* Modal for all images */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size="5xl"
        scrollBehavior="inside"
        classNames={{
          backdrop: "bg-black/75",
        }}
      >
        <ModalContent>
          <ModalHeader className="flex justify-between items-center">
            <span className="text-xl font-semibold">
              Kuvat ({images.length})
            </span>
          </ModalHeader>
          <ModalBody className="px-6 py-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image, idx) => (
                <div
                  key={idx}
                  className="relative w-full aspect-square overflow-hidden rounded-lg flex items-center justify-center"
                  onClick={handleImageClick}
                >
                  <ImageZoom src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
