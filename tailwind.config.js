/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        steel: {
          900: '#121a1e',
          800: '#1b262c',
          700: '#23353c'
        }
      },
      boxShadow: {
        panel: '0 18px 50px rgba(3, 10, 14, 0.45)'
      }
    }
  },
  plugins: []
};
