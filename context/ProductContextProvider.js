import { ProductContext } from './ProductContext'
import { useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import commerce from 'lib/commerce'
import { useSnackbar } from 'react-simple-snackbar'
import { snackbarOptions } from 'utils'

export const ProductContextProvider = ({ children }) => {
  const [cart, setCart] = useState({})
  const [openSnackBar] = useSnackbar(snackbarOptions)

  const router = useRouter()

  // Fetch cart
  const fetchCart = async () => {
    const cartItem = await commerce.cart.retrieve()
    setCart(cartItem)
  }

  // handle add to cart function
  const handleAddToCart = async (productId, quantity, productName) => {
    const { cart } = await commerce.cart.add(productId, quantity)
    setCart(cart)
    openSnackBar(`${productName} added to basket `)
  }

  // Update cart
  const handleUpdateQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity })
    setCart(cart)
  }

  // Remove from cart
  const handleRemoveFromCart = async (productId, productName) => {
    const { cart } = await commerce.cart.remove(productId)
    setCart(cart)
    openSnackBar(`${productName} deleted `)
  }

  // Empty shopping basket

  const handleEmptyBasket = async () => {
    const response = await commerce.cart.empty()
    setCart(response.cart)
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    fetchCart()
  }, [])

  return (
    <ProductContext.Provider
      value={{
        cart,
        handleAddToCart,
        handleUpdateQty,
        handleRemoveFromCart,
        handleEmptyBasket,
      }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProductsContext = () => useContext(ProductContext)
