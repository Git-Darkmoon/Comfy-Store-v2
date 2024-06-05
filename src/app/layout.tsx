import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.scss"
import Navbar from "@/components/Layout/Navbar"
import Footer from "@/components/Layout/Footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  fallback: ["system-ui", "Helvetica", "Arial", "sans-serif"],
})

export const metadata: Metadata = {
  title: "Comfy Store",
  description:
    "E-commerce for high-end furniture where luxury and comfort converge to create a haven for discerning individuals seeking to transform spaces.",
  keywords: [
    "e-commerce",
    "luxury",
    "high-end",
    "comfort",
    "furniture",
    "sofas",
    "beds",
    "tables",
    "chairs",
    "quiet luxury",
  ],
  authors: {
    name: "Nicolas Mayorga",
    url: "https://darkmoon.vercel.app/",
  },
  creator: "Nicolas Mayorga",
  robots: {
    index: true,
    follow: false,
    noarchive: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Comfy Store",
    description:
      "E-commerce for high-end furniture where luxury and comfort converge to create a haven for discerning individuals seeking to transform spaces.",
    images: {
      url: "/assets/trending/Luxury_Bedroom.webp",
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
