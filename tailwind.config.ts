import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#178d72',
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        'degular': ['DegularDisplay-Semibold', 'sans-serif'],
        'graphik': ['Graphik-Regular', 'sans-serif'],
        'mabry': ['MabryPro-Regular', 'sans-serif'],
        'polysans': ['PolySans-Normal', 'sans-serif'],
        'sharp': ['SharpGrotesk-Medium', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      maxWidth: {
        'xl': '36rem',
      },
    },
  },
  plugins: [],
}
export default config