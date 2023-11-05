import Navbar from '@/components/Navbar'
import '../styles/globals.css'
import Footer from '@/components/Footer'
import 'flowbite';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {
    try {
      if (localStorage.getItem('cart')) {
        let data = localStorage.getItem('cart')
        data && setCart(JSON.parse(data))
      }

    } catch (error) {
      console.error(error)
      localStorage.clear()
    }
  }, [])

  const saveCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
    getSubTotal(cart)
  }

  const getSubTotal = (cart) => {
    let subt = 0
    let key = Object.keys(cart)
    for (let i = 0; i < key.length; i++) {
      subt += cart[key[i]].price * cart[key[i]].qty
    }

    setSubTotal(subt)
    return subt
  }

  const clearCart = () => {
    setCart({})
    saveCart({})
  }

  const addToCart = (itemCode, qty, price, name, size, varient) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, varient }
    }

    setCart(newCart)
    saveCart(newCart)
  }

  const resizeCart = (itemCode, qty) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }

    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode]
    }

    setCart(newCart)
    saveCart(newCart)
  }

  return (
    <>
      <Navbar cart={cart} subTotal={subTotal} addToCart={addToCart} resizeCart={resizeCart} clearCart={clearCart} getSubTotal={getSubTotal} />
      <Component cart={cart} subTotal={subTotal} addToCart={addToCart} resizeCart={resizeCart} clearCart={clearCart} {...pageProps} getSubTotal={getSubTotal} />
      <Footer />
    </>
  )

}
