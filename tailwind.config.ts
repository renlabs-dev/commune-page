import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        title: '#2E2F35',
        subtitle: '#58595D',
        'section-info': '#141414',
        'header-links': '#222222',
      },
      boxShadow: {
        custom: '3px 3px 0 0 rgba(46,47,53,1)',
      },
      animation: {
        fade: 'fadeOut 0.6s ease-in-out',
        'menu-fade': 'fadeOut 0.1s ease-in-out',
        'close-accordion': 'closeAccordion 0.3s ease-in-out',
        'open-accordion': 'openAccordion 0.3s ease-in-out',
        'fade-slide-down': 'fadeAndSlideDown 0.2s ease-in-out both',
        'scale-up-sm': 'scaleUpSm 0.03s ease-in-out both',
        'scale-down-md': 'scaleDownMd 0.2s ease-in-out both',
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
        scaleUpSm: {
          from: { scale: '1' },
          to: { scale: '1.02' },
        },
        scaleDownMd: {
          from: { scale: '0.96', transform: 'translateY(-5%)' },
          to: { scale: '1', transform: 'translateY(0%)' },
        },
        fadeAndSlideDown: {
          from: {
            transform: 'translateY(-0.5%)',
            scale: '0.96',
          },
          to: {
            transform: 'translateY(0%)',
            scale: '1',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
