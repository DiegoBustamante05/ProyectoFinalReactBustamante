import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';
import { useCart } from '../context/CartContext';

const CartWidget = () => {
    const{cartQuantity, cart} =useCart()
    return(
        <div className='widgetColor'>
        <ShoppingCartIcon/>
        <span>{cartQuantity() || ''  }</span>
        </div>
    )
}

export default CartWidget