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
            <h3>{name}</h3>
            <img src={img} alt={name} />
            <p className="descriptionMargin">{description}</p>
            <h5>${price}</h5>
            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        </div>
    );
};

export default ItemDetail;
