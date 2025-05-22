import { Description } from "app/Components/home/Description"
import { Hero } from "app/Components/home/Hero"
import React from "react"


export default function HomeLayout({children} : {children: React.ReactNode}) {
  return (
   <div>
        <Hero/>
        <Description/>
        {children}
   </div>
  )
}