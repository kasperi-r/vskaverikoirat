import { draftMode } from 'next/headers'
import { fetchBlogPosts } from './lib/contentful/blogPosts'
import RichText from './lib/contentful/RichText'
import Image from "next/image";
import dogs from "../public/dogs.jpg";

export default async function Home() {
  // Fetch blog posts using the content preview
  // if draft mode is enabled:
  const blogPosts = await fetchBlogPosts({ preview: draftMode().isEnabled })

  return (
    <main>
      <div>
        <h1 className="text-xl my-10">Varsinais-Suomen Kaverikoirat</h1>
        <ul>
          {blogPosts.map((blogPost) => {
            return (
              <li key={blogPost.title}>
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
                <h1 className='my-6'>{blogPost.title}</h1>

                {/* Render the blog post body */}
                <RichText document={blogPost.body} />
              </li>
            )
          })}
        </ul>
        {/* <Image
          src={dogs}
          alt="Kaverikoirat"
        /> */}
      </div>
    </main>
  );
}
