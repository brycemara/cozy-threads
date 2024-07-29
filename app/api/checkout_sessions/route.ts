const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
import { NextResponse } from "next/server"
import { headers } from "next/headers"

export async function POST(req: any) {
  const request = await req.json()

  const headersList = headers()
  const origin = headersList.get("origin")
  // Map cart items to the Stripe line_items format
  const line_items = request.cartItems.map((item: any) => {
    return {
      price: item.id,
      quantity: item.quantity,
    }
  })

  try {
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${origin}/confirmation`,
      cancel_url: `${request.returnUrl}`,
    })

    return NextResponse.json(session)
  } catch (err: any) {
    return NextResponse.json({ message: err.message })
  }
}
