import { Countdown } from '@/components/Countdown'

export default function Home() {
  return (
    <div className="section bg-white dark:bg-gray-900 text-dark dark:text-white">
      <div className="container max-w-xl">
        <div className="panel vstack justify-center items-center gap-2 sm:gap-4 text-center h-screen">
          <h2 className="h3 sm:h1">Coming soon!</h2>
          <Countdown targetDate="2024-04-07T16:09:10+00:00" />
          <p className="fs-6 xl:fs-5 mt-8">
            Comeback again when we&apos;re live! <br />
            Thank you for understanding and patience!
          </p>
        </div>
      </div>
    </div>
  )
}