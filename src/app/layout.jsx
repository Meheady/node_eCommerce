
import 'bootstrap/dist/css/bootstrap.min.css';
import ConditionalHeaderFooter from "@/components/ConditionalHeaderFooter";
import { Roboto } from "next/font/google";
import Script from "next/script";
import {SessionProvider} from "next-auth/react";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export const metadata = {
    title: "MB-Tech",
    description: "MB-Tech products price list for.",
};


export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="manifest" href="/manifest.json"/>
        </head>
        <body className={roboto.className}>

        <>{children}</>


        <Script
        src="/js/star.js"
        />
        <Script
            src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js"
            strategy="lazyOnload"
        />
        </body>
        </html>
    );
}


