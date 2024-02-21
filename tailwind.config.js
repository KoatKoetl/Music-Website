/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      lil: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "screen-1400": "1400px",
      "2xl": "1536px",
      "3xl": "1920px",
      "4xl": "2560px",
    },
    extend: {
      screens: {
        mediaPointer: { raw: "(hover: hover) and (pointer: fine)" },
        mediaTouch: { raw: "(pointer: coarse)" },
      },
      fontFamily: {
        DMSerifDisplay: ["DM Serif Display", "serif"],
        Rubik: ["Rubik", "sans-serif"],
      },
      dropShadow: {
        "font-shadow-2": "0 2px 2px rgba(0,0,0,0.8)",
        "font-shadow-4": "0 4px 4px rgba(0,0,0,0.8)",
        "font-shadow-6": "0 6px 6px rgba(0,0,0,0.8)",
      },
      boxShadow: {
        "10xl": "0 0 100px rgb(255 255 255 / 0.5)",
        poster: "10px 10px 5px rgb(0 0 0 / 0.5)",
      },
      gridTemplateColumns: {
        "2x1": "minmax(400px, 2fr), minmax(200px,1fr)",
      },
      fontSize: {
        "4xl": ["2.25rem", "2.75rem"],
        "5xl": ["3rem", "3.75rem"],
        "6xl": ["3.75rem", "4.50rem"],
        "7xl": ["4.5rem", "5.5rem"],
        "8xl": ["6rem", "7.25rem"],
        "9xl": ["7rem", "8.25rem"],
        "12xl": ["10rem", "12rem"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "dark-gray": "#191919",
        "dark-pink": "#750E21",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin 30s linear infinite",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-animate")],
};
