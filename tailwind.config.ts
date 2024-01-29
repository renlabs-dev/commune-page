import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut 0.6s ease-in-out',
        'close-accordion': 'closeAccordion 0.3s ease-in-out',
        'open-accordion': 'openAccordion 0.3s ease-in-out',
        'fade-slide-down': 'fadeAndSlideDown 0.4s linear both',
      },
      keyframes: {
        fadeOut: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        openAccordion: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(90deg)' },
        },
        closeAccordion: {
          from: { transform: 'rotate(90deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        fadeAndSlideDown: {
          from: {
            transform: 'translateY(-4%)',
            opacity: '0',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0%)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
