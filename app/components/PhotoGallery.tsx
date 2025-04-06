"use client";

import Image from "next/image";
import {
  RenderImageContext,
  RenderImageProps,
  ColumnsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/columns.css";

interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
        border: "12px solid white",
        borderRadius: "4px",
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
      }}
    >
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </div>
  );
}

export default function PhotoGallery({ photos }: { photos: Photo[] }) {
  return (
    <div className="mb-8">
      <ColumnsPhotoAlbum
        photos={photos}
        render={{ image: renderNextImage }}
        defaultContainerWidth={1200}
        columns={2}
        padding={4}
        sizes={{
          size: "1168px",
          sizes: [
            { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
          ],
        }}
      />
    </div>
  );
}
