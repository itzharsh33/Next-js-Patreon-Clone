import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";
// this is sessionWrapper function which is imported from components/SessionWrapper
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get Me A Chai - A fund raising site",
  description: "this is fund raising website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white`}
      >
        <SessionWrapper>
        <Navbar />
        <div className="min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
          {children}
        </div>

        <Footer />
        </SessionWrapper>
        {/* Here, you are telling React: "Take the Navbar, div, and Footer components and pass them as the children prop to the SessionWrapper component." */}
      </body>
    </html>
  );
}
