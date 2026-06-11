/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // PaxVision Color Palette
        primary: {
          DEFAULT: '#0C2340',
          dark: '#071828',
          light: '#0F2E40',
        },
        secondary: {
          DEFAULT: '#1D9E75',
          dark: '#085041',
          light: '#5DCAA5',
        },
        accent: {
          DEFAULT: '#5DCAA5',
          dark: '#4DBFA0',
          light: '#E1F5EE',
        },
        background: {
          light: '#F4F7FA',
          mid: '#0F2E40',
          dark: '#071828',
        },
        text: {
          primary: '#1E2E3D',
          muted: '#888780',
          light: '#E1F5EE',
          softer: '#9FE1CB',
        },
        border: {
          DEFAULT: '#D3D1C7',
          soft: 'rgba(29, 158, 117, 0.3)',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '14px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
