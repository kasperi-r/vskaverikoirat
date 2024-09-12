import { Asset, AssetLink } from 'contentful'

// Our simplified version of an image asset.
// We don't need all the data that Contentful gives us.
export interface ContentImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// A function to transform a Contentful image asset
// into our own ContentImage object.
export function parseContentfulContentImage(
  asset?: Asset<undefined, string> | { sys: AssetLink }
): ContentImage | null {
  if (!asset) {
    return null;
  }

  if (!('fields' in asset)) {
    return null;
  }

  return {
    src: asset.fields.file?.url || '',
    alt: asset.fields.description || '',
    width: asset.fields.file?.details.image?.width || 0,
    height: asset.fields.file?.details.image?.height || 0,
  };
}

// A function to transform an array of Contentful image assets
// into an array of our own ContentImage objects.
export function parseContentfulContentImages(
  assets?: (Asset<undefined, string> | { sys: AssetLink })[]
): ContentImage[] {
  if (!assets) {
    return [];
  }

  return assets
    .map((asset) => parseContentfulContentImage(asset))
    .filter((image): image is ContentImage => image !== null);
}

// A function to handle both single and multiple images
export function parseContentfulImages(
  assets?: Asset<undefined, string> | { sys: AssetLink } | (Asset<undefined, string> | { sys: AssetLink })[]
): ContentImage[] {
  if (!assets) {
    return [];
  }

  if (Array.isArray(assets)) {
    return parseContentfulContentImages(assets);
  }

  const singleImage = parseContentfulContentImage(assets);
  return singleImage ? [singleImage] : [];
}