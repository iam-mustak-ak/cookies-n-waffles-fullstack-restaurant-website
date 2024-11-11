/** @type {import('tailwindcss').Config} */
module.exports = {
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
        },
    },
    plugins: [],
};
