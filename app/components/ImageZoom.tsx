/* eslint-disable @next/next/no-img-element */
'use client';
import Zoom from 'react-medium-image-zoom';
import { useCallback } from 'react';

interface ImageZoomProps {
    src: string;
    alt: string;
    objectFit?: 'cover' | 'contain';
}

export default function ImageZoom({ src, alt, objectFit = 'cover' }: ImageZoomProps) {
    const handleClick = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
    }, []);

    return (
        <Zoom>
            <img
                className={`w-full h-full object-${objectFit} rounded-md`}
                src={src}
                alt={alt}
                onClick={handleClick}
            />
        </Zoom>
    );
}
