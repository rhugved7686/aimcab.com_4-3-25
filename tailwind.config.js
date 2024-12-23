// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}', // Scan all pages in src/pages
    './src/container/component/**/*.{js,ts,jsx,tsx}', // Scan components inside src/container/component
    './src/app/**/*.{js,ts,jsx,tsx}', // For Next.js 13+ app directory
    './public/index.html', // If you have index.html in your public folder
  ],
  theme: {
    extend: {
      colors: {
        dark: '#343a40', // Custom dark color
        lightYellow: '#FFC107', // Example: add a custom light yellow color
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'], // Example: custom font family
      },
      spacing: {
        '72': '18rem', // Example: custom spacing (18rem)
      },
      boxShadow: {
        'md-light': '0 4px 6px rgba(0, 0, 0, 0.1)', // Example: custom shadow
      },
    },
  },
  plugins: [],
};
