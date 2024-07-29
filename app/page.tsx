import ProductCard from "@/components/ProductCard"
import { products } from "@/constants/products"

import Cart from "@/components/CheckoutDrawer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-14 pb-14">
      <h1 className="text-3xl text-bold py-16">Cozy Threads</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-cols-3 gap-4">
        {products.map((product) => {
          return <ProductCard product={product} />
        })}
      </div>
      <Cart />
    </main>
  )
}
