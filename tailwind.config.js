/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'terminal-green': '#1a7f37',
        'terminal-blue': '#0969da',
        'terminal-orange': '#fb8500',
        'terminal-red': '#d1242f',
        'terminal-purple': '#8250df',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
        'sans': ['var(--font-exo)', 'system-ui', 'sans-serif'],
        'exo': ['var(--font-exo)', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: 'var(--font-exo), system-ui, sans-serif',
            code: {
              fontFamily: 'JetBrains Mono, monospace',
            },
          },
        },
      },
    },
  },
  plugins: [],
}