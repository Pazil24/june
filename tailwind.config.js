/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // You can also manually add hardcoded fallbacks:
        // border: '#e5e7eb',
        // foreground: '#111827',
        primary: {
          50: "#f8e1f4",
          100: "#f0c7e8",
          200: "#e5a8d6",
          300: "#d888c4",
          400: "#cc6bb2",
          500: "#8eb6e2",
          600: "#7a9cd1",
          700: "#6682c0",
          800: "#5268af",
          900: "#3e4e9e",
        },
        secondary: {
          50: "#f7f3ff",
          100: "#efe6ff",
          200: "#ddd0ff",
          300: "#c4a9ff",
          400: "#a679ff",
          500: "#8b49ff",
          600: "#7c27f7",
          700: "#6d1ae3",
          800: "#5c17bf",
          900: "#453c67",
        },
        accent: {
          50: "#e7f4ec",
          100: "#cfe9d9",
          200: "#9fd3b3",
          300: "#6fbd8d",
          400: "#3fa767",
          500: "#0f9141",
          600: "#0c7434",
          700: "#095727",
          800: "#063a1a",
          900: "#031d0d",
        },
        text: {
          primary: "#453C67",
          secondary: "#5C5470",
          light: "#8B8B8B",
        },
        background: {
          primary:
            "linear-gradient(135deg, #f8e1f4 0%, #d0ebff 50%, #e7f4ec 100%)",
          card: "rgba(255, 255, 255, 0.8)",
          blur: "rgba(255, 255, 255, 0.1)",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
