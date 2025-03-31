/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-inter)', 'sans-serif'],
        },
        colors: {
          base: 'rgb(var(--color-base) / <alpha-value>)',
          'base-content': 'rgb(var(--color-base-content) / <alpha-value>)',
          primary: 'rgb(var(--color-primary) / <alpha-value>)',
          'primary-content': 'rgb(var(--color-primary-content) / <alpha-value>)',
        },
        animation: {
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
      },
    },
    plugins: [require('daisyui')],
    daisyui: {
      themes: [
        {
          light: {
            'primary': '#2DD4BF',
            'primary-content': '#FFFFFF',
            'base-100': '#F9FAFB',
            'base-content': '#6B7280',
          },
        },
      ],
    },
  };