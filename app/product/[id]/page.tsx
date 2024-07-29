import React from "react"
import { useRouter } from "next/router"

const ProductPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <h1>Product ID: {id}</h1>
      {/* Fetch and display product details using the ID */}
    </div>
  )
}

export default ProductPage
