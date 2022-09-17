import React from "react";
import Button from '@mui/material/Button';
import { useCart } from "../context/CartContext";

const CartItem = ({prod}) => {
    const{removeItem}=useCart()
    return(
        <div  style={{display: 'flex', justifyContent: 'space-between', alignItems:'center', margin:'30px'}}>
        <img src={prod.img} alt={prod.name}/>
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