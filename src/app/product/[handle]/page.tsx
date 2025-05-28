"use client"

import { useParams, useSearchParams } from "next/navigation"


interface ProductPageProps{
    searchParams: {
        id: string
    }
}

export default function ProductPage(props: ProductPageProps){
    //const params = useParams();
    const searchParamas = useSearchParams();
    const id = searchParamas.get("id")
    console.log("Search params: ", id)
    return <h1>Si</h1>
}