
import { Geist, Geist_Mono } from "next/font/google";

import { Header } from "app/Components/Shared/Header";

import { Footer } from "app/Components/Shared/Footer";

import "app/sass/globals.sass";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100","400"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

     
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        {children}
        <Footer/>

      </body>
    </html>
  );
}
