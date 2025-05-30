import { MainProducts } from "app/Components/home/MainProducts"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Future world",
  description: "Welcome to the future wirld, an ecommerce from other century",
  keywords: ["ecommerce","technology"]
}

export default function Home() {
  return (
    <main>  
      <MainProducts />
    </main>
  )
}