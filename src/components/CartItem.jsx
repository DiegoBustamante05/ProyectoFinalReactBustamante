import React from "react";
import Button from '@mui/material/Button';
import { useCart } from "../context/CartContext";

const CartItem = ({prod}) => {
    const{removeItem}=useCart()
    return(
        <div className="orden">
            <img  className="imgCart" src={prod.img} alt={prod.name}/>
            <p>{prod.name}</p>
            <p>{prod.quantity}</p>
            <p>{prod.price}</p>
            <Button variant="contained" size="small" onClick={()=>removeItem(prod.id)}>
                        X
            </Button>
        </div>
    )
}

export default CartItem
