import getStripe from "@/utils/stripe"
import { Button } from "@chakra-ui/react"

const stripePromise = getStripe()

export default function Checkout() {
  const handleCheckout = async () => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]")

    const stripe = await stripePromise
    const response = await fetch("/api/checkout_sessions", {
      method: "POST",
      body: JSON.stringify({
        cartItems,
        returnUrl: window.location.origin,
      }),
    })
    const session = await response.json()
    if (stripe) {
      await stripe.redirectToCheckout({ sessionId: session.id })
    }
  }

  return (
    <div className="w-full flex justify-center">
      <Button colorScheme="teal" onClick={handleCheckout}>
        Checkout
      </Button>
    </div>
  )
}
