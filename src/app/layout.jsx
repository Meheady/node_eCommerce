
import 'bootstrap/dist/css/bootstrap.min.css';
import ConditionalHeaderFooter from "@/components/ConditionalHeaderFooter";
import { Roboto } from "next/font/google";
import Script from "next/script";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export const metadata = {
    title: "Price List | MB-Tech",
    description: "Price list for MB-Tech products.",
};


export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={roboto.className}>
        <div className="container">{children}</div>
        <Script
            src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js"
            strategy="lazyOnload"
        />
        </body>
        </html>
    );
}

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <ConditionalHeaderFooter>
//           <main>{children}</main>
//         </ConditionalHeaderFooter>
//       </body>
//     </html>
//   );
// }



