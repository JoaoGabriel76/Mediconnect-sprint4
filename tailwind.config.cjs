module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4fbff',
          100: '#e6f6ff',
          200: '#cceeff',
          300: '#99ddff',
          400: '#66ccff',
          500: '#2f9fff',
          600: '#2386e6',
          700: '#1966b4',
        },
        accent: {
          50: '#f6fff9',
          100: '#ecfff2',
          200: '#d6ffe6',
          300: '#b3ffd0',
          400: '#90ffb8',
          500: '#2fff8e'
        }
      }
    },
  },
  plugins: [],
}
