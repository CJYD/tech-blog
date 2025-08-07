import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";

const exo = Exo({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-exo",
});

export const metadata: Metadata = {
  title: "Tech Blog - Exploring Digital Innovation",
  description: "Thoughts on technology, AI, productivity, and the future of digital innovation",
  keywords: "technology, tech blog, AI, productivity, software development, innovation, programming",
  authors: [{ name: "Christian Duque" }],
  openGraph: {
    title: "Tech Blog - Exploring Digital Innovation",
    description: "Thoughts on technology, AI, productivity, and the future of digital innovation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exo.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}