/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend:
    {
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],
        'VT323': ['VT323', 'sans-serif']
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },   
      colors: {
        'blaze-orange': {
          '50': '#fafcf5', 
          '100': '#f2f7e6', 
          '200': '#e0edc5', 
          '300': '#c9e0a2', 
          '400': '#9ec969', 
          '500': '#70b237', 
          '600': '#61a12d', 
          '700': '#47851e', 
          '800': '#346b14', 
          '900': '#224f0b', 
          '950': '#133305'
      },
      'mine-shaft': {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#2b2b2b',
    },
    
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
