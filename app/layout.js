import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Al-Huda Quran Learning Academy - Online Quran Classes",
  description: "Learn Quran online with certified teachers. Noorani Qaida, Quran Reading, Memorization, and Tajweed classes available. Free 3-day trial.",
  keywords: "Quran learning, online Quran classes, Noorani Qaida, Quran memorization, Tajweed, Islamic education, online madrasa",
  openGraph: {
    title: "Al-Huda Quran Learning Academy",
    description: "Join thousands of students learning Quran online with our certified teachers",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al-Huda Quran Learning Academy",
    description: "Learn Quran online with certified teachers",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow bg-gradient-to-b from-emerald-50 to-blue-50">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 