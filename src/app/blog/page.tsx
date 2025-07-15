import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build modern web applications with Next.js and React.',
    date: '2024-01-15',
    slug: 'getting-started-nextjs'
  },
  {
    id: 2,
    title: 'The Future of Web Development',
    excerpt: 'Exploring the latest trends and technologies in web development.',
    date: '2024-01-10',
    slug: 'future-web-development'
  },
  {
    id: 3,
    title: 'Building Responsive Designs',
    excerpt: 'Best practices for creating responsive and mobile-first designs.',
    date: '2024-01-05',
    slug: 'building-responsive-designs'
  }
]

export default function Blog() {
  return (
    <div className="section bg-white dark:bg-gray-900 text-dark dark:text-white">
      <div className="container">
        <div className="panel text-center mb-12">
          <h1 className="h1">Blog</h1>
          <p className="fs-6 xl:fs-5 mt-4">
            Stay updated with our latest insights and tutorials.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h2 className="h4 mb-3">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {post.excerpt}
              </p>
              <div className="flex justify-between items-center">
                <time className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString()}
                </time>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-primary hover:underline"
                >
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}