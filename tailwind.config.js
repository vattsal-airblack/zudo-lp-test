/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'instrument-serif': ['Instrument Serif', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'text-secondary': "var(--text-secondary)",
        'text-tertiary': "var(--text-tertiary)",
        'accent-purple': "var(--accent-purple)",
        'accent-red': "var(--accent-red)",
        'accent-blue': "var(--accent-blue)",
        'accent-pink': "var(--accent-pink)",
        'accent-orange': "var(--accent-orange)",
        'accent-green': "var(--accent-green)",
        'border-color': "var(--border-color)",
        'card-background': "var(--card-background)",
        'card-border': "var(--card-border)",
        'button-bg-playstore': "var(--button-bg-playstore)",
        'button-border-playstore': "var(--button-border-playstore)",
        'button-bg-appstore': "var(--button-bg-appstore)",
        'button-border-appstore': "var(--button-border-appstore)",
        'button-text': "var(--button-text)",
      },
    },
  },
  plugins: [],
};
