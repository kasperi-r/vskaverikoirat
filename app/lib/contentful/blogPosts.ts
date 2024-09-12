import { TypeBlogPostSkeleton } from './types'
import { Entry, EntryFieldTypes } from 'contentful'
import { Document as RichTextDocument } from '@contentful/rich-text-types'
import contentfulClient from './contentfulClient'
import { ContentImage, parseContentfulContentImage, parseContentfulContentImages } from './contentImage'

type BlogPostEntry = Entry<TypeBlogPostSkeleton, undefined, string>

// Our simplified version of a BlogPost.
// We don't need all the data that Contentful gives us.
export interface BlogPost {
  title: string
  createdAt: Date
  customDate?: Date
  slug: string
  body: RichTextDocument | null
  image: ContentImage | null
  images: ContentImage[] | null
}

// A function to transform a Contentful blog post
// into our own BlogPost object.
export function parseContentfulBlogPost(blogPostEntry?: BlogPostEntry): BlogPost | null {
  if (!blogPostEntry) {
    return null
  }

  return {
    title: blogPostEntry.fields.title || '',
    createdAt: new Date(blogPostEntry.fields.customDate ?? blogPostEntry.sys.createdAt),
    slug: blogPostEntry.fields.slug,
    body: blogPostEntry.fields.body || null,
    image: parseContentfulContentImage(blogPostEntry.fields.image),
    images: parseContentfulContentImages(blogPostEntry.fields.images),
  }
}

// A function to fetch all blog posts.
// Optionally uses the Contentful content preview.
interface FetchBlogPostsOptions {
  preview: boolean
}
export async function fetchBlogPosts({ preview }: FetchBlogPostsOptions): Promise<BlogPost[]> {
  const contentful = contentfulClient({ preview })

  const blogPostsResult = await contentful.getEntries<TypeBlogPostSkeleton>({
    content_type: 'blogPost',
    include: 2,
    order: ['fields.title'],
  })
  // Log the full content of the blog posts result
  console.log(JSON.stringify(blogPostsResult, null, 2));

  return blogPostsResult.items.map((blogPostEntry) => parseContentfulBlogPost(blogPostEntry) as BlogPost)
}

// A function to fetch a single blog post by its slug.
// Optionally uses the Contentful content preview.
interface FetchBlogPostOptions {
  slug: string
  preview: boolean
}
export async function fetchBlogPost({ slug, preview }: FetchBlogPostOptions): Promise<BlogPost | null> {
  const contentful = contentfulClient({ preview })

  const blogPostsResult = await contentful.getEntries<TypeBlogPostSkeleton>({
    content_type: 'blogPost',
    'fields.slug': slug,
    include: 2,
  })

  return parseContentfulBlogPost(blogPostsResult.items[0])
}