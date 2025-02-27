import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


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
        <header>
        <Navbar />
        </header>
        
        <main>
        {children}
        </main>
       
       <footer>
        <Footer />
       </footer>
      </body>
    </html>
  );
}
