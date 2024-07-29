import OrderDetails from "@/components/OrderDetails"

export default function OrderConfirmation() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white p-6">
        <h1 className="text-3xl font-bold text-center py-8">
          Thanks for your order!
        </h1>
        <p className="text-center text-gray-700 mb-6">
          Your order has been successfully placed. Below are the details of your
          purchase.
        </p>
        <OrderDetails />
      </div>
    </div>
  )
}
