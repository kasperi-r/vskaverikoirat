import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeBlogPostFields {
  title?: EntryFieldTypes.Symbol
  createdAt: EntryFieldTypes.Date
  customDate?: EntryFieldTypes.Date
  slug: EntryFieldTypes.Symbol
  body?: EntryFieldTypes.RichText
  image?: EntryFieldTypes.AssetLink
  images?: EntryFieldTypes.AssetLink[]
}

export type TypeBlogPostSkeleton = EntrySkeletonType<TypeBlogPostFields, 'blogPost'>
export type TypeBlogPost<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeBlogPostSkeleton,
  Modifiers,
  Locales
>