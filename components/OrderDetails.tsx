"use client"
import { useState, useEffect } from "react"
import { products } from "@/constants/products"
import { getCart } from "@/utils/cart"

const OrderConfirmationItem = ({ item }: any) => {
  return (
    <div className="flex items-center mb-4 p-4 bg-white shadow-sm">
      <img src={item.image} alt={item.name} className="w-24 h-24 mr-4" />
      <div>
        <h2 className="text-xl font-semibold">{item.name}</h2>
        <p className="text-gray-600">Quantity: {item.quantity}</p>
        <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
        <p className="text-gray-900 font-bold">
          Total: ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  )
}

const getProductDetailsWithQuantity = (cartItems: any) => {
  return cartItems
    .map((cartItem: any) => {
      const product = products.find((product) => product.id === cartItem.id)
      if (product) {
        return {
          ...product,
          quantity: cartItem.quantity,
        }
      }
      return null
    })
    .filter((item: any) => item !== null)
}

export default function OrderDetails() {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const cart = getCart()
    const items = getProductDetailsWithQuantity(cart)
    setCartItems(items)
  }, [])

  const totalAmount = cartItems?.reduce(
    (acc, item: any) => acc + item.price * item.quantity,
    0
  )
  return (
    <div>
      {cartItems.map((item: any) => (
        <OrderConfirmationItem key={item.id} item={item} />
      ))}
      <div className="flex justify-between items-centerpt-4 mt-4">
        <h2 className="text-xl font-semibold">Total Amount:</h2>
        <p className="text-xl font-bold text-gray-900">
          ${totalAmount.toFixed(2)}
        </p>
      </div>
    </div>
  )
}
