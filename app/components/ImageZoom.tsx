/* eslint-disable @next/next/no-img-element */
'use client';
import Zoom from 'react-medium-image-zoom';

interface ImageZoomProps {
    src: string;
    alt: string;
}

export default function ImageZoom({ src, alt }: ImageZoomProps) {

    return (
        <Zoom>
            <img className='rounded-lg' src={src} alt={alt} />
        </Zoom>
    );
}
