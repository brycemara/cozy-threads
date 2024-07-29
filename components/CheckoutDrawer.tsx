"use client"
import { getCart } from "@/utils/cart"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import { useRef, useEffect, useState } from "react"
import Checkout from "./Checkout"
import { products } from "@/constants/products"

export default function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLInputElement | any>()
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const cart = getCart()
    const items = getProductDetailsWithQuantity(cart)
    setCartItems(items)
  }, [isOpen])

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

  const CartItem = ({ item }: any) => {
    return (
      <div className="flex items-center mb-4 p-4 bg-white rounded-lg shadow-md">
        <img src={item.image} alt={item.name} className="w-24 h-24 mr-4" />
        <div>
          <h2 className="text-s font-semibold">{item.name}</h2>
          <p className="text-gray-600">Quantity: {item.quantity}</p>
          <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        View Cart
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart</DrawerHeader>

          <DrawerBody>
            {cartItems ? (
              cartItems.map((item: any) => (
                <CartItem key={item.id} item={item} />
              ))
            ) : (
              <p>loading</p>
            )}
          </DrawerBody>

          <DrawerFooter style={{ display: "flex", alignItems: "center" }}>
            <Checkout />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
