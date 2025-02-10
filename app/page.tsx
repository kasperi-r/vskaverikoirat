/* eslint-disable @next/next/no-img-element */
import { draftMode } from 'next/headers';
import Link from 'next/link';
import { fetchBlogPosts } from './lib/contentful/blogPosts';
import RichText from './lib/contentful/RichText';
import { BlogPost } from './lib/contentful/blogPosts';
import Gallery from './components/Gallery';
import Image from 'next/image';
import { formatDate } from '../lib/utils';

export default async function Home() {
  // Fetch blog posts using the content preview if draft mode is enabled:
  const blogPosts = await fetchBlogPosts({ preview: draftMode().isEnabled })

  return (
    <div className="">
      <main className="">
        <div className="p-4">
          <h1 className="text-gray-700 mb-8 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold break-words leading-snug">
            Varsinais-Suomen Kennelpiirin kaverikoiratoiminta
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Kaverikoiratoiminta on vapaaehtoistoimintaa, jossa koira tuo iloa, elämyksiä ja läheisyyttä ihmisille, joilla ei ole omaa koiraa. Toiminta on alkanut Varsinais-Suomessa 2001 ja tällä hetkellä toimintaa on koko Suomessa ja mukana on noin 1500 kaverikoirakkoa.
            Näiltä sivuilta löydät Varsinais-Suomen kaverikoiraryhmien omat sivut.
          </p>
        </div>
        <Image src='/4_koiraa.jpg' alt='Neljä koiraa' width={2448} height={1636} className='rounded-md shadow-lg mb-8' />
        <Image src='/4_koiraa_2.jpg' alt='Neljä koiraa' width={1080} height={715} className='rounded-md shadow-lg' />
        <ul>
          {blogPosts.map((blogPost: BlogPost) => {
            console.log(blogPost)
            return (
              <li className="my-12 pb-12 p-4 rounded-lg bg-white shadow" key={blogPost.title}>
                {/* Render the blog post images
                Use the Contentful Images API to render
                responsive images. No next/image required: */}
                {blogPost.images && (
                  <Gallery images={blogPost.images} />
                )}

                {/* Render the blog post title */}
                <Link href={`/posts/${blogPost.slug}`}>
                  <h1 className='my-6 text-2xl sm:text-3xl font-semibold leading-[1.3]'>{blogPost.title}</h1>
                </Link>

                <p className='mb-6 font-light'>{formatDate(blogPost.createdAt)}</p>

                {/* Render the blog post body */}
                <div className='block text-base leading-relaxed'>
                  <RichText document={blogPost.body} />
                </div>
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  );
}
