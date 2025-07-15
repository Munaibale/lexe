import { notFound } from 'next/navigation'
import Link from 'next/link'

const blogPosts = {
  'getting-started-nextjs': {
    title: 'Getting Started with Next.js',
    content: `
      <p>Next.js is a powerful React framework that makes it easy to build fast, scalable web applications. In this guide, we'll explore the key features and benefits of Next.js.</p>
      
      <h2>What is Next.js?</h2>
      <p>Next.js is a React framework that provides a set of tools and conventions for building production-ready web applications. It offers features like server-side rendering, static site generation, and automatic code splitting.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Server-side rendering (SSR)</li>
        <li>Static site generation (SSG)</li>
        <li>Automatic code splitting</li>
        <li>Built-in CSS support</li>
        <li>API routes</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To create a new Next.js project, run the following command:</p>
      <pre><code>npx create-next-app@latest my-app</code></pre>
    `,
    date: '2024-01-15'
  },
  'future-web-development': {
    title: 'The Future of Web Development',
    content: `
      <p>Web development is constantly evolving, with new technologies and frameworks emerging regularly. Let's explore what the future holds for web development.</p>
      
      <h2>Emerging Technologies</h2>
      <p>Several technologies are shaping the future of web development:</p>
      
      <ul>
        <li>WebAssembly (WASM)</li>
        <li>Progressive Web Apps (PWAs)</li>
        <li>Jamstack architecture</li>
        <li>Edge computing</li>
        <li>AI and machine learning integration</li>
      </ul>
      
      <h2>Trends to Watch</h2>
      <p>Keep an eye on these trends that are likely to impact web development in the coming years.</p>
    `,
    date: '2024-01-10'
  },
  'building-responsive-designs': {
    title: 'Building Responsive Designs',
    content: `
      <p>Responsive design is essential in today's multi-device world. Learn how to create designs that work seamlessly across all screen sizes.</p>
      
      <h2>Mobile-First Approach</h2>
      <p>Start designing for mobile devices first, then progressively enhance for larger screens.</p>
      
      <h2>Flexible Grid Systems</h2>
      <p>Use CSS Grid and Flexbox to create flexible layouts that adapt to different screen sizes.</p>
      
      <h2>Media Queries</h2>
      <p>Implement media queries to apply different styles based on device characteristics.</p>
    `,
    date: '2024-01-05'
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="section bg-white dark:bg-gray-900 text-dark dark:text-white">
      <div className="container max-w-4xl">
        <article className="panel">
          <div className="mb-8">
            <Link href="/blog" className="text-primary hover:underline mb-4 inline-block">
              ← Back to Blog
            </Link>
            <h1 className="h1 mb-4">{post.title}</h1>
            <time className="text-gray-500 dark:text-gray-400">
              {new Date(post.date).toLocaleDateString()}
            </time>
          </div>
          
          <div 
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  )
}