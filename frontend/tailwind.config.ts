import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
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
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "Consolas", "Monaco", "monospace"],
      },
      colors: {
        // TrueTrace Design System Colors
        bg: {
          main: "#0B0F17",
          surface: "#0F141E",
          glass: "rgba(255, 255, 255, 0.04)",
          hover: "rgba(255, 255, 255, 0.06)",
          elevated: "rgba(255, 255, 255, 0.02)",
        },
        primary: {
          100: "#2DD4BF",
          200: "#22D3EE",
          300: "#0EA5E9",
          400: "#3B82F6",
          DEFAULT: "#3B82F6",
          glow: "rgba(59, 130, 246, 0.35)",
          foreground: "#F1F5F9",
        },
        secondary: {
          100: "#6366F1",
          200: "#A855F7",
          DEFAULT: "#6366F1",
          foreground: "#F1F5F9",
        },
        semantic: {
          success: "#22C55E",
          info: "#0EA5E9",
          warning: "#F59E0B",
          danger: "#EF4444",
          critical: "#DC2626",
        },
        text: {
          primary: "#F1F5F9",
          secondary: "#A5B4C7",
          muted: "#64748B",
          inverse: "#0B0F17",
        },
        border: {
          soft: "rgba(255, 255, 255, 0.08)",
          medium: "rgba(255, 255, 255, 0.12)",
          strong: "rgba(255, 255, 255, 0.16)",
          DEFAULT: "rgba(255, 255, 255, 0.08)",
        },
        // Legacy colors for compatibility
        background: "#0B0F17",
        foreground: "#F1F5F9",
        input: "rgba(255, 255, 255, 0.08)",
        ring: "#3B82F6",
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#F1F5F9",
        },
        muted: {
          DEFAULT: "#64748B",
          foreground: "#F1F5F9",
        },
        accent: {
          DEFAULT: "#6366F1",
          foreground: "#F1F5F9",
        },
        popover: {
          DEFAULT: "#0F141E",
          foreground: "#F1F5F9",
        },
        card: {
          DEFAULT: "rgba(255, 255, 255, 0.04)",
          foreground: "#F1F5F9",
        },
        sidebar: {
          DEFAULT: "#0F141E",
          foreground: "#F1F5F9",
          primary: "#3B82F6",
          "primary-foreground": "#F1F5F9",
          accent: "rgba(255, 255, 255, 0.06)",
          "accent-foreground": "#F1F5F9",
          border: "rgba(255, 255, 255, 0.08)",
          ring: "#3B82F6",
        },
        cyan: "#22D3EE",
        blue: "#3B82F6",
        teal: "#2DD4BF",
        navy: "#0B0F17",
        "navy-light": "#0F141E",
        glass: "rgba(255, 255, 255, 0.04)",
        success: {
          DEFAULT: "#22C55E",
          foreground: "#F1F5F9",
        },
        warning: {
          DEFAULT: "#F59E0B",
          foreground: "#F1F5F9",
        },
        info: {
          DEFAULT: "#0EA5E9",
          foreground: "#F1F5F9",
        },
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1.25rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
        "4xl": "5rem",
        "5xl": "6rem",
      },
      borderRadius: {
        sm: "0.375rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.375rem",
        "2xl": "1.5rem",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -4px rgba(0, 0, 0, 0.4)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 8px 10px -6px rgba(0, 0, 0, 0.5)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glow-primary": "0 0 24px rgba(59, 130, 246, 0.45)",
        "glow-cyan": "0 0 20px rgba(34, 211, 238, 0.5)",
        "glow-purple": "0 0 20px rgba(168, 85, 247, 0.4)",
        "glow-success": "0 0 16px rgba(34, 197, 94, 0.4)",
        "glow-danger": "0 0 16px rgba(239, 68, 68, 0.4)",
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
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 12px rgba(59, 130, 246, 0.35)" },
          "50%": { boxShadow: "0 0 24px rgba(59, 130, 246, 0.45)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        scan: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(400px)" },
        },
        flow: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "slide-out-right": "slide-out-right 0.3s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        scan: "scan 3s linear infinite",
        flow: "flow 3s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(90deg, #3B82F6, #06B6D4, #2DD4BF)",
        "gradient-hero": "linear-gradient(120deg, #3B82F6 0%, #22D3EE 40%, #A855F7 100%)",
        "gradient-subtle": "linear-gradient(90deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))",
        "gradient-accent": "linear-gradient(135deg, #6366F1, #A855F7)",
        "gradient-card": "linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))",
        "gradient-glass": "linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))",
        "gradient-glow": "linear-gradient(135deg, rgba(59, 130, 246, 0.5), rgba(34, 211, 238, 0.5))",
        "cyber-grid": "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        "cyber-grid": "50px 50px",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "12px",
        lg: "16px",
        xl: "20px",
      },
      // Motion System
      transitionDuration: {
        fast: "120ms",
        normal: "200ms",
        smooth: "280ms",
        deliberate: "360ms",
        slow: "480ms",
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(0.4, 0, 0.2, 1)",
        accelerate: "cubic-bezier(0.4, 0, 1, 1)",
        decelerate: "cubic-bezier(0, 0, 0.2, 1)",
        smooth: "cubic-bezier(0.4, 0, 0.6, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
