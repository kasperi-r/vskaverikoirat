/* eslint-disable @next/next/no-img-element */
import { Metadata, ResolvingMetadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { fetchBlogPost, fetchBlogPosts } from '@/app/lib/contentful/blogPosts'
import RichText from '@/app/lib/contentful/RichText'
import Gallery from '@/app/components/Gallery'
import { formatDate } from '@/lib/utils'

interface BlogPostPageParams {
    slug: string
}

interface BlogPostPageProps {
    params: BlogPostPageParams
}

// Tell Next.js about all our blog posts so
// they can be statically generated at build time.
export async function generateStaticParams(): Promise<BlogPostPageParams[]> {
    const blogPosts = await fetchBlogPosts({ preview: false })

    return blogPosts.map((post) => ({ slug: post.slug }))
}

// For each blog post, tell Next.js which metadata
// (e.g. page title) to display.
export async function generateMetadata({ params }: BlogPostPageProps, parent: ResolvingMetadata): Promise<Metadata> {
    const blogPost = await fetchBlogPost({ slug: params.slug, preview: draftMode().isEnabled })

    if (!blogPost) {
        return notFound()
    }

    return {
        title: blogPost.title,
    }
}

// The actual BlogPostPage component.
async function BlogPostPage({ params }: BlogPostPageProps) {
    // Fetch a single blog post by slug,
    // using the content preview if draft mode is enabled:
    const blogPost = await fetchBlogPost({ slug: params.slug, preview: draftMode().isEnabled })

    if (!blogPost) {
        // If a blog post can't be found,
        // tell Next.js to render a 404 page.
        return notFound()
    }

    return (
        <div className="my-8">
            {/* Render the blog post image */}
            {blogPost.image && (
                // Use the Contentful Images API to render
                // responsive images. No next/image required:
                <img
                    className='mb-4 rounded-lg'
                    src={blogPost.image.src}
                    alt={blogPost.image.alt}
                />
            )}

            {blogPost.images && (
                <Gallery images={blogPost.images} />
            )}

            {/* Render the blog post title */}
            <h1 className='my-6 text-2xl sm:text-3xl font-semibold leading-[1.3]'>{blogPost.title}</h1>

            <p className='mb-6 font-light'>{formatDate(blogPost.createdAt)}</p>

            {/* Render the blog post body */}
            <div className='block text-base leading-relaxed'>
                <RichText document={blogPost.body} />
            </div>
        </div>
    )
}

export default BlogPostPage