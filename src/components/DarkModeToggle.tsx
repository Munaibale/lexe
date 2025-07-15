'use client'

import { useTheme } from './ThemeProvider'

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div 
      className="darkmode-trigger cstack w-40px h-40px rounded-circle text-none bg-gray-100 dark:bg-gray-700 dark:text-white cursor-pointer"
      onClick={toggleTheme}
    >
      <label className="switch">
        <span className="sr-only">Dark mode toggle</span>
        <input 
          type="checkbox" 
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <span className="slider fs-5"></span>
      </label>
    </div>
  )
}