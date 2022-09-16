import React from 'react'
import { useCart } from '../context/CartContext'

const Cart = () => {

    const {cart} = useCart()
    console.log(cart)
    
    return(
        <div>
            <h2>Carrito</h2>
        </div>
    )
}

export default Cart