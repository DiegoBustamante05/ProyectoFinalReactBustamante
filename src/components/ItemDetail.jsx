import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import { useCart } from "../context/CartContext";

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
        <div
            style={{
            width: '100%',
            minHeight: '83.5vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        >
            <h3>{name}</h3>
            <img src={img} alt={name} />
            <p className="descriptionMargin">{description}</p>
            <h5>${price}</h5>
            { !compra ? <ItemCount stock={stock} initial={1} onAdd={onAdd} count={count} setCount={setCount} />: 
            <Container sx={{display: 'flex', justifyContent:'space-around'}}>
                <Button variant="contained" size="small" onClick={()=>navegar('/')}>
                Seguir Comprando
                </Button>
                <Button variant="contained" size="small" onClick={()=>navegar('/cart')}>
                Ir al Carrito
                </Button>
            </Container>}
        </div>
    );
};

export default ItemDetail;
