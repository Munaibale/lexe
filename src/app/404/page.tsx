import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="section bg-white dark:bg-gray-900 text-dark dark:text-white">
      <div className="container max-w-xl">
        <div className="panel vstack justify-center items-center gap-2 sm:gap-4 text-center h-screen">
          <h1 className="h1">404</h1>
          <h2 className="h3">Page Not Found</h2>
          <p className="fs-6 xl:fs-5 mt-8">
            The page you are looking for doesn&apos;t exist.
          </p>
          <Link href="/" className="btn btn-primary mt-4">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}