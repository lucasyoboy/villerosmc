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
      colors: {
        'blaze-orange': {
          '50': '#fff9ec',
          '100': '#fff1d3',
          '200': '#ffdfa5',
          '300': '#ffc76d',
          '400': '#ffa332',
          '500': '#ff870a',
          '600': '#fb6c00',
          '700': '#cc4f02',
          '800': '#a13d0b',
          '900': '#82340c',
          '950': '#461804',
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
