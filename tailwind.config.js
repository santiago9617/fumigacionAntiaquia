/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ajusta esta ruta según la estructura de tu proyecto
  ],
  theme: {
    extend: {
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(1.5)', opacity: 0.5 },
        },
      },
      animation: {
        pulse: 'pulse 2s infinite',
      },
      spacing: {
        '50': '12.5rem',
      },
    },
  },
  plugins: [],
};
