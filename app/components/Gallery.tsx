import ImageZoom from './ImageZoom';

interface GalleryProps {
    images: { src: string; alt: string }[];
}

export default function Gallery({ images }: GalleryProps) {
    return (
        <div className="grid grid-cols-2 gap-4">
            {images.map((image, idx) => (
                <ImageZoom key={idx} src={image.src} alt={image.alt} />
            ))}
        </div>
    );
}
