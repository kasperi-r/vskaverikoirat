import { TypeBlogPostSkeleton } from './types'
import { Entry } from 'contentful'
import { Document as RichTextDocument } from '@contentful/rich-text-types'
import contentfulClient from './contentfulClient'
import { ContentImage, parseContentfulContentImage } from './contentImage'

type BlogPostEntry = Entry<TypeBlogPostSkeleton, undefined, string>

// Our simplified version of a BlogPost.
// We don't need all the data that Contentful gives us.
export interface BlogPost {
  title: string
  slug: string
  body: RichTextDocument | null
  image: ContentImage | null
}

// A function to transform a Contentful blog post
// into our own BlogPost object.
export function parseContentfulBlogPost(blogPostEntry?: BlogPostEntry): BlogPost | null {
  if (!blogPostEntry) {
    return null
  }

  return {
    title: blogPostEntry.fields.title || '',
    slug: blogPostEntry.fields.slug,
    body: blogPostEntry.fields.body || null,
    image: parseContentfulContentImage(blogPostEntry.fields.image),
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