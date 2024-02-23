import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        thin: '0 2px 2px -1px rgba(0, 0, 0, 0.15), 0 4px 8px 2px rgba(0, 0, 0, 0.05)',
        float: '0 2px 4px 2px rgba(0, 0, 0, 0.15)',
        'float-thin': '0 2px 4px 0px rgba(0, 0, 0, 0.15)',
        faq: '0 2px 2px -2px rgba(0, 0, 0, 0.15), 0 4px 10px -1px rgba(0, 0, 0, 0.05)',
      },

      colors: {
        black: '#1E1E1E',
        'light-black': '#262626',
        'dark-gray': '#5A5A5A',
        gray: '#9C9C9C',
        'light-gray': '#E7E7E7',
        white: '#F5F5F5',

        yellow: '#FAE423',
        'dark-yellow': '#CAB60D',
        'darkest-yellow': '#635905',

        red: '#E94C4C',
        blue: '#3AADED',
        green: '#64BB6C'
      },

      screens: {
        sm: '480px',
        md: '768px',
        slg: '845px',
        lg: '976px',
        lgp: '1024px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
}

export default config

