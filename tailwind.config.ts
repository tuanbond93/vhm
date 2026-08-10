import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F7F8F5',
        surface: '#FFFFFF',
        ink: '#14202B',
        body: '#435164',
        muted: '#667085',
        brand: {
          DEFAULT: '#235789',
          hover: '#1B456D',
        },
        action: {
          DEFAULT: '#2F6FED',
          hover: '#1D5BD8',
        },
        ops: {
          success: '#167A65',
          attention: '#C47A16',
          risk: '#B5473C',
          border: '#DCE2E7',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
