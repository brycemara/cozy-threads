import React from "react"
import { useRouter } from "next/router"

const OrderConfirmationPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <h1>Order Confirmation ID: {id}</h1>
      {/* Display order confirmation details using the ID */}
    </div>
  )
}

export default OrderConfirmationPage
