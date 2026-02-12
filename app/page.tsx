/* eslint-disable @next/next/no-img-element */
import { draftMode } from "next/headers";
import { fetchBlogPosts } from "./lib/contentful/blogPosts";
import { Hero } from "./components/Hero";
import BlogCard from "./components/BlogCard";

export default async function Home() {
  const blogPosts = await fetchBlogPosts({ preview: (await draftMode()).isEnabled });

  // Sort by newest first
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Hero />
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Uusimmat kuulumiset
            </h2>
            <p className="text-gray-600 text-lg">
              Seuraa kaverikoiriemme seikkailuja ja kuulumisia
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {sortedPosts.map((blogPost, index) => (
              <BlogCard key={blogPost.slug} blogPost={blogPost} index={index} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
