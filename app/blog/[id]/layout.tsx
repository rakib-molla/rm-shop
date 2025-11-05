// ...existing code...
import Image from 'next/image'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const BlogLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content (left) */}
          <main className="lg:col-span-2">
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              <header className="px-6 py-8 sm:py-10">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
                  Blog Title Placeholder
                </h1>
                <div className="flex items-center text-sm text-gray-500 space-x-3">
                  <span>By <strong className="text-gray-700">Author Name</strong></span>
                  <span>•</span>
                  <time dateTime="2025-11-06">Nov 6, 2025</time>
                  <span>•</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs bg-gray-100 text-gray-800">
                    8 min read
                  </span>
                </div>
              </header>

              <div className="px-6">
                <div className="w-full h-80 sm:h-96 bg-gray-200 rounded-lg mb-6 overflow-hidden relative">
                  {/* Replace with next/image or img */}
                  {/* <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Featured image
                  </div> */}
                  <Image alt='details' className="object-cover" fill  src={`https://woodmart.xtemos.com/wp-content/uploads/2016/07/blog-grid-3.jpg`}/>
                </div>

                <div className="prose prose-neutral max-w-none text-gray-800">
                  {/* Render page content */}
                  {children}
                </div>

                <footer className="mt-10 border-t pt-6 pb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-full" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Author Name</p>
                        <p className="text-sm text-gray-500">Author role or bio</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">Follow</button>
                      <button className="px-4 py-2 text-sm border border-gray-200 rounded-md hover:bg-gray-50">Share</button>
                    </div>
                  </div>
                </footer>
              </div>
            </article>
          </main>

          {/* Sidebar (right) */}
          <aside className="lg:col-span-1">
            <div className="space-y-6">
              <div className="bg-white p-5 rounded-lg shadow-sm ">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <a className="flex items-center justify-between text-sm text-gray-600 hover:text-gray-900" href="#">
                      Web Development <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">12</span>
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center justify-between text-sm text-gray-600 hover:text-gray-900" href="#">
                      UI/UX <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">8</span>
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center justify-between text-sm text-gray-600 hover:text-gray-900" href="#">
                      DevOps <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">5</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Recent Posts</h3>
                <ul className="space-y-3">
                  <li>
                    <a className="flex items-start gap-3" href="#">
                      <div className="w-12 h-12 bg-gray-200 rounded-md shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Quick tips for Next.js performance</p>
                        <p className="text-xs text-gray-500">Nov 1, 2025</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="flex items-start gap-3" href="#">
                      <div className="w-12 h-12 bg-gray-200 rounded-md shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Designing responsive components</p>
                        <p className="text-xs text-gray-500">Oct 28, 2025</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['react', 'nextjs', 'tailwind', 'design', 'accessibility', 'performance'].map((tag) => (
                    <a
                      key={tag}
                      href="#"
                      className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                      #{tag}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default BlogLayout
