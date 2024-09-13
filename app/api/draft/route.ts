import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { fetchBlogPost } from '@/app/lib/contentful/blogPosts'
const { CONTENTFUL_PREVIEW_ACCESS_TOKEN } = process.env

export async function GET(request: Request) {
    // Parse query string parameters
    const { searchParams } = new URL(request.url)
    const secret = searchParams.get('secret')
    const slug = searchParams.get('slug')

    console.log('Secret:', secret);
    console.log('Slug:', slug);

    // Check the secret and next parameters
    // This secret should only be known to this route handler and the CMS
    if (secret !== CONTENTFUL_PREVIEW_ACCESS_TOKEN || !slug) {
        return new Response('Invalid token', { status: 401 })
    }

    // Fetch a blog post by slug and check if the provided `slug` exists
    const post = await fetchBlogPost({ slug, preview: true })

    // If the slug doesn't exist prevent draft mode from being enabled
    if (!post) {
        return new Response('Invalid slug', { status: 401 })
    }

    // Enable Draft Mode by setting the cookie
    draftMode().enable()

    // Redirect to the path from the fetched post
    // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities
    redirect(post.slug)
}