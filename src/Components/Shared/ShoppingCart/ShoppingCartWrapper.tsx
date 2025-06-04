'use client'

import dynamic from 'next/dynamic'

const ShoppingCart = dynamic(() => import('./ShoppingCart'), { ssr: false })

export default function ShoppingCartWrapper() {
  return <ShoppingCart />
}