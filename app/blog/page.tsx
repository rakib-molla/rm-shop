"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: number;
  date: string;
  month: string;
  category: string;
  title: string;
  description: string;
  author: string;
  imgSrc: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    date: "23",
    month: "JUL",
    category: "DESIGN TRENDS, FURNITURE",
    title: "Seating collection inspiration by modern",
    description:
      "Ac hac ullamcorper donec ante habitasse donec imperdiet et turpis varius per a augue magna hac.",
    author: "S. Rogers",
    imgSrc: "https://woodmart.xtemos.com/wp-content/uploads/2016/07/blog-grid-9.jpg",
  },
  {
    id: 2,
    date: "23",
    month: "JUL",
    category: "DESIGN TRENDS, FURNITURE",
    title: "Minimalist design furniture 2024",
    description:
      "A taciti eros est class sem placerat gravida natoque nulla vestibulum turpis primis adipiscing.",
    author: "S. Rogers",
    imgSrc: "https://woodmart.xtemos.com/wp-content/uploads/2016/07/blog-grid-7.jpg",
  },
  {
    id: 3,
    date: "23",
    month: "JUL",
    category: "DESIGN TRENDS, HAND MADE",
    title: "Green interior design inspiration",
    description:
      "Viverra senectus aptent ad hac mi per aptent suspendisse eros cras sed bibendum augue.",
    author: "S. Rogers",
    imgSrc: "https://woodmart.xtemos.com/wp-content/uploads/2016/07/blog-grid-3.jpg",
  },
  {
    id: 4,
    date: "23",
    month: "JUL",
    category: "DESIGN TRENDS, INSPIRATION",
    title: "Reinterprets the classic bookshelf",
    description:
      "Aliquet parturient scelerisque justo nec rutrum nibh pretium parturient senectus.",
    author: "S. Rogers",
    imgSrc: "https://woodmart.xtemos.com/wp-content/uploads/2016/07/blog-grid-13.jpg",
  },
  {
    id: 5,
    date: "23",
    month: "JUL",
    category: "DESIGN TRENDS, INSPIRATION",
    title: "Creative water features and exterior",
    description:
      "Adipiscing hac imperdiet id blandit varius scelerisque at sagittis libero dui vel ut vehicula amet.",
    author: "S. Rogers",
    imgSrc: "https://woodmart.xtemos.com/wp-content/uploads/2016/07/blog-grid-11.jpg",
  },
  {
    id: 6,
    date: "23",
    month: "JUL",
    category: "DESIGN TRENDS, HAND MADE",
    title: "Sweet seat: functional seat for IT folks",
    description:
      "Sed a risus lacus ut sed etiam rhoncus hendrerit blandit rutrum ut mi hendrerit.",
    author: "S. Rogers",
    imgSrc: "https://woodmart.xtemos.com/wp-content/uploads/2016/07/blog-grid-9.jpg",
  },
];

const BlogPage = () => {
  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Our Latest Blogs
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link 
              href={`blog/${post?.id}`}
              key={post?.id}
              className="bg-white  shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <Image
                  src={post.imgSrc}
                  alt={post.title}
                  width={600}
                  height={400}
                  priority
                  className="cursor-pointer  w-full h-68 transform transition-transform duration-500 ease-in-out hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white rounded text-center shadow-md">
                  <p className="text-green-600 font-bold text-lg leading-none p-2 border-b border-gray-200">
                    {post.date}
                  </p>
                  <p className="text-xs font-medium text-gray-700 p-1">
                    {post.month}
                  </p>
                </div>
              </div>

              <div className="p-5">
                <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded mb-3">
                  {post.category}
                </span>

                <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-green-600 cursor-pointer">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">{post.description}</p>

                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <svg
                    className="w-4 h-4 mr-2 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
                  </svg>
                  <span>Posted by {post.author}</span>
                </div>

                <a
                  href="#"
                  className="text-green-600 text-sm font-semibold hover:underline"
                >
                  CONTINUE READING →
                </a>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
