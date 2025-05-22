import { Roboto } from 'next/font/google'
import { Hero } from "app/Components/home/Hero"
import { Description } from "app/Components/home/Description"
import { Header } from 'app/Components/Shared/Header'
import { Footer } from 'app/Components/Shared/Footer'
import 'app/sass/globals.sass'

const roboto = Roboto({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <Hero />
        <Description />
        {children}
        <Footer />
      </body>
    </html>
  )
}