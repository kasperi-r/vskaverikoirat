"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import RichText from "../lib/contentful/RichText";
import Gallery from "./Gallery";
import { formatDate } from "../../lib/utils";
import type { BlogPost } from "../lib/contentful/blogPosts";

interface BlogCardProps {
  blogPost: BlogPost;
  index: number;
}

export default function BlogCard({ blogPost, index }: BlogCardProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    const checkTruncation = () => {
      if (contentRef.current) {
        const element = contentRef.current;
        setIsTruncated(element.scrollHeight > element.clientHeight);
      }
    };

    checkTruncation();
    window.addEventListener("resize", checkTruncation);

    return () => {
      window.removeEventListener("resize", checkTruncation);
    };
  }, []);

  return (
    <article className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 hover:border-amber-200 hover:-translate-y-1">
      {blogPost.images && (
        <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50">
          <Gallery images={blogPost.images} />
        </div>
      )}
      <div className="flex flex-col flex-grow p-6">
        <Link href={`/posts/${blogPost.slug}`}>
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-200 mb-3 line-clamp-2">
            {blogPost.title}
          </h3>
        </Link>
        <div className="flex items-center gap-2 mb-4">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <time className="text-sm text-gray-500">
            {formatDate(blogPost.createdAt)}
          </time>
        </div>
        <div
          ref={contentRef}
          className="prose prose-sm max-w-none text-gray-600 flex-grow mb-4 line-clamp-3"
        >
          <RichText document={blogPost.body} />
        </div>
        {isTruncated && (
          <Link
            href={`/posts/${blogPost.slug}`}
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium transition-colors group/link mt-auto"
          >
            <span>Lue lisää</span>
            <svg
              className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        )}
      </div>
    </article>
  );
}
