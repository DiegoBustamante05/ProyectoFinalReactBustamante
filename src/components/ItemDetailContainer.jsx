import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from '../mocks/mockData';
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({});
    const{id}= useParams()

useEffect(() => {
    data
        .then((res) => setDetalle(res.find((prod) => prod.id === id)))
        .catch((error) => {
        console.log(error);
    });
}, [id]);

    return <ItemDetail detalle={detalle} />;
};

export default ItemDetailContainer;
