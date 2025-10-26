import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "../components/sections/Navbar";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
});

export const metadata = {
  title: "Easy Pay - Simplify Your Payments",
  description: "Experience seamless transactions with Easy Pay, your all-in-one payment solution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}