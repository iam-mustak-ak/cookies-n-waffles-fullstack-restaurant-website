/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#472515",
                secondary: "#C27D5C",
                textColor: "#686A79",
                secondaryTextColor: "#191A23",
            },
            fontFamily: {
                dmSans: "var(--font-dm-sans)",
            },
            container: {
                center: "true",
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                    lg: "4rem",
                    xl: "5rem",
                    "2xl": "6rem",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            backgroundImage: {
                hours: "url(/assets/hoursBg.png)",
                pageHero: "url(/assets/page-hero-img.png)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
