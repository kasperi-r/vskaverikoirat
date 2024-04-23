import { draftMode } from 'next/headers';
import { fetchBlogPosts } from './lib/contentful/blogPosts';
import RichText from './lib/contentful/RichText';
import { BlogPost } from './lib/contentful/blogPosts';
import { inter } from './ui/fonts';
import Image from 'next/image';
import mainImg from '../public/main_img.jpg';

function formatDate(date: Date) {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero indexed, so we add 1
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

export default async function Home() {
  // Fetch blog posts using the content preview if draft mode is enabled:
  const blogPosts = await fetchBlogPosts({ preview: draftMode().isEnabled })

  return (
    <div className="">
      <main className="">
        <Image src={mainImg} alt='Hero image' />
        <div className="mb-12 pb-12 p-4 border rounded-b-lg bg-white shadow">
          <h1 className={`${inter.className} mb-6 text-4xl font-semibold leading-[1.3]`}>Varsinais-Suomen Kennelpiirin kaverikoiratoiminta</h1>
          <p className='block text-base font-light leading-relaxed'>Kaverikoiratoiminta on vapaaehtoistoimintaa, jossa koira tuo iloa, elämyksiä ja läheisyyttä ihmisille, joilla ei ole omaa koiraa. Toiminta on alkanut Varsinais-Suomessa 2001 ja tällä hetkellä toimintaa on koko Suomessa ja mukana on noin 1500 kaverikoirakkoa.
            Näiltä sivuilta löydät Varsinais-Suomen kaverikoiraryhmien omat sivut.
          </p>
        </div>
        <ul>
          {blogPosts.map((blogPost: BlogPost) => {
            console.log(blogPost)
            return (
              <li className="mb-12 pb-12 p-4 border rounded-lg bg-white shadow" key={blogPost.title}>
                {/* Render the blog post image */}
                {blogPost.image && (
                  // Use the Contentful Images API to render
                  // responsive images. No next/image required:
                  <img
                    src={blogPost.image.src}
                    alt={blogPost.image.alt}
                  />
                )}

                {/* Render the blog post title */}
                <h1 className='mb-6 text-4xl font-sans font-semibold leading-[1.3]'>{blogPost.title}</h1>

                <p className='mb-6 font-sans font-light'>{formatDate(blogPost.createdAt)}</p>

                {/* Render the blog post body */}
                <div className='block text-base font-light leading-relaxed'>
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
