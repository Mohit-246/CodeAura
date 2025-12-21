import "./globals.css";
import "@/utils/disableconsole.js";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Code Aura",
  description: "A Production Ready Website Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
       
        {children}
      </body>
    </html>
  );
}
