import ProductCard from "@/components/ProductCard"
import { products } from "@/constants/products"

export default function Home() {
  // const removeFromCart = (productId: number) => {
  //   let cart = JSON.parse(localStorage.getItem("cart")) || []
  //   cart = cart.filter((item: number) => item !== productId)
  //   localStorage.setItem("cart", JSON.stringify(cart))
  // }

  // const getCart = () => {
  //   return JSON.parse(localStorage.getItem("cart")) || []
  // }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-14">
      <h1 className="text-3xl text-bold py-16">Cozy Threads</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-cols-3 gap-4">
        {products.map((product) => {
          return <ProductCard product={product} />
        })}
      </div>
      <button>Checkout</button>
    </main>
  )
}