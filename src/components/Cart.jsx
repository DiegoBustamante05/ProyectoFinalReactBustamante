import Button from '@mui/material/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {

    const {cart, removeItem, cartTotal, clear} = useCart()
    const navegar = useNavigate()
    
    
    return(
        <div>
            {
                !cart.length
                ? <div>
                    <h2>El carrito está vacio.</h2>
                    <h5>Conocé nuestros productos!</h5>
                    <Button variant="contained" size="small" onClick={()=>navegar('/')}>
                        Ver Productos
                    </Button>
                </div>
                : <div>
                    <h2>Productos en el carrito.</h2>
                    {cart.map((prod)=> <CartItem key={prod.id} prod={prod}/>)}
                    <div style={{display: 'flex', justifyContent: 'end', alignItems:'center', margin:'30px'}}>
                    <h4> Total: {cartTotal()}</h4>
                    </div>
                    
                    <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems:'center', margin:'30px'}}>
                        
                        <Button variant="contained" size="small" onClick={clear}>
                                Vaciar Carrito
                        </Button>
                        <Button variant="contained" size="small">
                                Terminar Compra
                        </Button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart