import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import Sobre from "@/pages/Sobre";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TCClass",
  description: "Revise e Corrija seu TCC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <div>
          <div>
          <Home />
          </div>
          <div className="mt-16">
          <Sobre />
          </div>
        </div>
      </body>
    </html>
  );
}
