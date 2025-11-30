import "./globals.css";
import "@/utils/disableconsole.js";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Mohit",
  description: "A Production Ready Website Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
