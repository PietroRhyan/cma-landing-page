import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        thin: '0 2px 2px -1px rgba(0, 0, 0, 0.15), 0 4px 8px 2px rgba(0, 0, 0, 0.05)',
        float: '0 2px 4px -1px rgba(0, 0, 0, 0.10)',
        faq: '0 2px 2px -2px rgba(0, 0, 0, 0.15), 0 4px 10px -1px rgba(0, 0, 0, 0.05)',
      },

      colors: {
        black: '#1E1E1E',
        'dark-gray': '#5A5A5A',
        gray: '#9C9C9C',
        'light-gray': '#E7E7E7',
        white: '#F5F5F5',

        yellow: '#FAE423',
        'dark-yellow': '#CAB60D',
        'darkest-yellow': '#635905',

        red: '#E94C4C',
        blue: '#3AADED',
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
