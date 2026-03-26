import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)'],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "#1A5EA1", // Brand Logo Blue
                    hover: "#144D86", // Brand Logo Blue Hover
                    foreground: "#ffffff",
                },
                secondary: {
                    DEFAULT: "#0F2249", // Brand Logo Dark Navy
                    hover: "#081530", // Brand Logo Dark Navy Hover
                    foreground: "#ffffff",
                },
                accent: {
                    DEFAULT: "#F59E0B", // Amber 500
                    foreground: "#ffffff",
                },
                lightBg: "#ffffff",
                darkText: "#0F172A",
                grayText: "#475569", // Slate 600
            },
            animation: {
                "slide-up": "slideUp 0.8s ease-out forwards",
                "marquee": "marquee 25s linear infinite",
                "shimmer": "shimmer 2s infinite",
            },
            keyframes: {
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                shimmer: {
                    "0%": { transform: "translateX(-150%)" },
                    "100%": { transform: "translateX(150%)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
