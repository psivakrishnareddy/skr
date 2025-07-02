import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
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
        cyber: {
          pink: "#ff00aa",
          cyan: "#00ffff",
          purple: "#aa00ff",
          green: "#00ff41",
          orange: "#ff9500",
          blue: "#0066ff",
        },
        neon: {
          pink: "#ff0080",
          cyan: "#00f5ff",
          green: "#39ff14",
          purple: "#b300ff",
          orange: "#ff6600",
          yellow: "#ffff00",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        matrix: {
          "0%": {
            transform: "translateY(-100vh)",
          },
          "100%": {
            transform: "translateY(100vh)",
          },
        },
        glitch: {
          "0%, 100%": {
            textShadow:
              "0.05em 0 0 #00ffff, -0.05em -0.025em 0 #ff00aa, 0.025em 0.05em 0 #ffff00",
            filter: "blur(0px)",
          },
          "15%": {
            textShadow:
              "0.05em 0 0 #00ffff, -0.05em -0.025em 0 #ff00aa, 0.025em 0.05em 0 #ffff00",
            filter: "blur(0px)",
          },
          "16%": {
            textShadow:
              "-0.05em -0.025em 0 #00ffff, 0.025em 0.025em 0 #ff00aa, -0.05em -0.05em 0 #ffff00",
            filter: "blur(1px)",
          },
          "49%": {
            textShadow:
              "-0.05em -0.025em 0 #00ffff, 0.025em 0.025em 0 #ff00aa, -0.05em -0.05em 0 #ffff00",
            filter: "blur(1px)",
          },
          "50%": {
            textShadow:
              "0.025em 0.05em 0 #00ffff, 0.05em 0 0 #ff00aa, 0 -0.05em 0 #ffff00",
            filter: "blur(0px)",
          },
          "99%": {
            textShadow:
              "0.025em 0.05em 0 #00ffff, 0.05em 0 0 #ff00aa, 0 -0.05em 0 #ffff00",
            filter: "blur(0px)",
          },
        },
        "neon-glow": {
          "0%, 100%": {
            boxShadow:
              "0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor",
          },
          "50%": {
            boxShadow:
              "0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor",
          },
        },
        "data-stream": {
          "0%": {
            transform: "translateY(-100%) skewY(10deg)",
            opacity: "0",
          },
          "10%": {
            opacity: "1",
          },
          "90%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(100vh) skewY(10deg)",
            opacity: "0",
          },
        },
        scan: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(100vh)",
          },
        },
        "hacker-rain": {
          "0%": {
            transform: "translateY(-50vh)",
            opacity: "0",
          },
          "10%": {
            opacity: "0.8",
          },
          "90%": {
            opacity: "0.8",
          },
          "100%": {
            transform: "translateY(120vh)",
            opacity: "0",
          },
        },
        "matrix-fall": {
          "0%": {
            transform: "translateY(-30vh)",
            opacity: "0",
          },
          "10%": {
            opacity: "0.7",
          },
          "90%": {
            opacity: "0.5",
          },
          "100%": {
            transform: "translateY(130vh)",
            opacity: "0",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(138, 43, 226, 0.5)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(138, 43, 226, 0.8)",
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "-200% center",
          },
          "100%": {
            backgroundPosition: "200% center",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        matrix: "matrix 3s linear infinite",
        glitch: "glitch 2s ease-in-out infinite",
        "neon-glow": "neon-glow 2s ease-in-out infinite alternate",
        "data-stream": "data-stream 3s linear infinite",
        "hacker-rain": "hacker-rain 2.5s linear infinite",
        "matrix-fall": "matrix-fall 4s linear infinite",
        scan: "scan 2s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
