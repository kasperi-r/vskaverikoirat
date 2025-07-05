/* eslint-disable @next/next/no-img-element */
import { draftMode } from "next/headers";
import Link from "next/link";
import { fetchBlogPosts } from "./lib/contentful/blogPosts";
import RichText from "./lib/contentful/RichText";
import { Hero } from "./components/Hero";
import type { BlogPost } from "./lib/contentful/blogPosts";
import Gallery from "./components/Gallery";
import { formatDate } from "../lib/utils";

export default async function Home() {
  const blogPosts = await fetchBlogPosts({ preview: draftMode().isEnabled });

  // Sort by newest first
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Hero />
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Uusimmat kuulumiset
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {sortedPosts.map((blogPost: BlogPost) => (
              <article
                key={blogPost.title}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {blogPost.images && (
                  <div className="relative h-64 w-full overflow-hidden">
                    <Gallery images={blogPost.images} />
                  </div>
                )}
                <div className="flex flex-col flex-grow p-6">
                  <Link href={`/posts/${blogPost.slug}`}>
                    <h3 className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200 mb-3">
                      {blogPost.title}
                    </h3>
                  </Link>
                  <time className="text-sm text-gray-500 mb-4 block">
                    {formatDate(blogPost.createdAt)}
                  </time>
                  <div className="prose prose-sm max-w-none text-gray-600 flex-grow">
                    <RichText document={blogPost.body} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
