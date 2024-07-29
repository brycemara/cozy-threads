export const addToCart = (productId: string) => {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]")
  const index = cart.findIndex((item: string) => item.id === productId)
  if (index !== -1) {
    cart[index].quantity += 1
  } else {
    cart.push({ id: productId, quantity: 1 })
  }
  localStorage.setItem("cart", JSON.stringify(cart))
}

export const removeFromCart = (productId: string) => {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]")
  const index = cart.findIndex((item: any) => item.id === productId)
  if (index !== -1) {
    if (cart[index].quantity > 1) {
      cart[index].quantity -= 1
    } else {
      cart = cart.filter((item: any) => item.id !== productId)
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart))
}

export const getCart = () => {
  return JSON.parse(localStorage.getItem("cart") || "[]")
}
