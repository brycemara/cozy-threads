"use client"
import React, { useState, useEffect } from "react"
// components/ProductCard.tsx
import { getCart, addToCart, removeFromCart } from "@/utils/cart"

interface ProductCardProps {
  product: {
    id: string
    name: string
    description: string
    price: number
    image: string
  }
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [cart, setCart] = useState([])

  console.log(cart)

  useEffect(() => {
    setCart(getCart())
  }, [])

  const handleAddToCart = (productId: string) => {
    addToCart(productId)
    setCart(getCart())
  }

  const handleRemoveFromCart = (productId: string) => {
    removeFromCart(productId)
    setCart(getCart())
  }

  const getProductQuantity = (productId: string) => {
    const item = cart.find((item) => item.id === productId)
    return item ? item.quantity : 0
  }

  return (
    <div key={product.id} className="max-w-sm rounded overflow-hidden p-4">
      <img className="w-full" src={product.image} alt={product.name} />
      <div className="w-full py-4">
        <div className="text-l mb-2">{product.name}</div>
        <p className="text-gray-700 text-sm text-base">{product.description}</p>
        <p className="text-gray-900 font-bold mt-2">
          ${product.price.toFixed(2)}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={() => handleRemoveFromCart(product.id)}
          className="font-bold py-2 px-4 rounded"
        >
          -
        </button>
        <span className="mx-2">{getProductQuantity(product.id)}</span>
        <button
          onClick={() => handleAddToCart(product.id)}
          className="font-bold py-2 px-4 rounded"
        >
          +
        </button>
      </div>
    </div>
  )
}

export default ProductCard
