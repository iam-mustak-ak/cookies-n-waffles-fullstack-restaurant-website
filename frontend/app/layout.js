import "./globals.css";

import { DM_Sans, Playfair_Display } from "next/font/google";

const playfair_Display = Playfair_Display({ subsets: ["latin"] });
const dm_Sans = DM_Sans({
    subsets: ["latin"],
    variable: "--font-dm-sans",
});

export const metadata = {
    title: "Cookies n Waffles",
    description: "A iconic cookies and waffles shop",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${playfair_Display.className} ${dm_Sans.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
