module.exports = {
  content: ['./**/*.html'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
    },
    fontFamily: {
      sans: ['Raleway', 'Calibri', '"Trebuchet MS"', 'sans-serif'],
      serif: [
        '"Sorts Mill Goudy"',
        'Georgia',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      mono: [],
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
