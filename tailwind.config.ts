import type { Config } from 'tailwindcss';
import formsPlugin from '@tailwindcss/forms';

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      transitionDuration: {
        '1000': '1000ms',
        '2000': '1000ms',
      },
    },
  },
  plugins: [formsPlugin],
} satisfies Config;
