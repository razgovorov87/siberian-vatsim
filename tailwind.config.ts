import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        sky: {
          50: "hsl(201 100% 97%)",
          100: "hsl(201 100% 94%)",
          200: "hsl(201 100% 88%)",
          300: "hsl(201 100% 78%)",
          400: "hsl(201 96% 65%)",
          500: "hsl(201 96% 55%)",
          600: "hsl(201 96% 45%)",
          700: "hsl(201 90% 38%)",
          800: "hsl(201 85% 30%)",
          900: "hsl(201 80% 22%)",
        },
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
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          from: { opacity: "0", transform: "translateX(-10px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "fly-plane-right": {
          "0%": { 
            transform: "translateX(0) translateY(0)",
            opacity: "0"
          },
          "5%": { opacity: "1" },
          "95%": { opacity: "1" },
          "100%": { 
            transform: "translateX(120vw) translateY(-20vh)",
            opacity: "0"
          },
        },
        "fly-plane-left": {
          "0%": { 
            transform: "translateX(0) translateY(0)",
            opacity: "0"
          },
          "5%": { opacity: "1" },
          "95%": { opacity: "1" },
          "100%": { 
            transform: "translateX(-120vw) translateY(-20vh)",
            opacity: "0"
          },
        },
        "fly-plane-up": {
          "0%": { 
            transform: "translateX(0) translateY(0)",
            opacity: "0"
          },
          "5%": { opacity: "1" },
          "95%": { opacity: "1" },
          "100%": { 
            transform: "translateX(30vw) translateY(-120vh)",
            opacity: "0"
          },
        },
        "fly-plane-diagonal": {
          "0%": { 
            transform: "translateX(0) translateY(0)",
            opacity: "0"
          },
          "5%": { opacity: "1" },
          "95%": { opacity: "1" },
          "100%": { 
            transform: "translateX(-80vw) translateY(-80vh)",
            opacity: "0"
          },
        },
        "float": {
          "0%, 100%": { 
            transform: "translateY(0) translateX(0)",
          },
          "50%": { 
            transform: "translateY(-20px) translateX(10px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        "fly-plane-right": "fly-plane-right 15s linear infinite",
        "fly-plane-left": "fly-plane-left 15s linear infinite",
        "fly-plane-up": "fly-plane-up 18s linear infinite",
        "fly-plane-diagonal": "fly-plane-diagonal 20s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
