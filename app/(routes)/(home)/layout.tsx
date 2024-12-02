import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/globals.css"
import NavbarPage from "@/_pages/NavbarPage";
import FooterPage from "@/_pages/FooterPage";
import NextTopLoader from 'nextjs-toploader';
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = localFont({
    src: "../../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Deerwalk Sifal School",
    description: "Deerwalk Sifal School is a .....",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased `}
            >
                <NextTopLoader/>
                <NavbarPage />
                {children}
                <FooterPage />
                <GoogleAnalytics gaId="" />
            </body>
        </html>
    );
}
