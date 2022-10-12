import Button from '@mui/material/Button';
import { Container } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ detalle }) => {
    const [count, setCount] = useState(1);
    const [compra, setCompra] = useState(false)
    const { id, name, description, price, img, stock } = detalle;
    const navegar = useNavigate()
    const{addItem}=useCart()

    
    const onAdd = () => {
        let purchase = {
            id,
            name,
            price,
            stock,
            img,
            quantity: count
        }
        setCompra(true)
        addItem(purchase)
    };

    return (
        <div className='itemDetail'>
            <h3>{name}</h3>
            <img src={img} alt={name} />
            <p className="descriptionMargin">{description}</p>
            <h5>${price}</h5>
            { !compra ? <ItemCount stock={stock} initial={1} onAdd={onAdd} count={count} setCount={setCount} />: 
            <Container sx={{display: 'flex', justifyContent:'space-around'}}>
                <Button variant="contained" color="info" size="small" onClick={()=>navegar('/')}>
                Seguir Comprando
                </Button>
                <Button variant="contained" color="info" size="small" onClick={()=>navegar('/cart')}>
                Ir al Carrito
                </Button>
            </Container>}
        </div>
    );
};

export default ItemDetail;
