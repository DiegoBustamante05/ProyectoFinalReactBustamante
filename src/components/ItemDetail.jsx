import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ detalle }) => {
    const { id, name, description, price, img, stock } = detalle;
    const onAdd = () => {
        console.log('compraste');
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
        <img src={img} alt={name} />
        <p>{name}</p>
        <p>{description}</p>
        <p>${price}</p>
        <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        </div>
    );
};

export default ItemDetail;
