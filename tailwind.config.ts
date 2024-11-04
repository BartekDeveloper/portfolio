import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: ["class"],
    content: ["./src/**/*.{html,js,svelte,ts}"],
    safelist: ["dark"],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px"
            }
        },
        extend: {
            colors: {
                border: "hsl(var(--border) / <alpha-value>)",
                input: "hsl(var(--input) / <alpha-value>)",
                ring: "hsl(var(--ring) / <alpha-value>)",
                background: "hsl(var(--background) / <alpha-value>)",
                foreground: "hsl(var(--foreground) / <alpha-value>)",
                
                // Primary Colors (Green)
                primary: {
                    DEFAULT: "hsl(var(--primary) / <alpha-value>)",
                    foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
                    light: "hsl(var(--primary-light) / <alpha-value>)",
                    dark: "hsl(var(--primary-dark) / <alpha-value>)",
                    muted: "hsl(var(--primary-muted) / <alpha-value>)",
                },
                
                // Secondary Colors (Purple)
                secondary: {
                    DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
                    foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
                    light: "hsl(var(--secondary-light) / <alpha-value>)",
                    dark: "hsl(var(--secondary-dark) / <alpha-value>)",
                    muted: "hsl(var(--secondary-muted) / <alpha-value>)",
                },
                
                // Accent Colors (Slate)
                accent: {
                    DEFAULT: "hsl(var(--accent) / <alpha-value>)",
                    foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
                    light: "hsl(var(--accent-light) / <alpha-value>)",
                    dark: "hsl(var(--accent-dark) / <alpha-value>)",
                    muted: "hsl(var(--accent-muted) / <alpha-value>)",
                },
                
                // Surface Colors
                surface: {
                    DEFAULT: "hsl(var(--surface) / <alpha-value>)",
                    foreground: "hsl(var(--surface-foreground) / <alpha-value>)",
                    muted: "hsl(var(--surface-muted) / <alpha-value>)",
                    elevated: "hsl(var(--surface-elevated) / <alpha-value>)",
                },
                
                // Muted Colors
                muted: {
                    DEFAULT: "hsl(var(--muted) / <alpha-value>)",
                    foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
                    primary: "hsl(var(--muted-primary) / <alpha-value>)",
                    secondary: "hsl(var(--muted-secondary) / <alpha-value>)",
                },
                
                // UI Elements
                destructive: {
                    DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
                    foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
                },
                
                popover: {
                    DEFAULT: "hsl(var(--popover) / <alpha-value>)",
                    foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
                },
                
                card: {
                    DEFAULT: "hsl(var(--card) / <alpha-value>)",
                    foreground: "hsl(var(--card-foreground) / <alpha-value>)",
                    muted: "hsl(var(--card-muted) / <alpha-value>)",
                },

                // Status Colors
                success: {
                    DEFAULT: "hsl(var(--success) / <alpha-value>)",
                    foreground: "hsl(var(--success-foreground) / <alpha-value>)",
                },
                
                warning: {
                    DEFAULT: "hsl(var(--warning) / <alpha-value>)",
                    foreground: "hsl(var(--warning-foreground) / <alpha-value>)",
                },
                
                info: {
                    DEFAULT: "hsl(var(--info) / <alpha-value>)",
                    foreground: "hsl(var(--info-foreground) / <alpha-value>)",
                },

                // Interactive States
                focus: "hsl(var(--focus) / <alpha-value>)",
                hover: "hsl(var(--hover) / <alpha-value>)",
                active: "hsl(var(--active) / <alpha-value>)",
                disabled: {
                    DEFAULT: "hsl(var(--disabled) / <alpha-value>)",
                    foreground: "hsl(var(--disabled-foreground) / <alpha-value>)",
                },

                // Sidebar Colors
                sidebar: {
                    DEFAULT: "hsl(var(--sidebar-background) / <alpha-value>)",
                    foreground: "hsl(var(--sidebar-foreground) / <alpha-value>)",
                    muted: "hsl(var(--sidebar-muted) / <alpha-value>)",
                    primary: "hsl(var(--sidebar-primary) / <alpha-value>)",
                    "primary-foreground": "hsl(var(--sidebar-primary-foreground) / <alpha-value>)",
                    secondary: "hsl(var(--sidebar-secondary) / <alpha-value>)",
                    accent: "hsl(var(--sidebar-accent) / <alpha-value>)",
                    "accent-foreground": "hsl(var(--sidebar-accent-foreground) / <alpha-value>)",
                    border: "hsl(var(--sidebar-border) / <alpha-value>)",
                    ring: "hsl(var(--sidebar-ring) / <alpha-value>)",
                },
            },
            borderRadius: {
                xl: "calc(var(--radius) + 4px)",
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)"
            },
            fontFamily: {
                sans: [...fontFamily.sans]
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
                "caret-blink": {
                    "0%,70%,100%": { opacity: "1" },
                    "20%,50%": { opacity: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "caret-blink": "caret-blink 1.25s ease-out infinite",
            },
        },
    },
    plugins: [tailwindcssAnimate],
};

export default config;