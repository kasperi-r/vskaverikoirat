import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { fetchBlogPost, fetchBlogPosts } from '../lib/contentful/blogPosts';
import RichText from '../lib/contentful/RichText';

interface BlogPostPageProps {
    blogPost: any;
}

const BlogPostPage = ({ blogPost }: BlogPostPageProps) => {
    if (!blogPost) {
        return <div>Post not found</div>;
    }

    return (
        <main className="p-[6vw]">
            <Link href="/">← Posts</Link>
            <div className="prose mt-8 border-t pt-8">
                {/* Render the blog post image */}
                {blogPost.image && (
                    <img
                        src={blogPost.image.src}
                        // Use the Contentful Images API to render
                        // responsive images. No next/image required:
                        srcSet={`${blogPost.image.src}?w=300 1x, ${blogPost.image.src} 2x`}
                        width={300}
                        height={300}
                        alt={blogPost.image.alt}
                    />
                )}

                {/* Render the blog post title */}
                <h1>{blogPost.title}</h1>

                {/* Render the blog post body */}
                <RichText document={blogPost.body} />
            </div>
        </main>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const blogPosts = await fetchBlogPosts({ preview: false });

    const paths = blogPosts.map((post) => ({
        params: { slug: post.slug },
    }));

    return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
    const { slug } = params as { slug: string };
    const blogPost = await fetchBlogPost({ slug, preview });

    if (!blogPost) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            blogPost,
        },
        revalidate: 10, // Revalidate at most once every 10 seconds
    };
};

export default BlogPostPage;