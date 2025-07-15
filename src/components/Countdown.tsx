'use client'

import { useEffect, useState } from 'react'

interface CountdownProps {
  targetDate: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0')
  }

  return (
    <div className="row child-cols-3 items-center justify-center g-1 sm:g-2">
      <div>
        <div>
          <div className="cstack h4 sm:h2 w-64px h-64px sm:min-w-100px sm:min-h-100px py-2 border rounded uc-countdown-days">
            {formatNumber(timeLeft.days)}
          </div>
          <div className="uc-countdown-label mt-1 text-center d-none sm:d-block opacity-60">
            Days
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="cstack h4 sm:h2 w-64px h-64px sm:min-w-100px sm:min-h-100px py-2 border rounded uc-countdown-hours">
            {formatNumber(timeLeft.hours)}
          </div>
          <div className="uc-countdown-label mt-1 text-center d-none sm:d-block opacity-60">
            Hours
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="cstack h4 sm:h2 w-64px h-64px sm:min-w-100px sm:min-h-100px py-2 border rounded uc-countdown-minutes">
            {formatNumber(timeLeft.minutes)}
          </div>
          <div className="uc-countdown-label mt-1 text-center d-none sm:d-block opacity-60">
            Minutes
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="cstack h4 sm:h2 w-64px h-64px sm:min-w-100px sm:min-h-100px py-2 border rounded uc-countdown-seconds">
            {formatNumber(timeLeft.seconds)}
          </div>
          <div className="uc-countdown-label mt-1 text-center d-none sm:d-block opacity-60">
            Seconds
          </div>
        </div>
      </div>
    </div>
  )
}